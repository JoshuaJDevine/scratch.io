const GET_SKILLS = "skills/GET_SKILLS" //! GET all skills
const GET_SKILL = "skills/GET_SKILL" //! GET one skill


const getSkills = (skills) => ({
    type: GET_SKILLS,
    payload: skills
})

const getSkill = (skill) => ({
    type: GET_SKILL,
    payload: skill
})

const initialState = { skills: null }

export const getAllSkills = () => async dispatch => {
    const res = await fetch('/api/skills', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    if (data.errors) {
        return;
    }

    dispatch(getSkills(data))
}

export const skillGet = (id) => async dispatch => {
    const res = await fetch(`/api/skills/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    if (data.errors) {
        return
    }

    dispatch(getSkill(data))
}

export default function skillsReducer(state=initialState, action) {
    switch (action.type) {
        case GET_SKILLS:
            return {skills: action.payload}
        case GET_SKILL:
            return {skills: action.payload}
        default:
            return state
    }
}
