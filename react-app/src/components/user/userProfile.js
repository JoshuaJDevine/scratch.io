import React from "react";
import {Box, Center, Container, Flex} from "@chakra-ui/react";
import ProfileInfoBox from "../chakra_lib/profile-info-box";
import ProfileInfoBoxTwo from "../chakra_lib/profile-info-box-two";

export default function UserProfile(){
    return(


                <Flex justify="space-between" align="center">
                    <ProfileInfoBox />
                    <ProfileInfoBoxTwo  />
                </Flex>
    )
}