import React from "react";
import TeamInfoBox from "./TeamInfoBox"
import TeamInfoBoxTwo from "./TeamInfoBoxTwo"


import {
    Box,
    Center,
    Flex,
    useColorModeValue,
    Container
} from '@chakra-ui/react';

export default function UserProfile() {
    return (


        <Flex justify="space-between" align="center">
            <TeamInfoBox />
            <TeamInfoBoxTwo />
        </Flex>
    )
}