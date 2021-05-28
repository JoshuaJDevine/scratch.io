import React from "react";
import ProfileInfoBox from "./TeamInfoBox"
import ProfileInfoBoxTwo from "./TeamInfoBoxTwo"


import {
    Box,
    Center,
    Flex,
    useColorModeValue,
    Container
} from '@chakra-ui/react';

export default function teamProfilePage() {
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
                        <ProfileInfoBoxTwo />
                    </Flex>
                </Container>
            </Center>
        </Box>
    );
}