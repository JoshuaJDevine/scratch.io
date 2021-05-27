import React from "react"
import GameJamBox from "./GameJamBox"

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
        bgImg="https://images.unsplash.com/photo-1597266029701-618ac066150a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
            <GameJamBox />
        </Box>
        </Flex>
    )
}
