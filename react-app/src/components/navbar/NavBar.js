import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const paths = {
    home: "/",
    gameJams: "/gj-page2",
    games: "/games-page",
    teams: undefined
  }

  useEffect(() => {
    //console.log(`pathName`, pathName)
  }, [pathName])

  return(
    <Box bg="black" w="100%" h="60px"  spacing={4} p={4} color="white" id="navbar">
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
            <SearchBar />
            { user && pathName === paths.gameJams && <CreateNewGameJam /> }
            { user && /*pathName === paths.teams*/ <CreateTeam /> }
            { !user && <Login /> }
            { !user && <SignUp /> }
            { user && <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => history.push("/profile")}>
                Profile
              </Button>
            }
            { user && <LogoutButton/> }
            <SearchBar />
          </Stack>
        </Square>
      </Flex>
    </Box>
  )
}
