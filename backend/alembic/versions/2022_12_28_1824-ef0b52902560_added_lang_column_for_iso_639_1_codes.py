# -*- coding: utf-8 -*-
"""Added lang column for ISO-639-1 codes

Revision ID: ef0b52902560
Revises: d24b37426857
Create Date: 2022-12-28 18:24:21.393973

"""
import sqlalchemy as sa
import sqlmodel
from alembic import op

# revision identifiers, used by Alembic.
revision = "ef0b52902560"
down_revision = "d24b37426857"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "post", sa.Column("lang", sqlmodel.sql.sqltypes.AutoString(length=200), nullable=False, default="en-US")
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("post", "lang")
    # ### end Alembic commands ###
