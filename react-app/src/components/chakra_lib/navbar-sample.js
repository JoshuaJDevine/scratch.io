import React from "react";
import {Box, Button, Flex, Square, Stack} from "@chakra-ui/react";

export default function SampleNavBar(){
    return(
        <Box bg="black" w="100%" h="10%" spacing={4} p={4} color="white">
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
                  <Button colorScheme="white" variant="link">
                    Signup
                  </Button>
                  <Button colorScheme="white" variant="link">
                    Profile
                  </Button>
                </Stack>
              </Square>
            </Flex>
        </Box>
        )
}