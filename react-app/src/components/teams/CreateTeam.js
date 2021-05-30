import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSkills, skills } from "../../store/skills";
import { createTeam } from "../../store/team"
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
    HStack, FormErrorMessage

} from "@chakra-ui/react"
import {Field, FieldArray, Form, Formik} from "formik";




export default function CreateTeam() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const skills = useSelector(state => state.skillsReducer.skills.skills)
    const dispatch = useDispatch()
    // const [allSkills, setAllSkills] = useState(skills)
    const wantedSkillsCollection = [];
    skills.forEach((el) => {
        wantedSkillsCollection.push({value: el.id, label: el.name})
    })

    //Revisit validators and add for each field
    function validateName(value) {
        let error;
        if (!value) {
          error = "Name is required"
        }
        return error
    }



    return (
        <>
            <Button onClick={onOpen} colorScheme="white" variant="link" className="navbar buttons">Create Team</Button>
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
                              wantedSkillsCollection: []
                          }}
                          onSubmit={async (values) => {
                              await dispatch(createTeam(values));
                              onClose();
                          }}
                        >
                          {(props) => (
                            <Form>
                              <Field name="name" validate={validateName}>
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>Team Name</FormLabel>
                                    <Input {...field} size="sm" id="name" placeholder="Team Name" />
                                  </FormControl>
                                )}
                              </Field>

                              <Field name="blurb" >
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="blurb">Team blurb</FormLabel>
                                    <Input {...field} id="blurb" placeholder="Blurb about the team" />
                                  </FormControl>
                                )}
                              </Field>

                              <Field name="avatar">
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="avatar">Avatar Url</FormLabel>
                                    <Input {...field} id="avatar" placeholder="Avatar Url" />
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


                              <Field name="website">
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="website">Website url</FormLabel>
                                    <Input {...field} id="website" placeholder="websiteUrl" />
                                  </FormControl>
                                )}
                              </Field>

                              <Field name="github">
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="github">Github Url</FormLabel>
                                    <Input {...field} id="github" placeholder="github Url" />
                                  </FormControl>
                                )}
                              </Field>

                              <Field type="checkbox"  name="recruiting">
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="recruiting">Recruiting</FormLabel>
                                    <Checkbox {...field} id="recruiting" placeholder="Recruiting" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
