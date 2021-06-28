import React from "react";
import { useDispatch, useSelector } from "react-redux"

import {
    Heading,
    Avatar,
    Box,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue
} from '@chakra-ui/react';


export default function ProfileInfoBox() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTeams(teamQuery()))
    }, [dispatch])

    const teams = useSelector(state => state.teams)
    
    return (
        <Box className="team-users-page">
            <Box className="team-users-title">
                <h2>Teams</h2>
            </Box>
            <Box className="team-users-card-container">
                {teams?.map((team) => {
                    return (
                        <Box
                            w={'full'}
                            // bg={useColorModeValue('white', 'gray.800')}
                            pos={"relative"}
                            top={"15px"}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}
                            className="user-profile-info-box"
                            key={user.id}>
                            <Box className="team-members-title-box">
                            </Box>
                            <Box className="team-user-profile-info-box-avatar">
                                <Avatar
                                    className="team-user-profile-info-box-avatar"
                                    size={'xl'}
                                    src={
                                        team?.avatar
                                    }
                                    alt={'User-Avatar'}
                                />
                            </Box>
                            <Box className="team-user-profile-info-box-username">
                                {team?.name}
                            </Box>
                            <Box className="team-user-profile-info-box-skills">
                                <p>Skills:</p>
                                {team?.skills.map((skill) => {
                                    return (
                                        `${skill.name} `
                                    )
                                })}
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}