import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameJams, clearGameJams } from "../../store/game_jam"
import { gameJamQuery } from "../../utils/queryFunctions"
import '@brainhubeu/react-carousel/lib/style.css';
import {Box, Grid} from "@chakra-ui/react"
import CarouselV3 from "../chakra_lib/CarouselV3";
import GameJamResults from "./GameJamResults";

export default function GameJamPage() {
    const dispatch = useDispatch();
    const featured = useSelector(state => state.gameJams.featured);
    const searchResults = useSelector(state => state.gameJams.search);
    const [currentSlide, setCurrentSlide] = useState(null);

    useEffect(() => {
        const query = gameJamQuery({});

        dispatch(getGameJams(query, "featured"));
        dispatch(getGameJams(query, "search"));

        return () => {
            dispatch(clearGameJams("featured"));
        }
    }, [dispatch]);

    useEffect(() => {
        if (!featured) return;
        setCurrentSlide(Object.values(featured)[0]);
    }, [featured]);

    return (
        <Box>
            {featured && currentSlide &&
                <CarouselV3 gameJams={featured} currentSlide={currentSlide} setSlide={setCurrentSlide} />
            }
            {searchResults && <GameJamResults searchResults={searchResults} />}
        </Box>
    )
}
