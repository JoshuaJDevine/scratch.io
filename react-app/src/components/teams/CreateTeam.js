import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSkills, skills } from "../../store/skills";
import { PostTeam } from "../../store/team"

import {Field, FieldArray, Form, Formik} from "formik";
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
  InputGroup,
  InputRightElement,
  Textarea,
  Checkbox,
  CheckboxGroup,
  HStack,
  FormErrorMessage
} from "@chakra-ui/react"

export default function CreateTeam() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const skills = useSelector(state => state.skillsReducer.skills.skills)

  const wantedSkillsCollection = [];
  skills.forEach((el) => {
    wantedSkillsCollection.push({value: el.id, label: el.name})
  })

  function validateName(value) {
    let error;
    if (!value)
      error = "Required";
    else if (value.length < 3)
      error = "Invalid gamejam Name";
    return error;
  }

  function validateBlurb(value){
    let error;
    if (!value)
      error = "Required";
    return error;
  }

  function validateAvatar(value) {
    let error;
    if (!value)
      error = "Required";
    else if (value.length < 3)
      error = "Invalid avatar url";
    return error;
  }

  function validateWebsite(value) {
    let error;
    if (!value)
      error = "Required";
    else if (value.length < 3)
      error = "Invalid website url";
    return error;
  }

  function validateGithub(value) {
    let error;
    if (!value)
      error = "Required";
    else if (value.length < 3)
      error = "Invalid Github url";
    return error;
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="white" variant="link" className="navbar buttons">
        Create Team
      </Button>

      <Modal closeOnOverlayClick={true} size="sm" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
              <ModalHeader>Create Team</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <Formik
                    initialValues={{
                      name: "testName",
                      blurb: "testBlurb",
                      website: "testWebsiteUrl",
                      avatar: "testAvatarUrl",
                      github: "testGithubUrl",
                      recruiting: false,
                      wantedSkillsCollection: [],
                      captainId: user && user.id
                    }}
                    onSubmit={async (values) => {
                        await dispatch(PostTeam(values));
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

                        <Field name="blurb" validate={validateBlurb}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.blurb && form.touched.blurb}>
                              <FormLabel htmlFor="blurb">Blurb</FormLabel>
                              <Input {...field} size="sm" id="blurb" placeholder="Blurb" />
                              <FormErrorMessage>{form.errors.blurb}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <Field name="avatar" validate={validateAvatar}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.avatar && form.touched.avatar}>
                              <FormLabel htmlFor="avatar">Avatar Url</FormLabel>
                              <Input {...field} size="sm" id="avatar" placeholder="Avatar Url" />
                              <FormErrorMessage>{form.errors.avatar}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <FormLabel htmlFor="wantedSkillsCollection">Team Skills</FormLabel>
                        <FieldArray
                          name="wantedSkillsCollection"

                          render={arrayHelpers => (
                            <div className="SkillBooleanButtons">
                                {wantedSkillsCollection.map(skill => (
                                  <label key={skill.value}>
                                    <input
                                      name="wantedSkillsCollection"
                                      type="checkbox"
                                      value={skill}
                                      onChange={e => {
                                        if (e.target.checked) {
                                          arrayHelpers.push(skill.value);
                                        } else {
                                          const idx = wantedSkillsCollection.indexOf(skill.value);
                                          arrayHelpers.remove(idx);
                                        }
                                      }}
                                    />
                                    <span>{skill.label}</span>
                                  </label>
                                ))}
                            </div>
                          )}
                        />

                        <Field name="website" validate={validateWebsite}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.website && form.touched.website}>
                              <FormLabel htmlFor="website">Website Url</FormLabel>
                              <Input {...field} size="sm" id="website" placeholder="Website Url" />
                              <FormErrorMessage>{form.errors.website}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <Field name="github" validate={validateGithub}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.github && form.touched.github}>
                              <FormLabel htmlFor="github">Github Url</FormLabel>
                              <Input {...field} size="sm" id="github" placeholder="Github Url" />
                              <FormErrorMessage>{form.errors.github}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <Field type="checkbox"  name="recruiting">
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.recruiting && form.touched.recruiting}>
                              <FormLabel htmlFor="recruiting">Recruiting</FormLabel>
                              <Checkbox {...field} id="recruiting" placeholder="Recruiting" />
                              <FormErrorMessage>{form.errors.recruiting}</FormErrorMessage>
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
