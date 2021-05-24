from app.models import GameJam, db
import datetime
import random

def seed_game_jams():
    names = [
        "Souls Like Jam",
        "Dinosaur Jam",
        "My Unique Metroidvania Jam",
        "GG Game Jam",
        "Doom Jam",
        "Notice Me Nintendo Jam",
        "Audio Visual Jam"
    ]

    for n in names:
        db.session.add(GameJam(
            name=n,
            theme="Cool theme",
            blurb="Here is a blurb about this game jam. It includes a description and rules",
            avatar="https://cdn.pixabay.com/photo/2016/12/23/07/00/game-1926905_1280.png",
            website="test.website.com",
            github="github.com",
            userLimit=1000,
            startDate=datetime.datetime(2021, 1, 1 + random.randint(1, 9)),
            endDate=datetime.datetime(2021, 1, 11 + random.randint(1, 9))
        ))
    db.session.commit()

def undo_game_jams():
    db.session.execute('TRUNCATE game_jams RESTART IDENTITY CASCADE;')
    db.session.commit()
