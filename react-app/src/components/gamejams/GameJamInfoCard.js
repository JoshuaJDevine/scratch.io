import React from "react"


import { Box, Flex, Image } from "@chakra-ui/react"

export default function GameJamInfoCard({ game }) {
// console.log(game);
    return (
        <>
                <Box className="profile-gj-boxes"
                h="300px"
                
                >
                            <p>{game.name}</p>
                            <Image
                              src={game?.avatar}
                              alt="alta-idk"
                              h="50px"
                              />
                            <p>{game.theme}</p>
                            <p>{game.blurb}</p>
                            <p>{game?.website}</p>
                            <p>{game?.github}</p>
                            <p>{game.userLimit}</p>
                            <p>{game.startDate}</p>
                            <p>{game.endDate}</p>
                </Box>
    </>
    )
}

{/* <Flex
  bg="rgba(4, 5, 10, 0.315)"
  h="300px"
  spacing="8"
  p="10"
  textAlign="center"
  rounded="lg"
  color="white"> */}
{/* </Flex> */}
