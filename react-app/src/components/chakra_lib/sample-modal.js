import React from "react";
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
    FormHelperText,
    RadioGroup,
    Radio,
    HStack,
    Select
  } from "@chakra-ui/react"




  export default function SampleModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl id="first-name" isRequired mt={3.5}>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
                <FormHelperText>We'll never share your first name.</FormHelperText>
            </FormControl>
            <FormControl id="last-name" isRequired mt={3.5}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
                <FormHelperText>We'll never share your last name.</FormHelperText>
            </FormControl>
            <FormControl id="username" isRequired mt={3.5}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="Username" />
            </FormControl>
            <FormControl id="email" mt={3.5} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  placeholder="Email address" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
                <FormControl as="fieldset" mt={3.5}>
                <FormLabel as="legend">Skill</FormLabel>
                <RadioGroup defaultValue="Developer">
                    <HStack spacing="24px">
                    <Radio value="Developer">Developer</Radio>
                    <Radio value="2D Design">2D Design</Radio>
                    <Radio value="3D Design">3D Design</Radio>
                    <Radio value="Graphic Design">Graphic Design</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Please select a skill that best describes what you can do.</FormHelperText>
            </FormControl>
            <FormControl id="skill" mt={3.5}>
                <FormLabel>Skill</FormLabel>
                <Select>
                    <option>Developer</option>
                    <option>2D Design</option>
                    <option>3D Design</option>
                    <option>Graphic Design</option>
                </Select>
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
