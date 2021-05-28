import React from "react";
import ProfileInfoBox from "./profile-info-box"
import ProfileInfoBoxTwo from "./profile-info-box-two"


import {
    Box,
    Center,
    Flex,
    useColorModeValue,
    Container
  } from '@chakra-ui/react';

  export default function SocialProfileWithImage() {
    return (
<Box
w="100vw"
h="100vh"
bg="#693c72"
>
<Center py={6}>
    <Container
    w="3000px"
    h={"600px"}
    bgColor="#a1cae2"
    borderRadius="10px"
    paddingX="10px"
>
<Flex justify="space-between" align="center">
<ProfileInfoBox />
<ProfileInfoBoxTwo  />
</Flex>
</Container>
</Center>
</Box>
    );
  }
