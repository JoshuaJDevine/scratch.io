from .db import db
from sqlalchemy.ext.declarative import declarative_base


tags_gamejams = db.Table(
    "tags_gamejams",
    db.Column("tagId", db.Integer, db.ForeignKey("tags.id")),
    db.Column("gameJamId", db.Integer, db.ForeignKey("gamejams.id"))
)