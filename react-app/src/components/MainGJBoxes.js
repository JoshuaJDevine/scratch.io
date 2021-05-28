import React from "react";

import { Box } from "@chakra-ui/react";

export default function MainGJBoxes(props) {

    return (
        <Box
        w="200px"
        h="200px"
        boxShadow="md"
        p="6" rounded="md"
        bg="white"
        border="solid 3px black"
        padding="1rem">
            {props.children}
        </Box>
    )
}
