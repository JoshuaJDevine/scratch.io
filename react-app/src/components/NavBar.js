import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Square, Stack } from "@chakra-ui/react";
import SignUp from "./user/SignUp"
import Login from "./user/Login"
import CreateTeam from "./teams/CreateTeam"
import LogoutButton from "./auth/LogoutButton";


export default function NavBar(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  return(
    <Box bg="black" w="100%" h="60px"  spacing={4} p={4} color="white" id="navbar">
      <Flex color="white">
        <Square size="100x">
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="white" variant="link" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button colorScheme="white" variant="link" onClick={() => history.push("/gj-page2")}>
              Gamejams
            </Button>
            <Button colorScheme="white" variant="link" onClick={() => history.push("/")}>
              Games
            </Button>
            <CreateTeam />
            { !user && <Login /> }
            { !user && <SignUp /> }
            { user && <Button colorScheme="white" variant="link" onClick={() => history.push("/profile")}>
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
