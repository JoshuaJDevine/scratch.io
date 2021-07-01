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

  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <>
      <Button colorScheme="white" variant="link" onClick={onOpen} className="navbar buttons">Log In</Button>

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
                  await dispatch(login(values.email, values.password));
                  onClose();
                }}
              >
                {(props) => (
                  <Form>
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
                          <Input {...field} type='password' size="sm" id="Password" placeholder="password" />
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
