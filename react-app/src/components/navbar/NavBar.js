import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Square, Stack, Icon} from "@chakra-ui/react";

import SignUp from "../user/SignUp";
import Login from "../user/Login";
import CreateTeam from "../teams/CreateTeam";
import LogoutButton from "../auth/LogoutButton";
import SearchBar from './SearchBar';


export default function NavBar(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  // let [profileIndex, setProfileIndex] = useState(52)

  // let demoUserPageLoader = () => {
  //     setProfileIndex(profileIndex++)
  //     history.push(`/profile/${profileIndex}`)
  // }

  return(
    <Box bg="black" w="100%" h="60px"  spacing={4} p={4} color="white" id="navbar">
      <Flex color="white">
        <Square size="100x">
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => history.push("/gj-page2")}>
              Gamejams
            </Button>
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => history.push("/")}>
              Games
            </Button>
            <CreateTeam />
            { !user && <Login /> }
            { !user && <SignUp /> }
            <Button colorScheme="white" variant="link" className="navbar buttons" onClick={() => history.push("/profile/1")}>
              Demo Login
            </Button>
            <SearchBar />
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
