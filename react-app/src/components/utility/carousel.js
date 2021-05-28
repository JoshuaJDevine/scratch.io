import React from "react";
import UserProfile from "../user/userProfile";
import FloatinCardSimple from "../chakra_lib/floatin-card-simple";
import TeamProfile from "../teams/TeamProfile";
import TeamInfoBox from "../teams/TeamInfoBox";

export default function Carousel (){
    return(
         <div>
             <input type="radio" name="position" />
            <input type="radio" name="position" defaultChecked />
            <input type="radio" name="position"/>

            <main id="maincarousel">
              <div className="maincarousel-item">
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
              </div>
              <div className="maincarousel-item">
                  <UserProfile />
              </div>
              <div className="maincarousel-item">
                    <TeamInfoBox/>
              </div>
              {/*<div className="maincarousel-item">*/}
              {/*      <h1>Content</h1>*/}
              {/*      <p>More Content</p>*/}
              {/*</div>*/}
              {/*<div className="maincarousel-item">*/}
              {/*      <h1>Content</h1>*/}
              {/*      <p>More Content</p>*/}
              {/*</div>*/}
            </main>

         </div>
    )
}