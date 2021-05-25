from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .teams import seed_teams, undo_teams
from .skills import seed_skills, undo_skills
from .game_jams import seed_game_jams, undo_game_jams
from .tags import seed_tags, undo_tags


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_games()
    seed_skills()
    seed_teams()
    seed_game_jams()
    seed_tags()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_games()
    undo_skills()
    undo_teams()
    undo_game_jams()
    undo_tags()
    # Add other undo functions here
