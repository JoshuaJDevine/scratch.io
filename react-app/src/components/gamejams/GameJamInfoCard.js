import React from "react"


import { Box, Image } from "@chakra-ui/react"

export default function GameJamInfoCard({ game }) {
// console.log(game);
    return (
        <>
                <Box className="profile-gj-boxes"
                h="300px"

                >
                        <Box className="gj-intro-info">
                            <Image
                              src={game?.avatar}
                              alt="img-gamejam"
                              h="50px"
                              />
                            <div className="gj-info-entries">{game.name}</div>
                        </Box>
                            <div className="gj-info-entries theme">{`#${game.theme}`}</div>

                            <div className="gj-info-entries titles">A bit of info:</div>
                            <div className="gj-info-entries blurb">{game.blurb}</div>

                            <div className="gj-info-entries userLimit">{`User limit: ${game.userLimit}`}</div>

                        <div className="gj-info-entries titles">Sites:</div>
                        <div className="gj-info-entries sites">
                            <div>{`The game: ${game?.website}`}</div>
                            <div>{`Github: ${game?.github}`}</div>
                        </div>

                        <div className="gj-info-entries titles">Dates:</div>
                        <div className="gj-info-entries dates">
                            <div>{`Start date: ${game.startDate}`}</div>
                            <div>{`End date: ${game.endDate}`}</div>
                        </div>
                        <hr />
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
