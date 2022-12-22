# -*- coding: utf-8 -*-
import asyncio
from abc import ABC, abstractmethod
from datetime import datetime

import discord
from loguru import logger


class ChannelExpiredException(Exception):
    pass


class ChannelHandlerBase(ABC):
    queue: asyncio.Queue
    completed: bool
    expiry_date: datetime
    expired: bool

    def __init__(self, *, expiry_date: datetime = None):
        self.expiry_date = expiry_date
        self.expired = False
        self.queue = asyncio.Queue()
        self.completed = False

    async def read(self) -> discord.Message:
        """Call this method to read the next message from the user in the handler method."""
        msg = await self.queue.get()
        if msg is None and self.expired:
            raise ChannelExpiredException()
        return msg

    def on_reply(self, message: discord.Message) -> None:
        self.queue.put_nowait(message)

    def on_expire(self) -> None:
        logger.info("ChannelHandler: on_expire")
        self.expired = True
        self.queue.put_nowait(None)

    def on_completed(self) -> None:
        logger.info("ChannelHandler: on_completed")
        self.completed = True

    def tick(self, now: datetime):
        if now > self.expiry_date and not self.expired:
            self.on_expire()

    @abstractmethod
    async def handler_loop(self):
        ...

    async def finalize(self):
        pass


class AutoDestructThreadHandler(ChannelHandlerBase):
    first_message: discord.Message
    thread: discord.Thread

    def __init__(self, *, expiry_date: datetime = None):
        super().__init__(expiry_date=expiry_date)

    async def read(self) -> discord.Message:
        try:
            return await super().read()
        except ChannelExpiredException:
            await self.cleanup()
            raise

    async def cleanup(self):
        if self.thread:
            logger.debug(f"[expired] deleting thread: {self.thread.name}")
            await self.thread.delete()
            self.thread = None
        if self.first_message:
            logger.debug(f"[expired] deleting first_message: {self.first_message.content}")
            await self.first_message.delete()
            self.first_message = None

    async def finalize(self):
        await self.cleanup()
        return await super().finalize()
