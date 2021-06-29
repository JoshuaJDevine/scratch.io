import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session"
import { Box, Button, Flex, Square, Stack, Icon} from "@chakra-ui/react";

import SignUp from "../user/SignUp";
import Login from "../user/Login";
import CreateTeam from "../teams/CreateTeam";
import LogoutButton from "../auth/LogoutButton";
import SearchBar from './SearchBar';
import CreateNewGameJam from "../gamejams/CreateNewGameJam";


export default function NavBar(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const [pathName, setPathName] = useState(history.location.pathname);
  const [randNum, setRandNum] = useState(getRandomInt(19)+1)
  const paths = {
    home: "/",
    gameJams: "/gj-page",
    games: "/games-page",
    teams: "/teams"
  }

  // let [profileIndex, setProfileIndex] = useState(52)

  let demoUserPageLoader = () => {
      dispatch(login('chad@aa.io', 'password'))
      history.push(`/profile/${3}`)
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  return(
    <Box bg="black" w="100%" h="100%"  spacing={4} p={4} color="white" id="navbar">
      <Flex color="white">
        <Square size="100x">
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => {
              history.push(paths.home);
              setPathName(paths.home);
            }}>
              Home
            </Button>
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => {
              history.push(paths.gameJams);
              setPathName(paths.gameJams);
            }}>
              Gamejams
            </Button>
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => {
              history.push(paths.games);
              setPathName(paths.games);
            }}>
              Games
            </Button>
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => {
              history.push(paths.teams);
              setPathName(paths.teams);
            }}>
              Teams
            </Button>
            <SearchBar />
            { user && pathName === paths.gameJams && <CreateNewGameJam /> }
            { user && /*pathName === paths.teams*/ <CreateTeam /> }
            { !user && <Login /> }
            { !user && <SignUp /> }
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={demoUserPageLoader}>
              Demo Login
            </Button>
            { user && <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => history.push(`/profile/${user.id}`)}>
                Profile
              </Button>
            }
            { user && <LogoutButton/> }
          </Stack>
        </Square>
      </Flex>
    </Box>
  )
}
