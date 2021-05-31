import React from "react";
import TeamInfoBox from "./TeamInfoBox"
import TeamInfoBoxTwo from "./TeamInfoBoxTwo"
import TeamGames from "./TeamGames"




import {
    Box,
    Center,
    Flex,
    useColorModeValue,
    Container
} from '@chakra-ui/react';


export default function TeamProfile({ team }) {
    console.log("TEAM PROFILE PAGE ------>", team?.name)
    return (

        <Box className="team-profile-container">
            <Flex justify="space-between" align="center">
                <TeamInfoBox team={team}/>
                <TeamInfoBoxTwo team={team}/>
            </Flex>
            <Box className="team-game-jams-container">
                <TeamGames team={team}/>
            </Box>
        </Box>
    )
}