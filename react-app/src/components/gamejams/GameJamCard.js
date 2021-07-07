import React, { useEffect, useState} from "react";

import "./GameJamCard.css";

export default function GameJamCard({ gameJam }) {

    return (
        <div className="game-jam__card">
            <div className="game-jam__img-container">
                <img src={gameJam.avatar} />
            </div>
            <div>
                {gameJam.name}
            </div>
            <div className="game-jam__card-tags">
                {Object.values(gameJam.tags).map(tag => {
                    return (
                        <div key={`tag-${Math.random()}`}>
                            {tag.name}
                        </div>
                    )
                })}
            </div>
            <div>
                Start: {gameJam.startDate}
            </div>
            <div>
                {gameJam.teamCount} joined
            </div>
        </div>
    )
}
