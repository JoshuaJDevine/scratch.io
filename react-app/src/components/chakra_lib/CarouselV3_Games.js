import React, {useEffect} from "react";
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import {Box} from "@chakra-ui/react";
import FloatinCardSimple from "./floatin-card-simple";

export default function CarouselV3Games({games, setSlide, currentSlide}) {


  function handleSlideClick(e) {
      setSlide(e)
  }
  useEffect(()=> {
      setSlide(games[0])
  }, [])

    console.log(games.games[0])

  return (
    <div>
       <Carousel
          plugins={[
            'centered',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 5
              }
            },
            'clickToChange',

        ]}
        >
           {Object.keys(games.games).map(function(key) {
              return <Box className="test"  onClick={() => {handleSlideClick(games.games[key])}} key={key}>
                  {console.log("MAPPING " + games.games[key])}
                   <FloatinCardSimple/>
              </Box>;
            })}
        </Carousel>


        <Box>
            {currentSlide ?
                <>
                <Box className="carousel__slide">
                    <figure>
                      <div>
                        <img src={currentSlide.avatarUrl} alt="" />
                      </div>
                      <figcaption>
                        {currentSlide.name}
                        <span className="credit">{currentSlide.name}</span>

                      </figcaption>
                    </figure>
                </Box>
                </>
                :
                <>
                <p>" "</p>
                </>}
        </Box>
    </div>

    );

}