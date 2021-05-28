from app.models import GameJam, User, db
from faker import Faker
import datetime
import random

faker = Faker()

def seed_game_jams():
    names = [
        "Souls Like Jam",
        "Dinosaur Jam",
        "My Unique Metroidvania Jam",
        "GG Game Jam",
        "Doom Jam",
        "Notice Me Nintendo Jam",
        "Audio Visual Jam",
        "PubG and Jam",
        "Jam It!",
        "Wear Your Pa-JAM-as",
        "Battle Royal!!!",
        "Portnight"
    ]

    users = User.query.all()

    for n in names:
        domain = ''.join(n.split())
        db.session.add(GameJam(
            name=n,
            theme="Cool theme",
            blurb=f"Here is a blurb about this game jam. It includes a description and rules. {faker.text(150)}",
            avatar="https://cdn.pixabay.com/photo/2016/12/23/07/00/game-1926905_1280.png",
            website=f"test.{domain}.com",
            github=f"github.com/{domain}",
            userLimit=1000,
            startDate=datetime.datetime(2021, 1, 1 + random.randint(1, 9)),
            endDate=datetime.datetime(2021, 1, 11 + random.randint(1, 9)),
            ownerId=random.choice(users).id
        ))
    db.session.commit()

def undo_game_jams():
    db.session.execute('TRUNCATE gamejams RESTART IDENTITY CASCADE;')
    db.session.commit()
