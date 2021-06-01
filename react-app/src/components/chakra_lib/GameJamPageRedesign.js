import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams } from "../../store/game_jam"
import { gameJamQuery } from "../../utils/queryFunctions"
import '@brainhubeu/react-carousel/lib/style.css';
import {Box, Grid} from "@chakra-ui/react"
import CarouselV3 from "./CarouselV3";


export default function GameJamPageRedesign() {

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(getGameJams(gameJamQuery({})))
    },[dispatch] )

    const gameJams = useSelector(state => state.gameJams)
    const [currentSlide, setCurrentSlide] = useState(gameJams[1])


    useEffect(async ()=>{
        setCurrentSlide(gameJams[1])
    }, [gameJams])

    return (
        <>
        <Box>
            {gameJams&&<CarouselV3 gameJams={gameJams} setSlide={setCurrentSlide} currentSlide={currentSlide}  />}
        </Box>
        </>
    )
}
