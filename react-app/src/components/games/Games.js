import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../../store/game_jam"
import { gameJamQuery } from "../../utils/queryFunctions"


import {Box, Flex, Input, InputGroup, IconButton, InputRightElement, Select, Grid} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import FloatinCardSimple from "../chakra_lib/floatin-card-simple";



export default function Games() {
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
        <Flex>
            <Box w="100%" h="200px" bgColor="black">
                <Flex direction="column">
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
                        <Select placeholder="Select Date" bgColor="gray.200" w="15%" onChange={(e) => setDate(e.target.value)}>
                            <option value="day">Next Day</option>
                            <option value="week">Next Week</option>
                            <option value="month">Next Month</option>
                            <option value="year">Next Year</option>
                            <option value="all">All Game Jams</option>
                        </Select>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
            <Box>
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
            </Box>
        </Grid>
    </>
    )
}
