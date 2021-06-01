import React from "react";
// import GetGame from "../../store/game"
// import { useDispatch } from "react-redux"
// import { useHistory } from "react-router-dom"

export default function TeamGameCard({ game }){
    // console.log("GAME CARD GAME ------->", game?.name)
    // const dispatch = useDispatch()
    // const history = useHistory
    // const handleClick = () => {
    //     dispatch(GetGame(game.id))
    //     history.push(`/games/${game.id}`)
    // } 
    return(
        <div className="l-container">
            <h1>{game?.name}</h1>
            <div className="b-game-card">
              <div className="b-game-card__cover" 
              style={{ backgroundImage: `url(${game?.avatarUrl})` }} 
            //   onClick={ handleClick } 
              />
            </div>
        </div>
    )
}