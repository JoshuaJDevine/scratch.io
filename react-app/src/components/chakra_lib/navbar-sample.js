import React from "react";
// import { useState } from "react"
import {Box, Button, Flex, Square, Stack} from "@chakra-ui/react";
import WhSignUpBtn from "./sample-modal"
import { useHistory } from "react-router-dom";
import SocialProfileWithImage from "./sample-profile"

export default function SampleNavBar(){

  const history = useHistory()

    return(
        <Box bg="black" w="100%" h="60px"  spacing={4} p={4} color="white" >
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
                  <Button colorScheme="white" variant="link">
                    Login / Logout
                  </Button>
                  <WhSignUpBtn  />
                  <Button colorScheme="white" variant="link" onClick={() => history.push("/test-profile")}>
                        Profile
                  </Button>
                </Stack>
              </Square>
            </Flex>
        </Box>
        )
}
