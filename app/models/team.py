from enum import unique
from .db import db
from .skills_teams import skills_teams

class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False, unique = True)
    blurb = db.Column(db.Text)
    avatar = db.Column(db.String)
    website = db.Column(db.String)
    github = db.Column(db.String)
    recruiting = db.Column(db.Boolean)

    skills = db.relationship(
        "Skill",
        secondary=skills_teams,
        back_populates="teams"
    )

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


    def to_dict_skills(self):
         return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "recruiting": self.recruiting,
            "skills": [skill.to_dict() for skill in self.skills]
        }
