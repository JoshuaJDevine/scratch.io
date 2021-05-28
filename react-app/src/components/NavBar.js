import React from "react";
import {Box, Button, Flex, Square, Stack} from "@chakra-ui/react";
import SignUp from "./SignUp"
import Login from "./Login"
import CreateTeam from "./teams/CreateTeam"
import { useHistory } from "react-router-dom";


export default function NavBar(){

  const history = useHistory()

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
                  <Login />
                  <SignUp  />
                  <CreateTeam />
                  <Button colorScheme="white" variant="link" onClick={() => history.push("/test-profile")}>
                        Profile
                  </Button>
                </Stack>
              </Square>
            </Flex>
        </Box>
        )
}
