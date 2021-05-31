import React from "react";
import GameJamInfoCard from "../gamejams/GameJamInfoCard"
import TeamGameCard from "./TeamGamesCard"
import FloatinCardSimple from "../chakra_lib/floatin-card-simple"

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

    console.log("TEAM GAMES --------->", team?.games)    
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
              className="team-games-box">
              <Heading
                  padding="5px"
                  margin="5px, 5px,0px, 5px"
                  borderBottom="solid 2px black"
                  fontSize="lg"
                  >
                  <p>
                    {`${team?.name}'s games`}
                  </p>
              </Heading>
              {/* <GameJamInfoCard /> */}
              <Box className="team-games-container">
            {team?.games.map((game) => {
              return (
                <TeamGameCard game={ game } />
              )
            })}
                {/* <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" /> */}
            </Box>
          </Box>
        </Box>
    )
}