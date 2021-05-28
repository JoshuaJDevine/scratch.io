import React from "react";
import {Box, Grid, Slide} from "@chakra-ui/react"
import FloatinCardSimple from "./floatin-card-simple";
import Carousel from "./carousel";
import CardSample2 from "./card-sample-2";
import MainCarousel from "./mainCarousel";
import BigMainCarousel from "./bigMainCarousel";


export default function Podium(){
    const podiumData = {
        goldImageUrl: "http://www.digitiser2000.com/uploads/4/0/6/6/40667199/published/doom_1.jpg?1516607707",
        goldTeam: "The Crazy Eights",
        goldDescription: "A game very much like Doom",
        silverImageUrl: "https://www.mobygames.com/images/covers/l/290440-destiny-playstation-3-front-cover.jpg",
        silverTeam: "Jungie",
        silverDescription: "Fate! Like Destiny but with more microtransactions and ice skating",
        bronzeImageUrl: "https://xboxaddict.com/images/box_art/4450.jpg",
        bronzeTeam: "Jingle Jangle",
        bronzeDescription: "Rocky Racoons Revenge",
    }
    return(
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
            <Box>
                <CardSample2 />
            </Box>
            <Box>
                <MainCarousel />
            </Box>
            <Box>
                <BigMainCarousel />
            </Box>
            <Box w="40%" h="40%" bg="#f2e9e4">
                <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
            </Box>
            <Box>
                <Carousel props={podiumData}/>
            </Box>
        </Grid>
    )
}