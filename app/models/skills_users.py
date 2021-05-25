from .db import db


skills_users = db.Table(
    "skills_users",
    db.Column("id", db.Integer, primary_key=True),
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("skillId", db.Integer, db.ForeignKey("skills.id"))
)


# db.Column('id', db.Integer, primary_key=True),
#     db.Column("userId", db.Integer, db.ForeignKey("users.id")),
#     db.Column("gameId", db.Integer, db.ForeignKey("games.id"))
