import React from "react";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {login} from "../../store/session";
import {Field, FieldArray, Form, Formik} from "formik";
import {PostTeam} from "../../store/team";

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
  Checkbox,
  FormErrorMessage
} from "@chakra-ui/react"

export default function Login() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [errors, setErrors] = useState([]);

  //Validators - Install YUP or add functionality here
  function validateEmail2(value) {
    console.log("VALIDATE")
    let error;
    if (value?.length < 3 ) {
      error = "Name is required";
    }
    console.log(error)
    return error
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    console.log('ERROR',error)
    return error;
  }

  return (
    <>
      <Button colorScheme="white" variant="link" onClick={onOpen}>Log In</Button>

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Formik
                initialValues={{
                    email: "",
                    name: ""
                }}
                onSubmit={async (values) => {
                  const data = await dispatch(login(values.email, values.password));
                  onClose();
                }}
              >
                {(props) => (
                  <Form>
                    <Field name="email" validate={validateEmail}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input {...field} size="sm" id="email" placeholder="Email" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password" >
                      {({ field, form }) => (
                        <FormControl id="password"  mt={1.5} isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel>Password</FormLabel>
                          <Input {...field} size="sm" id="password" placeholder="Username / Email" />
                        </FormControl>
                      )}
                    </Field>

                    <Button
                      mt={4}
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>

          {/*<FormControl id="login-pw" isRequired>*/}
          {/*<FormLabel>Password</FormLabel>*/}
          {/*    <InputGroup size="md">*/}
          {/*      <Input*/}
          {/*        my="5px"*/}
          {/*        pr="4.5rem"*/}
          {/*        type={show ? "text" : "password"}*/}
          {/*        placeholder="Enter password"*/}
          {/*      />*/}
          {/*      <InputRightElement width="4.5rem">*/}
          {/*        <Button h="1.50rem" size="sm" onClick={handleClick} mt="10px">*/}
          {/*          {show ? "Hide" : "Show"}*/}
          {/*        </Button>*/}
          {/*      </InputRightElement>*/}
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
