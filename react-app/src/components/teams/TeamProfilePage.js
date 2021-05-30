import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import TeamInfoBox from "./TeamInfoBox"
import TeamInfoBoxTwo from "./TeamInfoBoxTwo"
import TeamGameJams from "./TeamGameJams"
import { getOneTeam } from "../../store/team"


import {
    Box,
    Center,
    Flex,
    useColorModeValue,
    Container
} from '@chakra-ui/react';


export default function TeamProfile() {
    const dispatch = useDispatch()
    const team = useSelector(state => state.teams)
    const { id } = useParams()

    useEffect(() => {

        dispatch(getOneTeam(id))

    }, [dispatch])
    console.log("TEAM ---------->", team)

    return (

        <Box className="team-profile-container">
            <Flex justify="space-between" align="center">
                <TeamInfoBox />
                <TeamInfoBoxTwo />
            </Flex>
            <Box className="team-game-jams-container">
                <TeamGameJams />
            </Box>
        </Box>
    )
}