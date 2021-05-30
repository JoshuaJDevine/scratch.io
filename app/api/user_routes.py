from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
# @login_required
def users():
    args = request.args
    skills = True if args["getJoinedSkills"] == 'true' else False
    teams = True if args["getJoinedTeams"] == 'true' else False

    users = User.query.all()
    return {"users": [user.to_dict(skills=skills, teams=teams) for user in users]}

# /api/users/:id
@user_routes.route('/<int:id>')
@login_required
def user(id):
    args = request.args
    teams = True if args["getJoinedTeams"] == 'true' else False
    skills = True if args["getJoinedSkills"] == 'true' else False

    user = User.query.get(id)
    return user.to_dict(teams=teams, skills=skills)
