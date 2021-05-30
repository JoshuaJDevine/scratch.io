import React from "react";


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


export default function ProfileInfoBox() {
return (
        <Box className="user-profile-info-box">
          <Box className="user-profile-info-box-avatar">
            <p>Avatar</p>
          </Box>
          <Box className="userprifile-info-box-text1">
            <p>text one</p>
          </Box>
          <Box className="userprifile-info-box-text2">
            <p>text two</p>
          </Box>
        </Box>
        )
}
