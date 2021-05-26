import React from "react";
import GameJamCard from "./gamejam-card"
import FloatingCard from "./floating-card";

export default function AnimatedGrid2() {

    const cardProperties = {
        header: "Title of Game",
        description: "This is a super awesome desc for my game",
        imageUrl: "https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg",
    }

    return (
      <div>
        <section className="animated_floating_card">
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
          <FloatingCard cardStyle="floating_card" cardProperties={cardProperties} />
        </section>
        <section>
            <div>
                <p><code>wrapAround: true</code></p>
                <div className="gallery js-flickity" data-flickity-options="{ &quot;wrapAround&quot;: true }">
                  <div className="gallery-cell" />
                  <div className="gallery-cell" />
                  <div className="gallery-cell" />
                  <div className="gallery-cell" />
                  <div className="gallery-cell" />
                </div>
            </div>
        </section>
      </div>
    )
}
