import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { addNewTeamMember } from "../../store/team";


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
import JoinTeamConfirmationModal from "./JoinTeamConfirmationModal";


export default function TeamInfoBox({ team }) {
    // const teamInfo = team.team.team
    // if (teamInfo != null) {
    // console.log("TEAM INFO ------>", team?.gamejams)
    // }
    const sessionUser = useSelector(state => state.session.user);
    const numberOfGameJams = team?.gamejams?.length
    const numberOfGames =team?.games?.length
    const userId = sessionUser?.id // const userId = sessionUser.id
    const teamId = team?.id

    const dispatch = useDispatch()
    const history = useHistory()
    // console.log("SESSION IN TEAM INFO BOX ---->", sessionUser.id)
    let userIsCaptain = false;
    // if (userId === team.captainId) {
    //     userIsCaptain = true;
    // }
    // console.log("USERID IN TEAM INFO BOX ---->", userIsCaptain)

    const teamMembers = team?.users
    const teamMembersIds = []

    if (teamMembers) {
        for (let member of teamMembers) {
            teamMembersIds.push(member.id)
        }
    }

    let onTeam = false;
    if (teamMembersIds) {
        if (teamMembersIds.includes(userId)) {
            onTeam = true;
        }
    }
    console.log("ON TEAM ------>", onTeam)
    // const path = process.env.PUBLIC_URL;
    return (
        <Box
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            pos={"relative"}
            top={"5px"}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            className="team-info-box-main"
        //paddingX="10px"
        >
            <Image
                h={'120px'}
                w={'full'}
                src={
                    'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                }
                objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
                <Image
                    // size={'sm'}
                    className="team-avatar"
                    h={'100px'}
                    w={'100px'}
                    // w={'200px'}
                    src={ team?.avatar }
                    alt={'Author'}
                    css={{
                        border: '2px solid white',
                    }}
                />
            </Flex>

            <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        {team?.name}
              </Heading>
                    <Text color={'gray.500'}>Gam Jam Team</Text>
                </Stack>

                <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Participated In
                        </Text>
                        <Text fontWeight={600}>{numberOfGameJams}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Game Jams
                        </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Created
                        </Text>
                        <Text fontWeight={600}>{numberOfGames}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Games
                        </Text>
                    </Stack>
                </Stack>
                <Text className="team-info-box-recruiting">
                    Recruiting: {team?.recruiting ? "Yes!" : "No"}
                </Text>
                 <JoinTeamConfirmationModal team={team}/>
            </Box>
        </Box>
    )
}
