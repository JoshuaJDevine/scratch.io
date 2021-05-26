from app.models import db, User, Game, GameJam, Team, Skill, Tag
import random

def seed_join_tables():

    users = User.query.all()
    games = Game.query.all()
    gamejams = GameJam.query.all()
    teams = Team.query.all()
    skills = Skill.query.all()
    tags = Tag.query.all()


    dct = {}
    #games_gamejams
    for game in games:
        print("GAME ----->", game)
        gamejam = random.choice(gamejams)
        print("GAMEJAM ----->", gamejam)
        game.gamejams.append(gamejam)
        gamejam.games.append(game)

    db.session.commit()
    #skills_teams
    #skills_users
    #tags_gamejams
    #tags_games
    #teams_gamejams
    #users_games
    #users_teams