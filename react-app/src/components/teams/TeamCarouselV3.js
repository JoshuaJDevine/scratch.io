import React, { useEffect } from "react";
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { Box } from "@chakra-ui/react";

export default function TeamCarouselV3({ teams, setSlide, currentSlide }) {

    function handleSlideClick(e) {
        setSlide(e)
    }
    useEffect(() => {
        setSlide(teams[1])
    }, [])
    console.log("TEAM CAROUSEL V3 TEAMS ------->", teams?.lenght)
    console.log("TEAM CAROUSEL V3 TEAMS ------->", setSlide)
    console.log("TEAM CAROUSEL V3 TEAMS ------->", currentSlide)
    
    return (
        <div>
            <Carousel
                plugins={[
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 5
                        }
                    },
                    'clickToChange'

                ]}
            >
                {Object.keys(teams).map(function (key) {
                    return <Box className="test" onClick={() => { handleSlideClick(teams[key]) }} key={key}>
                        <img src={teams[key].avatar} />
                    </Box>;
                })}
            </Carousel>


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
                                    {/* <h1>Games Created:</h1>
                                    <h2>{currentSlide.startDate}</h2>
                                    <h1>Game Jams Entered:</h1>
                                    <h2>{currentSlide.endDate}</h2> */}

                                </figcaption>
                            </figure>
                        </Box>
                    </>
                    :
                    <>
                        <p> </p>
                    </>}
            </Box>
        </div>

    );

}