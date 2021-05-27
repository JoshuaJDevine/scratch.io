export function gameJamQuery(obj) {
    let defaultObj = {
        searchTerm: "",
        resultLimit: 25,
        getJoinedGames: false,
        getJoinedTeams: false,
        getJoinedTags: false
    }

    for (let key in obj) {
        defaultObj[key] = obj[key]
    }
    return defaultObj
}