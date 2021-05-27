from .db import db
from .users_teams import users_teams
from .teams_gamejams import teams_gamejams
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
    captainId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    # One to Many
    captain = db.relationship(
        "User",
        back_populates="owned_teams"
    )

    # Many to Many
    users = db.relationship(
        'User',
        secondary=users_teams,
        back_populates='teams'
    )
    gamejams = db.relationship(
        'GameJam',
        secondary=teams_gamejams,
        back_populates='teams'
    )
    skills = db.relationship(
        "Skill",
        secondary=skills_teams,
        back_populates="teams"
    )
    games = db.relationship(
        "Game",
        backref='teams',
        lazy=True
    )

    def get_joined_users(self):
        return [user.to_dict() for user in self.users]

    def get_joined_gamejams(self):
        return [gamejam.to_dict() for gamejam in self.gamejams]

    def get_joined_skills(self):
        return [skill.to_dict() for skill in self.skills]

    def get_joined_games(self):
        return [game.to_dict() for game in self.games]

    def to_dict(self, users=False, gamejams=False, skills=False, games=False):
        dct = {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "recruiting": self.recruiting,
            "captainId": self.captainId
        }

        if users:
            dct["users"] = self.get_joined_users()

        if gamejams:
            dct["gamejams"] = self.get_joined_gamejams()

        if skills:
            dct["skills"] = self.get_joined_skills()

        if games:
            dct["games"] = self.get_joined_games()

        return dct
