import React from "react";

export default function TeamGameCard({ game }){
    console.log("GAME CARD GAME ------->", game?.name)
    return(
        <div className="l-container">
            <h1>{game?.name}</h1>
            <div className="b-game-card">
              <div className="b-game-card__cover" style={{ backgroundImage: `url(${game?.avatarUrl})` }} />
            </div>
        </div>
    )
}