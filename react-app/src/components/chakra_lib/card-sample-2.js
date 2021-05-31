import React from "react";
import GameJamBox from "../gamejams/GameJamBox";
import {Box} from "@chakra-ui/react";

export default function CardSample2({ gameJams }){
    return(
        <>
        {/*Example animated box class implementation*/}
        <div className="gameJamCards">
            {Object.values(gameJams).map(gameJam => {
              return (
                <Box key={`game_jam-${gameJam.id}`}>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet" />
                      <div className="black-card-container">
                        <div className="black-card">
                          <h3 className="black-card-title">{gameJam.name}</h3>
                          <div className="black-card-bar">
                            <div className="black-card-emptybar" />
                            <div className="black-card-filledbar" />
                          </div>
                          <div className="black-card-circle">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <circle className="black-card-stroke" cx={60} cy={60} r={50} />
                            </svg>
                            </div>
                          </div>
                    </div>
                </Box>
              )
            })}
        </div>



        {/*Example box class implementation*/}
        {/*<div className="gameJamCards">*/}
        {/*          <GameJamBox />*/}
        {/*</div>*/}

        </>
    )
}
