import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../store/game_jam"
import { gameJamQuery } from "../utils/queryFunctions"


import { Box, Flex, Button } from "@chakra-ui/react"


export default function GameJamPage() {

    const dispatch = useDispatch()
    const gameJams = useSelector(state => state.gameJams)

    useEffect(() => {

        dispatch(getGameJams(gameJamQuery()))

    }, [dispatch])

    // const handleClick = () => {

    //     dispatch(getGamesJams())
    // }
    return (
        <Flex>
            <Box w="300px" h="300px" bgColor="pink.200">
                  {
                    Object.values(gameJams).map(gamejam => <div key={gamejam.id}>{gamejam.name}</div>)
                  }
            </Box>
        </Flex>
    )
}

// {
//     Object.values(photos).map(image => <Photo key={image.id} image={image} />)
// }
