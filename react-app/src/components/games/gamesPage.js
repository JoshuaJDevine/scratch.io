import React, {useEffect, useState} from "react";
import {Box, Grid} from "@chakra-ui/react";
import CreateNewGameJam from "../gamejams/CreateNewGameJam";
import CarouselV3 from "../chakra_lib/CarouselV3";
import CardSample2 from "../chakra_lib/card-sample-2";
import CarouselV3Games from "../chakra_lib/CarouselV3_Games";
import {useSelector, useDispatch} from "react-redux";
import {getGameJams} from "../../store/game_jam";
import {gameJamQuery} from "../../utils/queryFunctions";

export default function GamePage() {
    const allGames = useSelector(state => state.games)
    const [currentSlide, setCurrentSlide] = useState(allGames[0])
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getGameJams(gameJamQuery()))
    },[dispatch] )
    const gameJams = useSelector(state => state.gameJams)

    return (
        <>
        <Box>
            {<CarouselV3Games games={allGames.games} setSlide={setCurrentSlide} currentSlide={currentSlide}  />}
        </Box>

        <Grid templateRows="repeat(2, 1fr)" gap={6} mt="500px">
            <Box>
                <CardSample2 gameJams={gameJams} />
            </Box>
        </Grid>
    </>
    )
}