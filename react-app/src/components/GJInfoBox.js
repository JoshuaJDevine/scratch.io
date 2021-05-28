import React from "react";

import { Image, Box, Stack, Flex } from "@chakra-ui/react"

import GameJamBox from "./GameJamBox"
import MainGJBoxes from "./MainGJBoxes"

export default function GJInfoBox({gamejam}) {
        // console.log(gamejam);
    return (
        <GameJamBox>
            <MainGJBoxes>
            <Box className="main-container">
            <Box>
                <Flex justify="space-between" align="center" direction="row">
                    <Stack>
                    <Image
                        boxSize="50px"
                        objectFit="cover"
                        src={gamejam.avatar}
                        alt="GameJam Img"
                    />
               <Box
                    boxSize="50px"
                    >
                    {gamejam.theme}
                    {/* {gamejam.blurb} */}
                        </Box>
                        </Stack>
                        </Flex>
                    </Box>
                </Box>
            </MainGJBoxes>
        </GameJamBox>
    )

}

// <Image
//     boxSize="50px"
//     objectFit="cover"
//
//     src={gamejam.avatar}
//     alt="GameJam Img"
//     />
