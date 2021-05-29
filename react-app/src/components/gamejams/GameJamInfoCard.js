import React from "react"


import { Box, Flex, Image } from "@chakra-ui/react"

export default function GameJamInfoCard({ game }) {
// console.log(game);
    return (
        <>
                <Box className="profile-gj-boxes">
                        <Flex
                          bg="rgba(4, 5, 10, 0.315)"
                          columns={{ sm: 5 }}
                          spacing="8"
                          p="10"
                          textAlign="center"
                          rounded="lg"
                          color="white">
                              <Image
                              src={game.avatar}
                              alt="alta-idk"
                              h="100px"
                              />
                            <p>{game.theme}</p>
                    </Flex>
                </Box>
    </>
    )
}


