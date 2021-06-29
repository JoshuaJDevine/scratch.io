import React, {useState, useEffect} from "react";
import UserProfile from "../user/userProfile";
import FloatinCardSimple from "../chakra_lib/floatin-card-simple";
import TeamProfilePage from "../teams/TeamProfilePage";
import TeamInfoBox from "../teams/TeamInfoBox";
import UserProfileInfoBox from "./TeamUserProfileInfoBox"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneTeam } from "../../store/team"
import TeamGameJams from "./TeamGameJams"
import {useEditable} from "@chakra-ui/react";

export default function TeamCarousel (){
    const [carouselPos, setCarouselPos] = useState();
    const { teamId } = useParams()

    const dispatch = useDispatch()
    const teamArr = useSelector(state => Object.values(state.teams))
    const team = teamArr[0]
    useEffect(() => {
        if (teamId) {
            dispatch(getOneTeam(teamId))
        }
    }, [dispatch, teamId])

    if(!team) {
        return null
    }

    function handleCarouselPosition(newPos){
        // console.log("clicked", newPos)
        document.getElementById("maincarousel").style.setProperty("--position", newPos)
    }
    return(
        <>
        {team ?
         <div className="mainCarouselWrapper">
            <main id="maincarousel" >
                <div className="maincarousel-item left-most-panel" onClick={() => handleCarouselPosition(1)}>
                    {team.gamejams? <TeamGameJams team={team} /> : <></> }
                </div>
                <div className="maincarousel-item profile-info" onClick={() => handleCarouselPosition(2)} >
                  <TeamProfilePage team={team}/>
                </div>
                <div className="maincarousel-item gamejam-info" onClick={() => handleCarouselPosition(3)}>
                    <UserProfileInfoBox users={team.users}/>
                </div>
            </main>
         </div>
            :
            <>
            </>}
        </>

    )
}