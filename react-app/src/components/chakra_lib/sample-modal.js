import React from "react";
import { useState } from "react";
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
    InputGroup,
    InputRightElement,

  } from "@chakra-ui/react"




  export default function WhSignUpBtn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
      <>
        <Button onClick={onOpen} colorScheme="white" variant="link" >Sign Up</Button>

        <Modal size="sm" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl id="first-name" isRequired mt={3.5}>
                <FormLabel>First name</FormLabel>
                <Input size="sm" placeholder="First name" />
                <FormHelperText>We'll never share your first name.</FormHelperText>
            </FormControl>
            <FormControl id="last-name" isRequired mt={3.5}>
                <FormLabel>Last name</FormLabel>
                <Input size="sm" placeholder="Last name" />
                <FormHelperText>We'll never share your last name.</FormHelperText>
            </FormControl>
            <FormControl id="username" isRequired mt={3.5}>
                <FormLabel>Username</FormLabel>
                <Input size="sm" placeholder="Username" />
            </FormControl>
            <FormControl id="email" mt={3.5} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input size="sm" type="email"  placeholder="Email address" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl mt={3.5} isRequired>
            <FormLabel>Password</FormLabel>
                    <InputGroup size="sm">
                        <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        size="sm"
                        />
                    <InputRightElement width="4.5rem">
                    <Button h="1.50rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl mt={3.5} isRequired >
            <FormLabel>Confirm password</FormLabel>
                    <InputGroup size="sm">
                        <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        size="sm"
                        />
                    <InputRightElement width="4.5rem">
                    <Button h="1.50rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
     </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Sign Up</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
