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
    Select, InputGroup, InputRightElement
} from "@chakra-ui/react"




  export default function SignupButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
      <>
        <Button colorScheme="white" variant="link" onClick={onOpen}>Sign up</Button>

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
            <FormControl>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
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
