import React, {useEffect} from "react";
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import {Box} from "@chakra-ui/react";

export default function CarouselV3({gameJams, setSlide}) {


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
           {Object.keys(gameJams).map(function(key) {
              return <Box className="test"  onClick={() => {handleSlideClick(gameJams[key])}} key={key}>
                    <img src={gameJams[key].avatar} />
              </Box>;
            })}
        </Carousel>
    </div>
    );

}