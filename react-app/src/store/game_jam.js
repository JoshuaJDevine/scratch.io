const GET_GAME_JAMS = "gamejams/GET_GAME_JAMS";
const GET_GAME_JAM = "gamejams/GET_GAME_JAM";
const POST_GAME_JAM = "gamejams/POST_GAME_JAM";
const PATCH_GAME_JAM = "gamejams/PATCH_GAME_JAM";
const DELETE_GAME_JAM = "gamejams/DELETE_GAME_JAM";
const CLEAR_GAME_JAMS = "gamejams/CLEAR_GAME_JAMS";

const getGameJamsAction = (payload, key) => ({
    type: GET_GAME_JAMS,
    payload,
    key
})

const getGameJamAction = payload => ({
    type: GET_GAME_JAM,
    payload
})

const postGameJamAction = payload => ({
    type: POST_GAME_JAM,
    payload
})

const patchGameJamAction = payload => ({
    type: PATCH_GAME_JAM,
    payload
})

const deleteGameJamAction = payload => ({
    type: DELETE_GAME_JAM,
    payload
})

const _clearGameJams = (key='default') => ({
    type: CLEAR_GAME_JAMS,
    key
})

export const getGameJams = (query, key) => async (dispatch) => {
    let url = `/api/gamejams?`;

    for (let prop in query) {
        url += `${prop}=${query[prop]}&`
    }

    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        dispatch(getGameJamsAction(data, key));
    }
}

export const getGameJam = id => async (dispatch) => {
    const res = await fetch(`/api/gamejams/${id}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(getGameJamAction({ id:id, data:data }));
    }
}

export const postGameJam = payload => async (dispatch) => {
    const res = await fetch(`/api/gamejams`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(postGameJamAction(data));
    }
    else {
        console.log("Errors:", res);
    }
}

export const patchGameJam = (id, payload) => async (dispatch) => {
    const res = await fetch(`/api/gamejams/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(patchGameJamAction({ id:id, data:data }));
    }
}

export const deleteGameJam = id => async (dispatch) => {
    const res = await fetch(`/api/gamejams/${id}`, {
        method: "DELETE"
    });
    if (res.ok) {
        dispatch(deleteGameJamAction(id));
        return res;
    }
}

export const clearGameJams = (key) => async (dispatch) => {
    dispatch(_clearGameJams(key));
}

const initialState = {};
const KEYS = new Set(["featured", "search"]);

const gameJamReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_GAME_JAMS:
            // Clear old data if action.key in KEYS
            if (newState[action.key] === undefined || KEYS.has(action.key))
                newState[action.key] = {};
            for (let gameJam of action.payload.game_jams)
                newState[action.key][gameJam.id] = gameJam;
            return newState;
        case GET_GAME_JAM:
            newState[action.payload.id] = action.payload;
            return newState;
        case POST_GAME_JAM:
            newState[action.payload.id] = action.payload;
            return newState;
        case PATCH_GAME_JAM:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_GAME_JAM:
            for (let key in newState){
                if (newState[key].id === action.payload) {
                    delete newState[key];
                    break;
                }
            }
            return newState;
        case CLEAR_GAME_JAMS:
            delete newState[action.key];
            return newState;
        default:
            return state;
    }
}

export default gameJamReducer;
