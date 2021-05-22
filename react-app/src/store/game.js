const GET_GAMES = "game/GET_GAMES"

const getGames = (games) => ({
    type: GET_GAMES,
    payload: games
})

const initialState = { games: null };

export const games = () => async (dispatch) => {
    const response = await fetch('/api/games/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getGames(data))
}


export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_GAMES:
            return {games: action.payload}
        default:
            return state;
    }
}
