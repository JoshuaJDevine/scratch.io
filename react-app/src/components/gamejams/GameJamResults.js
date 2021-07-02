import React, { useEffect, useState} from "react";

import GameJamCard from "./GameJamCard";

import "./GameJamResults.css";

export default function GameJamResults({ searchResults }) {

    return (
        <div id="game-jam__results">
            {Object.values(searchResults).map(gameJam => {
                return (
                    <GameJamCard gameJam={gameJam} key={`searchResult-${gameJam.id}`}/>
                )
            })}
        </div>
    )
}
