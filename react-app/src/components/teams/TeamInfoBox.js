import React from "react";

import { useSelector } from "react-redux"
import {Box, useColorModeValue, Flex, Container} from "@chakra-ui/react";

import GameJamInfoCard from "../gamejams/GameJamInfoCard"

// import {
//     Heading,
//     Avatar,
//     Box,
//     Image,
//     Flex,
//     Text,
//     Stack,
//     Button,
//     useColorModeValue
// } from '@chakra-ui/react';



export default function TeamInfoBox(){

  const gameJams = useSelector(state => state.gameJams)

    return(
        <Box
          maxW={'270px'}
          w="100%"
          bg={useColorModeValue('white', 'gray.800')}
          pos={"relative"}
          top={"25px"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          className="gamejam-box-profile"
          >
            <Flex justify="space-around" align="stretch" direction="column" h="40rem">
            <Container>
                  <GameJamInfoCard gameJams={gameJams}/>
            </Container>
            </Flex>
        </Box>
    )
}



