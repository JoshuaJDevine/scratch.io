import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../../store/game_jam"
import { gameJamQuery } from "../../utils/queryFunctions"

import GJInfoBox from "../gamejams/GJInfoBox";


import {Box, Flex, Input, InputGroup, IconButton, InputRightElement, Select, Grid} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import CardSample2 from "./card-sample-2";


export default function GameJamPageSample() {
    const dispatch = useDispatch();
    const gameJams = useSelector(state => state.gameJams);

    useEffect(() => {
        dispatch(getGameJams(gameJamQuery({})));
    }, [dispatch])

    return (
        <>
            <Grid templateRows="repeat(2, 1fr)" gap={6}>
                <Box>
                    <CardSample2 gameJams={gameJams} />
                </Box>
            </Grid>
        </>
    )
}
