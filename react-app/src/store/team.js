const GET_TEAMS = "team/GET_TEAMS"  //Get all teams
const POST_TEAM = "team/POST_TEAM" //Create a team
const GET_TEAM = "team/GET_TEAM" //Get a team
const UPDATE_TEAM = "team/UPDATE_TEAM" //Update a team
const DELETE_TEAM = "team/DELET_TEAM" //Delete a team




const getTeams = (teams) => ({
    type: GET_TEAMS,
    payload: teams
})
const postTeam = (team) => ({
    type: POST_TEAM,
    payload: team
})
const getTeam = (team) => ({
    type: GET_TEAM,
    payload: team
})
const updateTeam = (team) => ({
    type: UPDATE_TEAM,
    payload: team
})
const deleteTeam = (team) => ({
    type: DELETE_TEAM,
    payload: team
})




const initialState = { teams: null };




export const GetTeams = () => async (dispatch) => {
    const response = await fetch('api/teams/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json()
    if (data.errors) {
        return;
    }

    dispatch(getTeams(data))
}

export const PostTeam = (name) => async (dispatch) => {
    const response = await fetch('/api/teams/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name
        }),
    });
    const data = await response.json();
    if (data.error) {
        return data;
    }

    dispatch(postTeam(data))
    return {};
}

export const GetTeam = (id) => async (dispatch) => {
    const response = await fetch(`api/teams/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(getTeam(data))
}

export const UpdateTeam = (id, name) => async (dispatch) => {
    const response = await fetch(`/api/teams/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name
        }),
    });
    const data = await response.json();
    if (data.error) {
        return data;
    }

    dispatch(updateTeam(data))
    return {}
}

export const  DeleteTeam = (id, team) => async (dispatch) => {
    const response = await fetch(`/api/teams/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            team
        }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(deleteTeam(data))
    return {};
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_TEAMS:
            return { teams: action.payload }
        case POST_TEAM:
            return { teams: action.payload }
        case GET_TEAM:
            return { teams: action.payload }
        case UPDATE_TEAM:
            return { teams: action.payload }
        case DELETE_TEAM:
            return { teams: action.payload }
    }
}