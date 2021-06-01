import React from "react";
import { useDispatch, useSelector } from "react-redux"

import {
    Heading,
    Avatar,
    Box,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue
} from '@chakra-ui/react';

export default function TeamGameJams({ gameJams }) {
    // console.log("GAME JAMS -------->", gameJams?.name)
    return (
        <Box className="team-game-jams-page">
            <Box className="team-game-jams-title">
                <h2>Game Jams</h2>
            </Box>
            <Box className="team-game-jams-box">
                {gameJams?.map((gameJam) => {
                    return (
                        <Box className="game-jam-info-card">
                        {gameJam.name}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )

}