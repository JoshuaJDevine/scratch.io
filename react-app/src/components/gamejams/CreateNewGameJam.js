import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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
    FormErrorMessage, NumberInput
} from "@chakra-ui/react"
import {login, signUp} from "../../store/session";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";

export default function CreateNewGameJam() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());


  function validateName(value) {
    let error;
    if (!value)
      error = "Required"
    else if (value.length < 3)
      error = "Invalid gamejam Name"
    return error;
  }
  function validateTheme(value){
    let error;
    if (!value)
      error = "Required"
    else if (value.length < 3)
      error = "Invalid theme Name"
    return error;
  }
  function validateBlurb(value){
    let error;
    if (!value)
      error = "Required"
    else if (value.length < 3)
      error = "Invalid theme Name"
    return error;
  }
    function validateUserLimit(value){
    let error;
    if (!value)
      error = "Required"
    else if (value < 10)
      error = "Invalid user limit"
    else if (value > 1000)
      error = "Invalid user limit"
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
                    name: "",
                    theme: "",
                    blurb: "",
                    userLimit: 25,
                    startDate: "",
                    endDate: "",
                }}
                onSubmit={async (values) => {
                  await dispatch(signUp(values.name, values.email, values.password));
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
                        <NumberInput max={1000} min={10} isInvalid={form.errors.userLimit && form.touched.userLimit}>
                          <FormLabel htmlFor="userLimit">User Limit</FormLabel>
                          <Input {...field} size="sm" id="userLimit" placeholder="userLimit" />
                          <FormErrorMessage>{form.errors.userLimit}</FormErrorMessage>
                        </NumberInput>
                      )}
                    </Field>
                    {/*  ADD DATE PICKER AND HOOK UP THE FORM*/}

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
