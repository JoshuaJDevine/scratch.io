export function gameJamQuery(obj={}) {
    const defaultObj = {
        searchTerm: "",
        searchTags: [],
        tagOp: "or",
        limit: 25,
        date: "all",
        getTeams: "",
        getGames: "",
        getTags: ""
    }

    for (let key in obj) {
        defaultObj[key] = obj[key];
    }

    return defaultObj;
}

export function gameQuery(obj={}) {
    const defaultObj = {
        searchTerm: "",
        resultLimit: 25,
        getJoinedTags: false
    }

    for (let key in obj) {
        defaultObj[key] = obj[key];
    }

    return defaultObj;
}

export function teamQuery(obj = {}) {
    const defaultObj = {
        searchTerm: "",
        resultLimit: 25,
        getJoinedUsers: false,
        getJoinedSkills: false,
        getJoinedGames: false,
        getJoinedGameJams: false
    }

    for (let key in obj) {
        defaultObj[key] = obj[key];
    }

    return defaultObj;
}

export function skillsQuery(obj = {}) {
    const defaultObj = {
        getJoinedUsers: false
    }

    for (let key in obj) {
        defaultObj[key] = obj[key]
    }

    return defaultObj
}

export function usersQuery(obj = {}) {
    const defaultObj = {
        searchTerm: "",
        resultLimit: 25,
        getJoinedSkills: false,
        getJoinedTeams: false,
        getJoinedGameJams: false
    }

    for (let key in obj) {
        defaultObj[key] = obj[key]
    }
    return defaultObj
}
