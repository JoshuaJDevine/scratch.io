const GET_TEAMS = "team/GET_TEAMS"  //Get all teams
const POST_TEAM = "team/POST_TEAM" //Create a team
const GET_TEAM = "team/GET_TEAM" //Get a team
const UPDATE_TEAM = "team/UPDATE_TEAM" //Update a team
const DELETE_TEAM = "team/DELET_TEAM" //Delete a team
const POST_NEW_MEMBER = "team/POST_NEW_MEMBER"
const CHANGE_WANTED_SKILLS = "team/CHANGE_WANTED_SKILLS"



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
const addNewMember = (user) => ({
    type: POST_NEW_MEMBER,
    payload: user
})
const changeWantedSkills = (skills) => ({
    type: CHANGE_WANTED_SKILLS,
    payload: skills
})




const initialState = { teams: null };




export const GetTeams = query => async (dispatch) => {
    let url = `/api/teams?`;

    for (let prop in query) {
        url += `${prop}=${query[prop]}&`
    }

    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        dispatch(getTeams(data));
    }
}

export const PostTeam = (values) => async (dispatch) => {
    const {
            name,
            blurb,
            avatar,
            website,
            github,
            recruiting
        } = values
    const response = await fetch('/api/teams/', {      
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            blurb,
            avatar,
            website,
            github,
            recruiting
        }),
    });
    const data = await response.json();
    console.log('DATA --------->', data)
    // teamId = data.id
    // dispatch(changeWantedSkills(teamId, wantedSkillsCollection))

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

export const AddNewMember = (teamId, userId) => async (dispatch) => {
    const response = await fetch(`/api/teams/${teamId}/add_new_member`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            userId
        })
    })
    const data = await response.json();
    if (data.errors) {
        return data
    }

    dispatch(addNewMember(data))
    return {};
}

export const ChangeWantedSkills = (teamId, skills) => async (dispatch) => {
    const response = await fetch(`/api/teams/${teamId}/change_wanted_skills`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            skills
        })
    })
    const data = await response.json();
    if (data.erros) {
        return data
    }

    dispatch(changeWantedSkills(data))
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
        case POST_NEW_MEMBER: 
            return { teams: action.payload}
        default:
            return state
    }
}