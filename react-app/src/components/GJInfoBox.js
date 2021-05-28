import React from "react";

import { Box, Stack, Image, Flex } from "@chakra-ui/react"

export default function GJInfoBox({gamejam}) {
        console.log(gamejam);
    return (
        <Box className="main-container">
            <Box>
                    <Flex justify="space-between" align="center" direction="row">
                    <Stack>
                        <Box
                        boxSize="50px"
                        >
                        {gamejam.theme}
                        {/* {gamejam.blurb} */}
                        </Box>
                        <Image
                            boxSize="50px"
                            objectFit="cover"
                            src={gamejam.avatar}
                            alt="GameJam Img"
                        />
                    </Stack>
                    </Flex>
            </Box>
        </Box>
    )
}
