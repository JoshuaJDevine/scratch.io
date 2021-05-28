import React from "react";

export default function FloatinCardSimple({imageUrl}){
    return(
        <div className="l-container">
            <h1>Titles</h1>
            <div className="b-game-card">
              <div className="b-game-card__cover" style={{ backgroundImage: `url(${imageUrl})` }} />
            </div>

        </div>
    )
}