import React, { useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { teamQuery } from "../../utils/queryFunctions";
import { getAllTeams, getOneTeam } from "../../store/team";
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
    const teams = useSelector(state => state.teams.teams)
    const dispatch = useDispatch()
    const history = useHistory()
    
    useEffect(() => {
        dispatch(getAllTeams(teamQuery({getJoinedSkills: true})))
    }, [dispatch])


    return (
        <Box className="team-users-page">
            <Box className="team-users-title">
                <h2>Teams</h2>
            </Box>
            <nav className="team-users-card-container">
                {teams?.teams.map((team) => {
                    return (
                        <NavLink
                            w={'full'}
                            // bg={useColorModeValue('white', 'gray.800')}
                            pos={"relative"}
                            top={"15px"}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}
                            className="user-profile-info-box"
                            key={team.id}
                            to={`/teams/${team.id}`}
                            // onClick={handleClick()}
                            >
                            <Box className="team-members-title-box" >
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
                                <p>Wanted Skills:</p>
                                {team?.skills.map((skill) => {
                                    return (
                                        `${skill.name} `
                                    )
                                })}
                            </Box>
                        </NavLink>
                    )
                })}
            </nav>
        </Box>
    )
}