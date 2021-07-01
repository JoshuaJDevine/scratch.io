import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTeamMember } from "../../store/team";
import "./TeamComponents.css";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    useColorModeValue
} from "@chakra-ui/react"

export default function JoinTeamConfirmationModal({team}) {
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser?.id 
    const teamId = team?.id

    const teamMembers = team?.users
    const teamMembersIds = []

    if (teamMembers) {
        for (let member of teamMembers) {
            teamMembersIds.push(member.id)
        }
    }
    console.log("TEAM MEMBER IDS ------>", teamMembersIds)
    return (
        <>
            <Button 
                colorScheme="white" 
                variant="link" 
                className="navbar buttons"
                w={'full'}
                mt={8}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
                onClick={() => {
                    console.log("SESSION USER ------>", userId)
                    onOpen()
                    dispatch(addNewTeamMember(teamId, userId))
                    // console.log("TEAM ID IN ADD MEMBER ---->", teamId)
                }}>
                Join
                </Button>

            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} className="joined-team-modal">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        {teamMembersIds.includes(userId)
                            ?<div className="already-on-team-message">
                                <h1>You're already on this team!</h1>
                            </div>
                            :<div className="join-team-modal-content">
                                <h1>Congratulations!</h1>
                                <h2>Check it out! You're on the team!</h2>
                            </div>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}