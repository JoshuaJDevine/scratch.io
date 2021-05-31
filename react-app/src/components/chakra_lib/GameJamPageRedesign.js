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

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")
    const [date, setDate] = useState("")


    useEffect( () => {
        dispatch(getGameJams(gameJamQuery()))
    }, [dispatch])
    const gameJams = useSelector(state => state.gameJams)
    const [currentSlide, setCurrentSlide] = useState(gameJams[0])


    useEffect(()=>{
        console.log(currentSlide);
    }, [currentSlide])

    return (
        <>
        <Box className="CreateGameJamWrapper">
            <Box className="CreateGameJamButton" width="200px">
                {/*Move this to nav bar */}
                <CreateNewGameJam/>
            </Box>
        </Box>
        <Box>
            {gameJams ? <CarouselV3 gameJams={gameJams} setSlide={setCurrentSlide}  /> : <p>loading</p>}

        </Box>
        <Box>
            {currentSlide ?
                <>
                <Box className="carousel__slide">
                    <figure>
                      <div>
                        <img src={currentSlide.avatar} alt="" />
                      </div>
                      <figcaption>
                        {currentSlide.name}
                        <span className="credit">{currentSlide.blurb}</span>
                        <h1>START:</h1>
                        <h2>{currentSlide.startDate}</h2>
                        <h1>END:</h1>
                        <h2>{currentSlide.endDate}</h2>

                      </figcaption>
                    </figure>
                </Box>
                </>
                :
                <>
                <p>placeholder</p>
                </>}
        </Box>
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
            <Box>
                <CardSample2 gameJams={gameJams} />
            </Box>
        </Grid>
    </>
    )
}
