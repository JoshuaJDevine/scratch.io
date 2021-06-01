from werkzeug.security import generate_password_hash
from app.models import db, User
from random_username.generate import generate_username
from faker import Faker
import random

faker = Faker()
# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='DemoGoBoom42', first_name='Demo', last_name='Lition', 
                email='demo@aa.io', avatar=f'https://avatars.dicebear.com/api/human/DemoGoBoom42.svg', 
                website=f'www.DemoGoBoom42com', github=f'www.github.com/DemoGoBoom42', password='password')
    db.session.add(demo)

    user2 = User(username='ChaoticBudda1984', first_name='Bubba', last_name='Hotep', 
                email='bubba@aa.io', avatar=f'https://avatars.dicebear.com/api/human/ChaoticBudda1984.svg', 
                website=f'www.ChaoticBudda1984.com', github=f'www.github.com/ChaoticBudda1984', password='password')
    db.session.add(user2)

    user3 = User(username='GigaChad9001', first_name='Chad', last_name='Chadington',
                email='chad@aa.io', avatar=f'https://avatars.dicebear.com/api/male/GigaChad9001.svg', 
                website=f'www.GigaChad9001.com', github=f'www.github.com/GigaChad9001', password='password')
    db.session.add(user3)

    avatar_types = ["male", "female", "human", "bottts", "inittials", "avataaars", "micah"]

    user_names = generate_username(48)
    for user_name in user_names:
        avatar_type = random.choice(avatar_types)
        user = User(username=user_name, first_name=faker.first_name(), last_name=faker.last_name(),
                    email=faker.email(), avatar=f'https://avatars.dicebear.com/api/{avatar_type}/{user_name}.svg', 
                    website=f'www.{user_name}.com', github=f'www.github.com/{user_name}', password='password')
        db.session.add(user)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
