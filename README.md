#App Academy Group Project
## Feature List
Splash/Landing

Auth

MVP1 Create (hosting) a Game Jam

MVP2 Creating Teams

*MVP3	Profile

*MVP4	Searching funcationality

*MVP5	Project organization

*MVP6 Matchhmaking / ELO system for teams and gamejams

Live chat? Google maps API?







[WIP]
Form a team for this game jam
Find a team for this game jam

User A signs up
User A host a gamejam
User A create a team "Team17"

User B can view all gamejams
User B can view all teams
User B could request access to "Team17"

User A will be notified and verifiy/deny the request to join the team

[WIP]SCHEMA
Teams have many Users
Users have many Teams

Teams have many gamejams
Gamejams have many teams

Games have one team
Games have one jam
----------------------
Users
  - Profile Table?
Gamejams
Teams
Games







------------------------------------------
[WIP]

BASIC FUNCTIONALITY

***[Signup] Marketplace of talent --> One User

***[Hosting] a 'gamejam' --> One User

***[Form teams] --> Many Users

***[Teams associate with a gamejam] --> Many Teams

**Profile page for users (examples of stuff they have done and gamejams participated and submissions or other content submitted

*Project page for the teams project

OTHER FUNCTIONALITY

Managing 'GameJames'


------------------------------------------
# Questions: 
1. Can a team host a game jam?
2. Can a game be tied to a user instead of a team?
3. Can a game not be tied to a game jam?
4. With teams being persistent, should a Listing table be created for team formation?

# Ideas
## 1. GameJam
* A page for displaying upcoming game jams
* A search page that can displays game jams by title, date range, tags
* Each game jam will have an info page
* Columns: startDate, duration, description (as markdown? aws?), hostId (hostIdUser, hostIdTeam?)

## 2. Team
* Team info page
* Display games created, team members, description, website url

## 3. User
* User info page
* Display games created, teams a member of, bio, website url, skills

## 4. Game
* Game info page
* Display game jam it belongs to, the creator (team or user?), description (as markdown?), media (images, youtube links)

## 5. Listing
* Display team members, skills needed, skills fulfilled
