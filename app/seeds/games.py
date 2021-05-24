from app.models import db, Game, User

# Adds a demo user, you can add other users here if you want
def seed_games():

    nameList = ["Ghezhoss", "Acnujhi", "Iacniloxz"]

    for x in nameList:
        newGame = Game(name=x)
        db.session.add(newGame)
    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()
