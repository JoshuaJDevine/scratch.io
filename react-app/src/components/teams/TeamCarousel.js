import React, {useState, useEffect} from "react";
import UserProfile from "../user/userProfile";
import FloatinCardSimple from "../chakra_lib/floatin-card-simple";
import TeamProfilePage from "../teams/TeamProfilePage";
import TeamInfoBox from "../teams/TeamInfoBox";
import UserProfileInfoBox from "./TeamUserProfileInfoBox"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneTeam } from "../../store/team"

export default function Carousel (){
    const [carouselPos, setCarouselPos] = useState(1);

    // const { id } = useParams()
    const teamId = 3

    const dispatch = useDispatch()
    const teamArr = useSelector(state => Object.values(state.teams))
    const team = teamArr[0]
    useEffect(() => {
        if (teamId) {
            dispatch(getOneTeam(teamId))
        }
    }, [dispatch, teamId])
    
    if (!teamArr.length) {
        return null;
    }
    console.log("TEAM ---------->", team)

    function handleCarouselPosition(newPos){
        console.log("clicked", newPos)
        document.getElementById("maincarousel").style.setProperty("--position", newPos)
    }
    console.log("CAROUSEL PROPS ------->", team?.users[0])
    return(
         <div className="mainCarouselWrapper">
             {/*<input type="radio" name="position" id="CarouselRadio1" />*/}
             {/*<input type="radio" name="position" id="CarouselRadio2" defaultChecked />*/}
             {/*<input type="radio" name="position" id="CarouselRadio3"/>*/}
            <main id="maincarousel">
              <div className="maincarousel-item" onClick={() => handleCarouselPosition(1)}>

                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
                  <FloatinCardSimple imageUrl="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
              </div>
              <div className="maincarousel-item" onClick={() => handleCarouselPosition(2)} >
                  <TeamProfilePage team={team}/>
              </div>
              <div className="maincarousel-item gamejam-info" onClick={() => handleCarouselPosition(3)}>
                    <UserProfileInfoBox users={team?.users[0]}/>
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