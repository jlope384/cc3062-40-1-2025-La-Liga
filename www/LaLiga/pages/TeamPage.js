import getTeamStats from '../utils/getTeamStats.js';
import TeamHeader from '../components/TeamHeader.js';
import TeamStatsTable from '../components/TeamStatsTable.js';

const TeamPage = (teamId) => {

    const render = async (parentElement) => {

        try {
            const data = await getTeamStats(teamId); 
            
            console.log(data);

            const teamData = data.response;
            const team = teamData.team;
            const league = teamData.league;

            const headerComponent = TeamHeader();
            const headerHtml = headerComponent.render({ team, league });

            const stats = {
                form: teamData.form,
                fixtures: teamData.fixtures,
                goals: teamData.goals,
                biggest: teamData.biggest,
                clean_sheet: teamData.clean_sheet,
                failed_to_score: teamData.failed_to_score,
                penalty: teamData.penalty
            };

            const efficiency = Math.round((stats.fixtures.wins.total * 100) / stats.fixtures.played.total);

            const formations = teamData.lineups.map(formation => ({
                formation: formation.formation,
                played: formation.played,
                percentage: Math.round((formation.played * 100) / stats.fixtures.played.total)
            }));

            const tableComponent = TeamStatsTable();
            const tableHtml = tableComponent.render({ 
                stats, 
                efficiency,
                formations 
            });

            parentElement.innerHTML = `
                ${headerHtml}
                ${tableHtml}
            `;

        } catch (error) {
            parentElement.innerHTML = `<p>ERROR: ${error.message}</p>`;
        }
    }

    return {
        render,
    }
}

export default TeamPage;