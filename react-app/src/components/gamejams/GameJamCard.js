import React, { useEffect, useState} from "react";

import "./GameJamCard.css";

export default function GameJamCard({ gameJam }) {

    return (
        <div className="game-jam__card">
            <div>
                <img src={gameJam.avatar} />
            </div>
            <div>
                {gameJam.name}
            </div>
        </div>
    )
}
