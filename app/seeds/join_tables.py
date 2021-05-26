from app.models import db, User, Game, GameJam, Team, Skill, Tag
import random

def seed_join_tables():

    users = User.query.all()
    games = Game.query.all()
    gamejams = GameJam.query.all()
    teams = Team.query.all()
    skills = Skill.query.all()
    tags = Tag.query.all()

    #skills_teams
    for team in teams:
        samples = random.sample(skills, k = 2)
        for skill in samples:
            team.skills.append(skill)

    #skills_users
    for user in users:
        samples = random.sample(skills, k = 2)
        for skill in samples:
            user.skills.append(skill)

    #tags_gamejams
    for gamejam in gamejams:
        samples = random.sample(tags, k = 4)
        for tag in samples:
            gamejam.tags.append(tag)

    #tags_games
    for game in games:
        samples = random.sample(tags, k = 4)
        for tag in samples:
            game.tags.append(tag)

    #teams_gamejams
    for team in teams:
        samples = random.sample(gamejams, k = 3)
        for gamejam in samples:
            team.gamejams.append(gamejam)

    #users_teams
    for team in teams:
        samples = random.sample(users, k=2)
        team.captainId = samples[0].id
        for user in samples:
            team.users.append(user)

    db.session.commit()
