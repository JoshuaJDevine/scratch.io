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
    InputRightElement, Checkbox, FormErrorMessage
} from "@chakra-ui/react"

export default function Login() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [errors, setErrors] = useState([]);



    //Validators - Install YUP or add functionality here
    function validateEmail(value) {
        console.log("VALIDATE")
        let error;
        if (value?.length < 3 ) {
            error = "Name is required"

        }
        console.log(error)
        return error
    }



    return (
      <>
        <Button colorScheme="white" variant="link" onClick={onOpen}>Log In</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
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
                      console.log("LOGIN")
                      const data = await dispatch(login(values.email, values.password));
                      setShow(false);
                  }}
                >
                  {(props) => (
                    <Form>
                      <Field name="email" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Email</FormLabel>
                            <Input {...field} size="sm" id="email" placeholder="Email" />
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
