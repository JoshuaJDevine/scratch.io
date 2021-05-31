//! Constants
const GET_USER = "user/GET_USER"
const GET_USERS = "user/GET_USERS"

const getUsersAC = (users) => ({
    type: GET_USERS,
    payload: users
})

const getUserAC = (user) => ({
    type: GET_USER,
    payload: user
})




export const getUsers = query => async (dispatch) => {
    let url = "/api/users?";

    for (let property in query) {
        url += `${property}=${query[property]}&`
    }

    const response = await fetch(url);

    const data = await response.json();
    if (data.errors) {
        return
    }

    dispatch(getUsersAC(data))
}

export const getUser = (id, query) => async (dispatch) => {
    let url = `/api/users/${id}?`;

    for (let property in query) {
        url += `${property}=${query[property]}&`
    }

    const response = await fetch(url);

    const data = await response.json();
    if (data.errors) {
        return
    }

    dispatch(getUserAC(data))
}




const initialState = { users: null }
export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {users: action.payload}
        case GET_USER:
            return {users: action.payload}
        default:
            return state
    }
}
