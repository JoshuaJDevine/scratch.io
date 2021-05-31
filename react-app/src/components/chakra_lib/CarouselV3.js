import React, {useEffect} from "react";
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import {Box} from "@chakra-ui/react";

export default function CarouselV3({gameJams, setSlide, currentSlide}) {


  function handleSlideClick(e) {
      setSlide(e)
  }
  useEffect(()=> {
      setSlide(gameJams[0])
  }, [])

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
           {Object.keys(gameJams).map(function(key) {
              return <Box className="test"  onClick={() => {handleSlideClick(gameJams[key])}} key={key}>
                    <img src={gameJams[key].avatar} />
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
                <p> </p>
                </>}
        </Box>
    </div>

    );

}