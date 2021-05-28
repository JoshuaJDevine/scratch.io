import React from "react";
import {Box, Button, Flex, Square, Stack} from "@chakra-ui/react";
import SignUp from "./user/SignUp"
import Login from "./user/Login"
import CreateTeam from "./teams/CreateTeam"
import { useHistory } from "react-router-dom";
import {login} from "../store/session";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../services/auth";
import LogoutButton from "./auth/LogoutButton";


export default function NavBar(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const history = useHistory()
      async function handleLogout(e) {
        e.preventDefault();
        await dispatch(logout);
        console.log('You clicked logout. GJ.');
      }

    return(
        <Box bg="black" w="100%" h="60px"  spacing={4} p={4} color="white" id="navbar">

            <Flex color="white">
              <Square size="100x">
                <Stack direction="row" spacing={4} align="center">
                  <Button colorScheme="white" variant="link">
                    Home
                  </Button>
                    <Button colorScheme="white" variant="link">
                    Gamejams
                  </Button>
                  <Button colorScheme="white" variant="link">
                    Games
                  </Button>
                  <CreateTeam />
                  { !user && <Login /> }
                  { !user && <SignUp /> }
                  { user && <Button colorScheme="white" variant="link" onClick={() => history.push("/profile")}> Profile </Button> }
                  { user && <LogoutButton/> }
                </Stack>
              </Square>
            </Flex>
        </Box>
        )
}
