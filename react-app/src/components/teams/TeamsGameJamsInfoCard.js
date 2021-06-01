import React from "react"

export default function TeamsGameJamsInfoCard(gameJam) {
    return (
        <Box className="carousel__slide">
            <figure>
                <div>
                    <img src={gameJam.avatar} alt="" />
                </div>
                <figcaption>
                    {gameJam.name}
                    <span className="credit">{gameJam.blurb}</span>
                    <h1>START:</h1>
                    <h2>{gameJam.startDate}</h2>
                    <h1>END:</h1>
                    <h2>{gameJam.endDate}</h2>
                </figcaption>
            </figure>
        </Box>
    )
}