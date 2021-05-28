import React from "react";

import { Box } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";

export default function MainGJBoxes() {
    const dispatch = useDispatch()
    const gameJams = useSelector(state => state.gameJams)

    return (
        <>
        {Object.keys(gameJams).map(function(key) {
            return<Box
                w="200px"
                h="200px"
                boxShadow="md"
                p="6" rounded="md"
                bg="white"
                border="solid 3px black"
                key={key}
                padding="1rem">
                {gameJams[key].name}
                </Box>
            })}

    </>
    )
}
