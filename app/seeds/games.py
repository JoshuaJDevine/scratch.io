from app.models import db, Game, User, Team, GameJam
import random

# Adds a demo user, you can add other users here if you want
def seed_games():

    nameList = ["Ghezhoss", "Acnujhi", "Iacniloxz", "Quaker Arena", "Candies", "Crusher", "Sweet Smasher", "Datoka Jones", "Immortal Wombat",
                "Ghezhoss2", "Acnujhi2", "Iacniloxz2", "Quaker Arena2", "Candies2", "Crusher2", "Sweet Smasher2", "Datoka Jones2", "Immortal Wombat2"]

    users = User.query.all()
    teams = Team.query.all()
    gamejams = GameJam.query.all()

    percentSolo = len(nameList) * .20
    i = 0
    while i < len(nameList):
        u = None
        t = None
        if i < percentSolo:
            u = random.choice(users).id
        else:
            t = random.choice(teams).id

        newGame = Game(
            name=nameList[i],
            userId=u,
            teamId=t,
            gameJamId=random.choice(gamejams).id
        )
        db.session.add(newGame)
        i += 1
    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()
