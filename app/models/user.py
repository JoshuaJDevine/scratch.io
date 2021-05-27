# from .users_games import users_games
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from .db import db
from .skills_users import skills_users
from .users_teams import users_teams

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(40), nullable=False, unique=True)
  first_name = db.Column(db.String(40))
  last_name = db.Column(db.String(40))
  email = db.Column(db.String(255), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False)

  # One to Many
  owned_teams = db.relationship(
    "Team",
    back_populates='captain'
  )
  owned_gamejams = db.relationship(
    "GameJam",
    back_populates='owner'
  )

  # Many to Many
  teams = db.relationship(
    "Team",
    secondary=users_teams,
    back_populates='users'
  )
  skills = db.relationship(
    "Skill",
    secondary=skills_users,
    back_populates="users"
  )
  games = db.relationship(
    "Game",
    backref='users',
    lazy=True
  )

  @property
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def get_joined_teams(self):
    return [team.to_dict() for team in self.teams]

  def get_joined_skills(self):
    return [skill.to_dict() for skill in self.skills]

  def to_dict(self, teams=False, skills=False):
    dct = {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }

    if teams:
      dct["teams"] = self.get_joined_teams()

    if skills:
        dct["skills"] = self.get_joined_skills()

    return dct
