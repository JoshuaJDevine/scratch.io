import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getGameJams} from "../../store/game_jam";
import {Box, Grid} from "@chakra-ui/react";
import CarouselV3Games from "../chakra_lib/CarouselV3_Games";
import {GetGames} from "../../store/game";
import {gameJamQuery, gameQuery} from "../../utils/queryFunctions";


export default function GamePage() {

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(GetGames(gameQuery({searchTerm: 'c', getJoinedTags: true})));
    },[dispatch] )

    const allGames = useSelector(state => state.games)
    const [currentSlide, setCurrentSlide] = useState(allGames.games[0])


    useEffect(async ()=>{
        setCurrentSlide(allGames.games.games[0])
    }, [allGames])


    return (
        <>
        <Box>
            {allGames&&<CarouselV3Games games={allGames.games} setSlide={setCurrentSlide} currentSlide={currentSlide}  />}
        </Box>


    </>
    )
}