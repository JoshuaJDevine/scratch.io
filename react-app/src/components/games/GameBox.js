import React from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";

import GameCard from "./GameCard";

export default function GameJamBox() {
    const games = useSelector(state => state.games);

    return (
        <SimpleGrid
            bg="rgba(4, 5, 10, 0.315)"
            columns={{ sm: 5 }}
            spacing="8"
            p="10"
            textAlign="center"
            rounded="lg"
            color="gray.400"
            w="100vw"
            h="100vh"
        >
            {Object.keys(games).map(key => {
                return (<GameCard props={games[key]}/>)
            })}
        </SimpleGrid>
    )
}
