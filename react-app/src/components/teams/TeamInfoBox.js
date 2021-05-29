import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import {Box, useColorModeValue, Flex, Container} from "@chakra-ui/react";

import GameJamInfoCard from "../gamejams/GameJamInfoCard"

import { getGameJam } from "../../store/game_jam"


export default function TeamInfoBox(){

  const dispatch = useDispatch()
  const gameJams = useSelector(state => state.gameJams)

  const { id } = useParams()

  useEffect(() => {

      dispatch(getGameJam(id))

  }, [dispatch, id])

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
                  {
                      Object.values(gameJams).map((game, idx) =>

                       <GameJamInfoCard key={idx} game={game}  /> )
                  }
            </Container>
            </Flex>
        </Box>
    )
}
