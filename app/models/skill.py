from .db import db
from .skills_users import skills_users
from .skills_teams import skills_teams

# need to define join table



class Skill(db.Model):

    __tablename__ = 'skills'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    users = db.relationship(
        "User",
        secondary=skills_users,
        back_populates="skills"
    )


    teams = db.relationship(
        "Team",
        secondary=skills_teams,
        back_populates="skills"
    )

    def get_joined_users(self):
        return [user.to_dict() for user in self.users]

    def get_joined_teams(self):
        return [team.to_dict() for team in self.teams]

    def to_dict(self, users=False, teams=False):
        dct = {
                "id": self.id,
                "name": self.name
            }

        if users:
            dct["users"] = self.get_joined_users()

        if teams:
            dct["teams"] = self.get_joined_teams()

        return dct

    # def to_dict_users(self):
    #     return {
    #         "id": self.id,
    #         "skill_name": self.skill_name,
    #         "users": [user.to_dict() for user in self.users]
    #     }


    # def to_dict_teams(self):
    #     return {
    #         "id": self.id,
    #         "skill_name": self.skill_name,
    #         "teams": [team.to_dict() for team in self.teams]
    #     }

    # def to_dict_users_and_teams(self):
    #     return {
    #         "id": self.id,
    #         "skill_name": self.skill_name,
    #         "users": [user.to_dict() for user in self.users],
    #         "teams": [team.to_dict() for team in self.teams]
    #     }
