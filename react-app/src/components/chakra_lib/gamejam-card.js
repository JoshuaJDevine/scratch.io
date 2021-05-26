import React from "react";




export default function GameJamCard({cardStyle, cardProperties}) {

        console.log(cardProperties);

    return (
        <>
          <div className={cardStyle} style={{backgroundImage: `url(${cardProperties.imageUrl})`}}>
              <h1>
                  {cardProperties.header}
              </h1>
              <h2>
                  {cardProperties.description}
              </h2>
              <h3>
                  {cardProperties.theme}
              </h3>
              <p>
                  {cardProperties.openSlots}
              </p>
           </div>
        </>
    )
}
