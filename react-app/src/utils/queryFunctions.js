export function gameJamQuery(obj={}) {
    const defaultObj = {
        searchTerm: "",
        resultLimit: 25,
        date: "all",
        getJoinedTeams: false,
        getJoinedGames: false,
        getJoinedTags: false
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
