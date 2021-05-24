from .db import db

# need to define join table



class Skill(db.Model):

    __tablename__ = 'skills'

    id = db.Column(db.Integer, primary_key=True)
    skill_name = db.Column(db.String(50), nullable=False)

    # make db relationships
    # users_skills = db.relationship('User', secondary=, backref=)
    # skills_teams = db.relationship('Team', secondary=, backref=)


    def to_dict(self):
        return {
            "id": self.id,
            "skill_name": self.skill_name
        }
