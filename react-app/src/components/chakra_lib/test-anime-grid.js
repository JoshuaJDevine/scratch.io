import React from "react";
import GameJamCard from "./gamejam-card"
import Carousel from "./carousel";


export default function AnimatedGrid() {

    const cardProperties = {
        header: "Title of Game Jam",
        description: "This is a super awesome desc for my game jam",
        theme: "This is a theme",
        openSlots: "10/20",
        imageUrl: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    }

    return (
        <div>
        <section className="animated-grid">
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card card-wide" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card"cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
          <GameJamCard cardStyle="card" cardProperties={cardProperties} />
        </section>
        <section>
          <Carousel />
        </section>
      </div>
    )
}
