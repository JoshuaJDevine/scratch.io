"""create game jam table

Revision ID: 6bd2eb770410
Revises: 41d020aeeb80
Create Date: 2021-05-24 14:22:01.994743

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6bd2eb770410'
down_revision = '41d020aeeb80'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('gamejams',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('theme', sa.String(), nullable=False),
    sa.Column('blurb', sa.Text(), nullable=False),
    sa.Column('avatar', sa.String(), nullable=True),
    sa.Column('website', sa.String(), nullable=True),
    sa.Column('github', sa.String(), nullable=True),
    sa.Column('userLimit', sa.Integer(), nullable=False),
    sa.Column('startDate', sa.Date(), nullable=False),
    sa.Column('endDate', sa.Date(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('gamejams')
    # ### end Alembic commands ###