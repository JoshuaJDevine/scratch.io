import React from "react";
import {Flex} from "@chakra-ui/react";
import ProfileInfoBox from "../chakra_lib/profile-info-box";
import ProfileInfoBoxTwo from "../chakra_lib/profile-info-box-two";

export default function TeamProfile(){
    return(
        <Flex justify="space-between" align="center">
            <ProfileInfoBox />
        </Flex>
    )
}