import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import { GetGames, PostGame, GetGame, DeleteGame, UpdateGame } from "./store/game"
import { getAllSkills, skills } from "./store/skills"
import teams, { getAllTeams, createTeam, getOneTeam, updateCurrentTeam, deleteCurrentTeam, addNewTeamMember } from "./store/team"
import { getGameJams, getGameJam, postGameJam, patchGameJam, deleteGameJam } from "./store/game_jam";
import { gameJamQuery, gameQuery, teamQuery } from "./utils/queryFunctions"

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/user/UsersList";
import User from "./components/user/User";
import NavBar from "./components/navbar/NavBar";
import Homepage from "./components/Homepage"

//***********
//Test imports
import SampleForm from "./components/chakra_lib/sample-form";
import StubPage from "./components/chakra_lib/stub-page";
import StubSteamMockup from "./components/chakra_lib/stub-steam-mockup";
import AnimatedGrid from "./components/chakra_lib/test-anime-grid"
import AnimatedGrid2 from "./components/chakra_lib/test-anime-grid2"
import FloatingCard from "./components/chakra_lib/floating-card";
import Podium from "./components/chakra_lib/podium";
import SocialProfileWithImage from "./components/chakra_lib/sample-profile";
import TeamProfile from "./components/teams/TeamProfile";
import TeamProfilePage from "./components/teams/TeamProfilePage";
import ProfilePage from "./components/Profile";

import UserProfileInfoBox from "./components/teams/TeamUserProfileInfoBox"
import GameBox from "./components/games/GameBox"

import GameJamPageRedesign from "./components/chakra_lib/GameJamPageRedesign";
import GamePage from "./components/games/gamesPage";
import TeamsBrowsingPage from "./components/teams/TeamsBrowsingPage"



function App() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());

      //Examples of api thinks

      // await dispatch(getOneTeam(11));
      // await dispatch(getAllTeams(teamQuery()));

      await dispatch(getAllSkills());
      // await dispatch(GetGames());
      // await dispatch(ChangeWantedSkills(11, [2]))

      // await dispatch(getAllSkills());
      await dispatch(GetGames(gameQuery({searchTerm: 'c', getJoinedTags: true})));
      // await dispatch(GetGame(1,gameQuery({getJoinedTags: true})));


      // await dispatch(GetTeam(1));
      // await dispatch(GetTeams());
      // await dispatch(PostTeam())
      // await dispatch(AddNewMember(2, 3))


      // await dispatch(getAllSkills());
      // await dispatch(GetGames());


      // await dispatch(PostGame("testGame"))
      // await dispatch(GetGame(10))
      // await  dispatch(DeleteGame(12))
      // await  dispatch(UpdateGame(14, "MyTestUpdate"))

      // await dispatch(GetTeams(gameJamQuery({getJoinedUsers: true})))
      await dispatch(getGameJams)

      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path="/" exact={true} >
          <Homepage />
        </Route>
        <Route path="/gj-page">
            <GameJamPageRedesign/>
        </Route>
        <Route path="/games-page">
          <GamePage />
        </Route>
        {/* <Route path="/profile">
          <ProfilePage />
        </Route> */}
        <Route path="/profile/:id" >
          <ProfilePage />
        </Route>

        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>


        {/*TEST ROUTES*/}
        <Route path="/sample-form" exact={true}>
          <SampleForm />
        </Route>
        <Route path="/stub-page" exact={true}>
          <StubPage />
        </Route>
        <Route path="/stub-steam-mockup" exact={true}>
          <StubSteamMockup />
        </Route>
        <Route path="/anime2">
            <AnimatedGrid2 />
        </Route>
        <Route path="/anime">
            <AnimatedGrid />
        </Route>
        <Route path="/carousel">
            <FloatingCard />
        </Route>
        <Route path="/winner-podium">
            <Podium />
        </Route>
        <Route path="/teams/:teamId">
          <TeamProfile />
        </Route> 
        <Route path="/teams">
          <TeamsBrowsingPage />
        </Route>
        <Route>
          <GameBox path="/games"/>

        </Route>


        {/*HANDLE ERRORS*/}
        <Route path="/test-profile">
            <SocialProfileWithImage />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <Route path="/">
          Error 404
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
