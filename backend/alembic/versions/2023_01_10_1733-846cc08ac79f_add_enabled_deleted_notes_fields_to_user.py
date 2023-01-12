"""Add enabled, deleted, notes fields to User

Revision ID: 846cc08ac79f
Revises: aac6b2f66006
Create Date: 2023-01-10 17:33:07.104596

"""
import sqlalchemy as sa
import sqlmodel
from alembic import op

# revision identifiers, used by Alembic.
revision = "846cc08ac79f"
down_revision = "befa42582ea4"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("user", sa.Column("enabled", sa.Boolean(), server_default=sa.text("true"), nullable=False))
    op.add_column("user", sa.Column("deleted", sa.Boolean(), server_default=sa.text("false"), nullable=False))
    op.add_column(
        "user",
        sa.Column("notes", sqlmodel.sql.sqltypes.AutoString(length=1024), server_default="", nullable=False),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("user", "notes")
    op.drop_column("user", "deleted")
    op.drop_column("user", "enabled")
    # ### end Alembic commands ###
