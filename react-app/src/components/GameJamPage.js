import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../store/game_jam"
import { gameJamQuery } from "../utils/queryFunctions"

import GJInfoBox from "./GJInfoBox";


import { Box, Flex, Input} from "@chakra-ui/react"


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
            <Box w="100%" h="200px" bgColor="black">
                <Box>
                    
                </Box>
            </Box>
        </Flex>
    )
}

{/* {
  Object.values(gameJams).map(gamejam => <GJInfoBox key={gamejam.id} gamejam={gamejam} />)
} */}
// {
//     Object.values(photos).map(image => <Photo key={image.id} image={image} />)
// }
