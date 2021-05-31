import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGameJam } from "../../store/game_jam";

import { Field, Form, Formik } from "formik";
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
  FormErrorMessage
} from "@chakra-ui/react"


export default function CreateNewGameJam() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function validateName(value) {
    let error;
    if (!value)
      error = "Required";
    else if (value.length < 3)
      error = "Invalid gamejam Name";
    return error;
  }

  function validateTheme(value){
    let error;
    if (!value)
      error = "Required";
    else if (value.length < 3)
      error = "Invalid theme Name";
    return error;
  }

  function validateBlurb(value){
    let error;
    if (!value)
      error = "Required";
    return error;
  }

  function validateUserLimit(value){
    let error;
    if (!value)
      error = "Required";
    else if (value < 10)
      error = "Invalid user limit";
    else if (value > 10000)
      error = "Invalid user limit";
    return error;
  }

  function validateStartDate(value) {
    let error;
    if (!value)
      error = "Required";
    return error;
  }

  function validateEndDate(value) {
    let error;

    if (!value)
      error = "Required";
    return error;
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="white" variant="link" className="navbar buttons">
        Host a Game Jam
      </Button>

      <Modal closeOnOverlayClick={true} size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Game Jam</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
                initialValues={{
                  name: "",
                  theme: "",
                  blurb: "",
                  avatar: "",
                  website: "",
                  github: "",
                  userLimit: 10,
                  startDate: undefined,
                  endDate: undefined,
                  ownerId: user && user.id
                }}
                onSubmit={async (values) => {
                  await dispatch(postGameJam(values));
                  onClose();
                }}
              >
                {(props) => (
                  <Form>
                    <Field name="name" validate={validateName}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input {...field} size="sm" id="name" placeholder="Name" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="theme" validate={validateTheme}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.theme && form.touched.theme}>
                          <FormLabel htmlFor="theme">Theme</FormLabel>
                          <Input {...field} size="sm" id="theme" placeholder="theme" />
                          <FormErrorMessage>{form.errors.theme}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="blurb" validate={validateBlurb}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.blurb && form.touched.blurb}>
                          <FormLabel htmlFor="blurb">Blurb</FormLabel>
                          <Input {...field} size="sm" id="blurb" placeholder="blurb" />
                          <FormErrorMessage>{form.errors.blurb}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="userLimit" validate={validateUserLimit}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.userLimit && form.touched.userLimit}>
                          <FormLabel htmlFor="userLimit">User Limit</FormLabel>
                          <Input {...field} size="sm" id="userLimit" placeholder="userLimit" />
                          <FormErrorMessage>{form.errors.userLimit}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="startDate" validate={validateStartDate}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.startDate && form.touched.startDate}>
                          <FormLabel htmlFor="startDate">Start Date</FormLabel>
                          <Input type='date' {...field} size="sm" id="startDate" placeholder="startDate" />
                          <FormErrorMessage>{form.errors.startDate}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="endDate" validate={validateEndDate}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.endDate && form.touched.endDate}>
                          <FormLabel htmlFor="endDate">End Date</FormLabel>
                          <Input type='date' {...field} size="sm" id="endDate" placeholder="endDate" />
                          <FormErrorMessage>{form.errors.endDate}</FormErrorMessage>
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
