import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../../store/game_jam"
import { gameJamQuery } from "../../utils/queryFunctions"

import GJInfoBox from "../gamejams/GJInfoBox";


import {Box, Flex, Input, InputGroup, IconButton, InputRightElement, Select, Grid} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import CardSample2 from "./card-sample-2";
import MainCarousel from "./mainCarousel";
import BigMainCarousel from "./bigMainCarousel";
import FloatinCardSimple from "./floatin-card-simple";
import Carousel from "./carousel";
import CreateNewGameJam from "../gamejams/CreateNewGameJam";


export default function GameJamPageSample() {
    const dispatch = useDispatch()
    const gameJams = useSelector(state => state.gameJams)

    const [searchTerm, setSearchTerm] = useState("")
    const [date, setDate] = useState("")


    useEffect(() => {

        dispatch(getGameJams(gameJamQuery()))

    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(getGameJams(gameJamQuery({searchTerm: searchTerm, date: date})))
    }

    return (
        <>
        <box className="CreateGameJamWrapper">
            <Box className="CreateGameJamButton" width="200px">
                <CreateNewGameJam/>
            </Box>
        </box>

        <Grid templateRows="repeat(2, 1fr)" gap={6}>
            <Box>
                <CardSample2 gameJams={gameJams} />
            </Box>
        </Grid>
    </>
    )
}
