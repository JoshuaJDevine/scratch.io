import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getGameJams } from "../../store/game_jam"
import { teamQuery } from "../../utils/queryFunctions"
import '@brainhubeu/react-carousel/lib/style.css';
import { Box, Grid } from "@chakra-ui/react"
// import CarouselV3 from "./CarouselV3";
import { getAllTeams } from "../../store/team";
import TeamCarouselV3 from "./TeamCarouselV3"


export default function TeamsBrowsingPage() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTeams(teamQuery()))
    }, [dispatch])

    const teams = useSelector(state => state.teams)
    // const teams = useSelector(state => Object.values(state.teams))
    const [currentSlide, setCurrentSlide] = useState(teams[1])
    
    useEffect(async () => {
        if (!teams){
            return
        }
        setCurrentSlide(teams[1])
        console.log("TEAMS BROWSER TEAMS ------>", teams.teams)
    }, [teams])
    

    if (!teams.length) {
        return null;
    }
    
    return (
        <>
            <Box>
                {teams && <TeamCarouselV3 teams={teams.teams.teams} setSlide={setCurrentSlide} currentSlide={currentSlide} />}
            </Box>
        </>
    )
}