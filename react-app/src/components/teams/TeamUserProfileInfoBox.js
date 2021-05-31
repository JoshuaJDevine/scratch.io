import React from "react";
import { useDispatch, useSelector } from "react-redux"

import {
    Heading,
    Avatar,
    Box,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue
  } from '@chakra-ui/react';


export default function ProfileInfoBox({ users }) {
  console.log("USERS BOX ------->", users?.avatar)
  const dispatch = useDispatch()
return (
        <Box 
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          pos={"relative"}
          top={"15px"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          className="user-profile-info-box">
          <Box className="team-user-profile-info-box-avatar">
            <Avatar
              className="team-user-profile-info-box-avatar"
              size={'xl'}
              src={
                users?.avatar
              }
              alt={'User-Avatar'}
            />
          </Box>
          <Box className="team-user-profile-info-box-username">
            {users?.username}
          </Box>
          <Box className="team-user-profile-info-box-skills">
            <p>Skills:</p>
            {users?.skills.map((skill) => {
              return (
                `${skill.name} `
              )
            })}
          </Box>
        </Box>
        )
}
