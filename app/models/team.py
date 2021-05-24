from enum import unique
from .db import db

class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False, unique = True)
    blurb = db.Column(db.Text)
    avatar = db.Column(db.String)
    website = db.Column(db.String)
    github = db.Column(db.String)
    recruiting = db.Column(db.Boolean)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "recruiting": self.recruiting
        }