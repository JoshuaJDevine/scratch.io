from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)

# /api/users?query
@user_routes.route('/')
def users():
    args = request.args
    skills = True if args["getJoinedSkills"] == 'true' else False
    teams = True if args["getJoinedTeams"] == 'true' else False
    game_jams = True if args["getJoinedGameJams"] == 'true' else False

    users = User.query.all()
    # print(type(users))
    return {user.id: user.to_dict(skills=skills, teams=teams, game_jams=game_jams) for user in users}

#  /api/users/:id
@user_routes.route('/<int:id>')
def user(id):
    print("SOMETHING!!!!!!!!!!!!!!!", id)
    args = request.args
    teams = True if args["getJoinedTeams"] == 'true' else False
    skills = True if args["getJoinedSkills"] == 'true' else False
    game_jams = True if args["getJoinedGameJams"] == 'true' else False

    user = User.query.get(id)
    return user.to_dict(skills=skills, teams=teams, game_jams=game_jams)

# # /api/users/:id
# @user_routes.route('/<int:id>')
# def user(id):
#     # args = request.args
#     # teams = True if args["getJoinedTeams"] == 'true' else False
#     # skills = True if args["getJoinedSkills"] == 'true' else False

#     user = User.query.get(id)
#     return user.to_dict()
