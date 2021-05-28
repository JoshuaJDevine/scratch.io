import React from "react"
import GameJamBox from "./gamejams/GameJamBox";
import GameBox from "./games/GameBox"

import {
    Flex,
    Box,
    Heading
} from "@chakra-ui/react"


export default function Homepage() {

    return (
        <Flex h="100vh" w="100vw" direction="column">
        <Box
        w="100%"
        minH="450px"
        h="35%"
        bgImg="https://i.ytimg.com/vi/hyJf0k2s59g/maxresdefault.jpg"
        className="hp-main-img"
        >
            This is a test message
        </Box>
        <Box>
            <Heading>
            <h1>
                Genre
            </h1>
            </Heading>
            <GameJamBox />
        </Box>
        <Box>
        <Heading>
            <h1>
                Genre
            </h1>
            </Heading>
            <GameBox />
        </Box>
        </Flex>
    )
}
