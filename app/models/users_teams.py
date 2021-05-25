from .db import db
from sqlalchemy.ext.declarative import declarative_base


users_teams = db.Table(
    "users_teams",
    db.Column('id', db.Integer, primary_key=True),
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("teamId", db.Integer, db.ForeignKey("teams.id"))
)
