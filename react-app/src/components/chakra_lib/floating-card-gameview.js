import React from "react";

export default function FloatingCardGameView({imageUrl, name}){
    return(
        <div className="l-container">
            <h1>{name ? name : "Mario"}</h1>
            <div className="b-game-card-wide">
              <div className="b-game-card__cover" style={{ backgroundImage: `url(${imageUrl})` }} />
            </div>

        </div>
    )
}