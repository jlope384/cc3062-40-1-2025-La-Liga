const TeamHeader = () => {
    const render = ({ team, league }) => {
        return `
            <div class="team-header">
                <div class="team-info">
                    <img src="${team.logo}" alt="${team.name}" class="team-logo">
                    <h2>${team.name}</h2>
                </div>
                <div class="league-info">
                    <span>${league.name} ${league.season}</span>
                </div>
            </div>
        `;
    }

    return {
        render
    }
}

export default TeamHeader;