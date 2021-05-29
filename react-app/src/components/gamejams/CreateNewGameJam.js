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
    FormErrorMessage
  } from "@chakra-ui/react"
import {login, signUp} from "../../store/session";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";

export default function CreateNewGameJam() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function validateUsername(value) {
    let error;
    if (!value)
      error = "Required"
    else if (value.length < 3)
      error = "Invalid username"
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value)
      error = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      error = 'Invalid email address';
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value)
      error = 'Required';
    return error;
  }

  function validateConfirmPassword(value) {
    let error;
    const pass = document.getElementById('password').value;
    if (!value)
      error = 'Required';
    else if (pass !== value)
      error = "Password does not match confirmation password"
    return error;
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="white" variant="link" className="navbar buttons">Host a Game Jam
      </Button>

      <Modal closeOnOverlayClick={true} size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Game Jam</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
                initialValues={{
                  email: "",
                  name: ""
                }}
                onSubmit={async (values) => {
                  await dispatch(signUp(values.username, values.email, values.password));
                  onClose();
                }}
              >
                {(props) => (
                  <Form>
                    <Field name="username" validate={validateUsername}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.username && form.touched.username}>
                          <FormLabel htmlFor="username">Username</FormLabel>
                          <Input {...field} size="sm" id="username" placeholder="Username" />
                          <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email" validate={validateEmail}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input {...field} size="sm" id="email" placeholder="Email" />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password" validate={validatePassword}>
                      {({ field, form }) => (
                        <FormControl mt={1.5} isInvalid={form.errors.password && form.touched.password}>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input {...field} type='password' size="sm" id="password" placeholder="Password" />
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="confirmPassword" validate={validateConfirmPassword}>
                      {({ field, form }) => (
                        <FormControl mt={1.5} isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                          <Input {...field} type='password' size="sm" id="confirmPassword" placeholder="Confirm Password" />
                          <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
