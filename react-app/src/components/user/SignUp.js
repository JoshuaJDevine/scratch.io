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
import {login, signUp} from "../../store/session";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";




  export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validateEmail, setValidateEmail] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const dispatch = useDispatch();




    return (
      <>
        <Button onClick={onOpen} colorScheme="white" variant="link"  className="navbar buttons">Sign Up</Button>

        <Modal size="sm" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

             <Formik
                  initialValues={{
                      email: "",
                      name: ""
                  }}
                  onSubmit={async (values) => {
                      console.log("LOGIN")
                      console.log(values)
                      await dispatch(signUp(values));
                  }}
                >
                  {(props) => (
                    <Form>
                      <Field name="username" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Username</FormLabel>
                            <Input {...field} size="sm" id="username" placeholder="Username" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="first_name" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>First Name</FormLabel>
                            <Input {...field} size="sm" id="first_name" placeholder="First Name" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="last_name" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Last Name</FormLabel>
                            <Input {...field} size="sm" id="last_name" placeholder="Last Name" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="email" >
                        {({ field, form }) => (
                          <FormControl id="email"  mt={1.5} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Email</FormLabel>
                            <Input {...field} size="sm" id="email" placeholder="Email" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="website" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Website</FormLabel>
                            <Input {...field} size="sm" id="user_website" placeholder="Website Url" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="github" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Github</FormLabel>
                            <Input {...field} size="sm" id="user_github" placeholder="Github Url" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="avatar" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Avatar</FormLabel>
                            <Input {...field} size="sm" id="user_avatar" placeholder="Avatar URL" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="password" >
                        {({ field, form }) => (
                          <FormControl id="password"  mt={1.5} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Password</FormLabel>
                            <Input {...field} size="sm" id="password" placeholder="Password" />
                          </FormControl>
                        )}
                      </Field>
                      <Field name="repeat_password" >
                        {({ field, form }) => (
                          <FormControl id="repeat_password"  mt={1.5} isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Repeat Password</FormLabel>
                            <Input {...field} size="sm" id="repeat_password" placeholder="Repeat Password" />
                          </FormControl>
                        )}
                      </Field>
                      <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Sign Up
                      </Button>
                    </Form>
                  )}
                </Formik>














            {/*    <FormControl id="first-name" isRequired mt={1.5}>*/}
            {/*    <FormLabel>First name</FormLabel>*/}
            {/*    <Input size="sm" placeholder="First name" />*/}
            {/*</FormControl>*/}
            {/*<FormControl id="last-name" isRequired mt={3.5}>*/}
            {/*    <FormLabel>Last name</FormLabel>*/}
            {/*    <Input size="sm" placeholder="Last name" />*/}
            {/*</FormControl>*/}
            {/*<FormControl id="username" isRequired mt={3.5}>*/}
            {/*    <FormLabel>Username</FormLabel>*/}
            {/*    <Input size="sm" placeholder="Username" />*/}
            {/*</FormControl>*/}
            {/*<FormControl id="email" mt={3.5} isRequired>*/}
            {/*    <FormLabel>Email address</FormLabel>*/}
            {/*    <Input size="sm" type="email"  placeholder="Email address" />*/}
            {/*</FormControl>*/}
            {/*<FormControl mt={3.5} isRequired>*/}
            {/*<FormLabel>Password</FormLabel>*/}
            {/*        <InputGroup size="sm">*/}
            {/*            <Input*/}
            {/*            pr="4.5rem"*/}
            {/*            type={show ? "text" : "password"}*/}
            {/*            placeholder="Enter password"*/}
            {/*            size="sm"*/}
            {/*            />*/}
            {/*        <InputRightElement width="4.5rem">*/}
            {/*        <Button h="1.50rem" size="sm" onClick={handleClick}>*/}
            {/*        {show ? "Hide" : "Show"}*/}
            {/*        </Button>*/}
            {/*        </InputRightElement>*/}
            {/*    </InputGroup>*/}
            {/*</FormControl>*/}
            {/*<FormControl mt={3.5} isRequired >*/}
            {/*<FormLabel>Confirm password</FormLabel>*/}
            {/*        <InputGroup size="sm">*/}
            {/*            <Input*/}
            {/*            pr="4.5rem"*/}
            {/*            type={show ? "text" : "password"}*/}
            {/*            placeholder="Enter password"*/}
            {/*            size="sm"*/}
            {/*            />*/}
            {/*        <InputRightElement width="4.5rem">*/}
            {/*        <Button h="1.50rem" size="sm" onClick={handleClick}>*/}
            {/*        {show ? "Hide" : "Show"}*/}
            {/*        </Button>*/}
            {/*        </InputRightElement>*/}
            {/*    </InputGroup>*/}
            {/*</FormControl>*/}




            </ModalBody>
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
