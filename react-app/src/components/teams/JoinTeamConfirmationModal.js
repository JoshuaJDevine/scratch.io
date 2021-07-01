import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTeamMember, getOneTeam } from "../../store/team";
import "./TeamComponents.css";
import { useHistory } from "react-router-dom";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react"

export default function JoinTeamConfirmationModal({team}) {
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const userId = sessionUser?.id 
    const teamId = team?.id

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

    return (
        <>
            { !onTeam && team.recruiting && 
            <Button 
                colorScheme="white" 
                variant="link" 
                className="navbar buttons"
                w={'full'}
                mt={8}
                bg={'gray.900'}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
                onClick={() => {
                    onOpen()
                    dispatch(addNewTeamMember(teamId, userId))
                    dispatch(getOneTeam(teamId))
                }}>
                Join
                </Button>
            }
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} className="joined-team-modal">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="join-team-modal-content">
                            <h1>Congratulations!</h1>
                            <h2>Check it out! You're on the team!</h2>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}