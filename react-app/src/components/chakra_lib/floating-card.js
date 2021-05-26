import React from "react";
import GameJamCard from "./gamejam-card";



export default function FloatingCard({cardStyle, cardProperties}){


    return(
            <div className={cardStyle} style={{backgroundColor: `grey`}}>
                  <div className="l-container">
                        <div className="b-game-card">
                          <div className="b-game-card__cover" style={{ backgroundImage: `url(${cardProperties.imageUrl})` }} />
                        </div>
                  </div>
                  <div className="l-container-textbox">
                    <h1>{cardProperties.header}</h1>
                    <p>{cardProperties.description}</p>
                  </div>

           </div>
    )
}