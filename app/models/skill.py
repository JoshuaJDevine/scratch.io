from .db import db




class Skill(db.Model):

    __tablename__ = 'skills'

    id = db.Column(db.Integer, primary_key=True)
    skill_name = db.Column(db.String(50), nullable=False)

    

    def to_dict(self):
        return {
            "id": self.id,
            "skill_name": self.skill_name
        }
