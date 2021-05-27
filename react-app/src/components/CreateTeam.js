import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllSkills, skills } from "../store/skills";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Textarea,
    Checkbox,
    CheckboxGroup,
    HStack

} from "@chakra-ui/react"




export default function CreateTeam() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const skills = useSelector(state => state.skillsReducer.skills.skills)
    // const [allSkills, setAllSkills] = useState(skills)
    
    return (
        
        <>
            <Button onClick={onOpen} colorScheme="white" variant="link" >Create Team</Button>

            <Modal size="sm" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Team</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="team-name" isRequired mt={1.5}>
                            <FormLabel>Team Name</FormLabel>
                            <Input size="sm" placeholder="Team Name" />
                        </FormControl>
                        <FormControl id="team-about" isRequired mt={3.5}>
                            <FormLabel>About</FormLabel>
                            <Textarea size="sm" placeholder="About" />
                        </FormControl>
                        <FormControl id="recruiting" isRequired mt={3.5}>
                            <FormLabel>Recruiting</FormLabel>
                            <Checkbox size="sm"/>
                        </FormControl>
                        <FormControl id="Skills" mt={3.5} isRequired>
                            <FormLabel>Skills Wanted</FormLabel>
                            <CheckboxGroup colorScheme="green" size="sm" />
                                <HStack>
                                    {skills.map((skill, index) => (
                                        <Checkbox key={index} 
                                                  size="sm" 
                                                  value={skill.name}>
                                                      {skill.name}
                                        </Checkbox>
                                    ))}
                                </HStack>
                        </FormControl>
                        <FormControl mt={3.5}>
                            <FormLabel>Avatar</FormLabel>
                             <Input size="sm" placeholder="Image Url" value="avatar" />
                        </FormControl>
                        <FormControl mt={3.5}>
                            <FormLabel>Website</FormLabel>
                            <Input size="sm" placeholder="Website Url" value="website" />
                        </FormControl>
                        <FormControl mt={3.5}>
                            <FormLabel>Github</FormLabel>
                            <Input size="sm" placeholder="Github Url" value="github" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
              </Button>
                        <Button variant="ghost">Create Team</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}