const getTeamStats = async (teamId) => {
    const response = await fetch('/LaLiga/response-team.json');
    if (!response.ok) {
        throw new Error("Failed to load team data");
    }
    return await response.json();
}

export default getTeamStats;