"""add content to posts table

Revision ID: 72f9f7a49ca4
Revises: c88574773c63
Create Date: 2021-12-11 08:50:42.825262

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72f9f7a49ca4'
down_revision = 'c88574773c63'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('posts', sa.Column('content', sa.String(), nullable=False))
    pass


def downgrade():
    op.drop_column('posts', 'content')
    pass
