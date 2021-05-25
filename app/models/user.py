from .users_games import users_games
from .skills_users import skills_users
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# from .users_games import User_Game as user_games




class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(40), nullable=False, unique=True)
  email = db.Column(db.String(255), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False)
  games = db.relationship(
    "Game",
    secondary=users_games,
    back_populates="users"
  )

  skills = db.relationship(
    "Skill",
    secondary=skills_users,
    back_populates="users"
  )

  

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }

  def to_dict_games(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "games": [game.to_dict() for game in self.games]
    }

  def to_dict_skills(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "skills": [skill.to_dict() for skill in self.skills]
    }
