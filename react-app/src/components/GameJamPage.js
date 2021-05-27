import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../store/game_jam"
import { gameJamQuery } from "../utils/queryFunctions"

import GJInfoBox from "./GJInfoBox";


import { Box, Flex, Input, Button, Stack, InputGroup, IconButton, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"


export default function GameJamPage() {

    const dispatch = useDispatch()
    const gameJams = useSelector(state => state.gameJams)

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {

        dispatch(getGameJams(gameJamQuery()))

    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(getGameJams(gameJamQuery({searchTerm: searchTerm})))
    }


    return (
        <>
        <Flex>
            <Box w="100%" h="200px" bgColor="black">
                <Box>
                    <InputGroup size="md" w="60%">
                        <Input
                            placeholder="Search"
                            variant="outline"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <InputRightElement>
                                <IconButton aria-label="Search database" icon={<SearchIcon />}  onClick={handleClick}/>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Box>
        </Flex>
    </>
    )
}

// {/* <Stack>
// <Input
// placeholder="Search"
// variant="outline"
// >
// <Button>Test</Button>
// </Input>
// </Stack> */}

// {/* {
//   Object.values(gameJams).map(gamejam => <GJInfoBox key={gamejam.id} gamejam={gamejam} />)
// } */}
// // {
// //     Object.values(photos).map(image => <Photo key={image.id} image={image} />)
// // }
