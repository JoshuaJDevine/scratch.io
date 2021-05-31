import React, {useEffect} from "react";
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import {Box} from "@chakra-ui/react";
import FloatinCardSimple from "./floatin-card-simple";
import FloatingCardGameView from "./floating-card-gameview";

export default function CarouselV3Games({games, setSlide, currentSlide}) {


  function handleSlideClick(e) {
      setSlide(e)
  }
  useEffect(()=> {
      setSlide(games.games[0])
  }, [])

    console.log(games.games[0].avatarUrl)
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
                   <FloatingCardGameView name={games.games[key].name} imageUrl={"https://www.mobygames.com/images/covers/l/483065-dark-souls-remastered-xbox-one-front-cover.jpg"}/>
              </Box>;
            })}
        </Carousel>


        <Box>
            {currentSlide ?
                <>
                <Box className="carousel__slide">
                    <figure>
                      <div>
                        <img src={"https://www.mobygames.com/images/covers/l/483065-dark-souls-remastered-xbox-one-front-cover.jpg"} alt="" />
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