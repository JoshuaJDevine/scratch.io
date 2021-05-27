import React from "react";
import { useState } from "react"

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
    InputRightElement
} from "@chakra-ui/react"

export default function Login() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
      <>
        <Button colorScheme="white" variant="link" onClick={onOpen}>Log In</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl id="credentials" isRequired mt={1.5}>
                <FormLabel>Username / Email</FormLabel>
                <Input my="5px" placeholder="Username / Email" />
            </FormControl>
            <FormControl id="login-pw" isRequired>
            <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    my="5px"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.50rem" size="sm" onClick={handleClick} mt="10px">
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
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
