import React from "react";
import GameJamInfoCard from "../gamejams/GameJamInfoCard"


import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Container
} from '@chakra-ui/react';





export default function TeamGameJams({ team }) {

    console.log("TEAM GAME JAM BOX ------>", team?.gamejams)
    return (
        <Box>
          <Box
              maxW={'100%'}
              w={'full'}
              h="185px"
              bg={useColorModeValue('white', 'gray.800')}
              pos={"relative"}
              top={"10px"}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
              padding={'6px'}
              className="team-game-jams">
              <Heading
                  padding="5px"
                  margin="5px"
                  borderBottom="solid 2px black"
                  fontSize="lg"
                  >
                  <p>
                    {`${team?.name}'s Game Jams`}
                  </p>
              </Heading>
              {/* <GameJamInfoCard /> */}
          </Box>
        </Box>
    )
}