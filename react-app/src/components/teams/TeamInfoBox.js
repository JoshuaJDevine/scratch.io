import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux"
import {Box, useColorModeValue, Flex, Container} from "@chakra-ui/react";

import GameJamInfoCard from "../gamejams/GameJamInfoCard"

import { getGameJams } from "../../store/game_jam"
import { gameJamQuery } from "../../utils/queryFunctions"

export default function TeamInfoBox(){

  const dispatch = useDispatch()
  const gameJams = useSelector(state => state.gameJams)

  useEffect(() => {

    dispatch(getGameJams(gameJamQuery()))

}, [dispatch])

    return(
        <Box
          maxW={'270px'}
          w="100%"
          bg={useColorModeValue('white', 'gray.800')}
          pos={"relative"}
          top={"25px"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'scroll'}
          className="gamejam-box-profile"
          >
            <Flex justify="space-around" align="stretch" direction="column" h="40rem">
            <Container>
                  <GameJamInfoCard gameJams={gameJams} />
            </Container>
            </Flex>
        </Box>
    )
}
