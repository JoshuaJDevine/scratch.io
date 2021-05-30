//! Constants
const GET_USER = "user/GET_USER"
const GET_USERS = "user/GET_USERS"

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
})

const getUser = (user) => ({
    type: GET_USER,
    payload: user
})


const initialState = { users: null }

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

    dispatch(getUsers(data))
}


