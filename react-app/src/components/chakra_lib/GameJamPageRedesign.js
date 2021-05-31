import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../../store/game_jam"
import {user} from "../../store/session"
import { gameJamQuery } from "../../utils/queryFunctions"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Box, Grid} from "@chakra-ui/react"
import CardSample2 from "./card-sample-2";
import CreateNewGameJam from "../gamejams/CreateNewGameJam";
import CarouselV3 from "./CarouselV3";
import {GetTeams} from "../../store/team";


export default function GameJamPageRedesign() {

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")
    const [date, setDate] = useState("")


    useEffect( () => {
        dispatch(getGameJams(gameJamQuery()))
    },[dispatch] )
    const gameJams = useSelector(state => state.gameJams)
    const [currentSlide, setCurrentSlide] = useState(gameJams[0])


    useEffect(async ()=>{
        console.log(currentSlide);
    }, [currentSlide])

    return (
        <>

        <Box>
            {<CarouselV3 gameJams={gameJams} setSlide={setCurrentSlide} currentSlide={currentSlide}  />}
        </Box>

        <Grid templateRows="repeat(2, 1fr)" gap={6} mt="500px">
            <Box>
                <CardSample2 gameJams={gameJams} />
            </Box>
        </Grid>
    </>
    )
}
