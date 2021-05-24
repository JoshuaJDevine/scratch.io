from .db import db

class GameJam(db.Model):
    __tablename__ = "gamejams"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    theme = db.Column(db.String, nullable=False)
    blurb = db.Column(db.Text, nullable=False)
    avatar = db.Column(db.String)
    website = db.Column(db.String)
    github = db.Column(db.String)
    userLimit = db.Column(db.Integer, nullable=False)
    startDate = db.Column(db.Date, nullable=False)
    endDate = db.Column(db.Date, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "theme": self.theme,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "userLimit": self.userLimit,
            "startDate": self.startDate,
            "endDate": self.endDate,
        }