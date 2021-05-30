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
        <Box 
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          pos={"relative"}
          top={"15px"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          className="user-profile-info-box">
          <Box className="user-profile-info-box-avatar">
            <Avatar
              className="user-profile-info-boc-avatar"
              size={'xl'}
              src={
                "https://musicweek.ua/wp-content/uploads/2020/12/76.-Blob-Opera.png"
              }
              alt={'User-Avatar'}
            />
          </Box>
          <Box className="user-profile-info-box-text1">
            <p>UserName42069</p>
          </Box>
          <Box className="user-profile-info-box-text2">
            <p>Skills:</p>
            <p>list of skills here and stuff</p>
          </Box>
        </Box>
        )
}
