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

export default function TeamGameJams({ team }) {
    return (
        <Box className="team-game-jams-page">
            <Box className="team-game-jams-title">
                <h2>Game Jams</h2>
            </Box>
            <Box className="team-game-jams-box">
                {team.gamejams.map((gameJam) => {
                    console.log("GAME JAM -------->", gameJam)
                    return (
                        <Box className="team-game-jam-info-card"
                            // bg={useColorModeValue('white', 'gray.800')}
                            pos={"relative"}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            // className="user-profile-info-box"
                            key={gameJam.id}>
                                <div className="team-game-jam-avatar">
                                    <img src={gameJam.avatar} alt="" />
                                </div>
                                
                                <div className="team-game-jam-name-blurb">
                                    <div className="team-game-jam-name">
                                    {gameJam.name}
                                    </div>
                                    <div>
                                        <span className="credit">{gameJam.blurb}</span>
                                    </div>
                                </div>
                                <div className="team-game-jam-dates">
                                    <h1>START:</h1>
                                    <h2>{gameJam.startDate}</h2>
                                     <h1>END:</h1>
                                    <h2>{gameJam.endDate}</h2>
                                </div>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )

}