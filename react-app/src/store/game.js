const GET_GAMES = "game/GET_GAMES"  //Get all games
const POST_GAME = "game/POST_GAME"  //Create game
const GET_GAME = "game/GET_GAME" //Get game
const UPDATE_GAME = "game/UPDATE_GAME" // Update game
const DELETE_GAME = "game/DELETE_GAME" // Delete game




const getGames = (games) => ({
    type: GET_GAMES,
    payload: games
})
const postGame = (game) => ({
    type: POST_GAME,
    payload: game
})
const getGame = (game) => ({
    type: GET_GAME,
    payload: game
})
const updateGame = (game) => ({
    type: UPDATE_GAME,
    payload: game
})
const deleteGame = (game) => ({
    type: DELETE_GAME,
    payload: game
})

const initialState = { games: null };

export const GetGames = query => async (dispatch) => {
    let url = `/api/games?`;

    for (let prop in query) {
      url += `${prop}=${query[prop]}&`;
    }

    const response = await fetch(url);

    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getGames(data))  //What needs to be returned?
}

export const PostGame = (name) => async (dispatch)  => {
    const response = await fetch("/api/games/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(postGame(data))
    return {};   //What needs to be returned?
}

export const GetGame = (id) => async (dispatch) => {
    const response = await fetch(`/api/games/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getGame(data))   //What needs to be returned?
}

export const UpdateGame = (id, name) => async (dispatch)  => {
    const response = await fetch(`/api/games/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(updateGame(data))
    return {}  //What needs to be returned?
}

export const DeleteGame = (id, name) => async (dispatch)  => {
    const response = await fetch(`/api/games/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(deleteGame(data))
    return {};  //What needs to be returned
}


export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_GAMES:
            return {games: action.payload}
        case POST_GAME:
            return {games: action.payload}
        case GET_GAME:
            return {games: action.payload}
        case UPDATE_GAME:
            return {games: action.payload}
        case DELETE_GAME:
            return {games: action.payload}
        default:
            return state;
    }
}
