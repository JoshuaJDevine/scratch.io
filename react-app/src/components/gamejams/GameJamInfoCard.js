import React from "react"


import { Box, Flex } from "@chakra-ui/react"

export default function GameJamInfoCard(props) {
console.log(props);
    return (
        <>
            {Object.keys(props.gameJams).map(function(key){
                return <Box className="profile-gj-boxes">
                        <Flex
                          bg="rgba(4, 5, 10, 0.315)"
                          columns={{ sm: 5 }}
                          spacing="8"
                          p="10"
                          textAlign="center"
                          rounded="lg"
                          color="pink">
                            <p>{props.gameJams[key].name}</p>
                            <p>Info</p>
                            <p>Info</p>
                            <p>Info</p>
                    </Flex>
                </Box>
            })}
    </>
    )
}
