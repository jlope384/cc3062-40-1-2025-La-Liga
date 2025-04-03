import getStandings from '../utils/getStandings.js';
import StandingsTable from '../components/StandingsTable.js';
import StandingsTitle from '../components/StandingsTitle.js';

const StandigsPage = () => {

    const render = async (parentElement) => {

        try {
            const data = await getStandings();
            
            console.log(data);

            const raw = data.response[0].league.standings[0];
            const title = data.response[0].league;

            const titleComponent = StandingsTitle();
            const titleHtml = titleComponent.render(title);

            const championsLeague = [1, 2, 3, 4];
            const descenso = [18, 19, 20];

            const teams = raw.map((team) => {
                const efficiency = ((team.all.win * 100) / team.all.played);

                let rowClass = "";
                if (championsLeague.includes(team.rank)) {
                    rowClass = "table-success";
                } else if (descenso.includes(team.rank)) {
                    rowClass = "table-danger";
                }

                return {
                    id: team.team.id,
                    rank: team.rank,
                    logo: team.team.logo,
                    name: team.team.name,
                    points: team.points,
                    played: team.all.played,
                    win: team.all.win,
                    lose: team.all.lose,
                    draw: team.all.draw,
                    forGoals: team.all.goals.for,
                    againstGoals: team.all.goals.against,
                    goalsDiff: team.goalsDiff,
                    efficiency: Math.round(efficiency),
                    rowClass: rowClass
                }
            });

            const totals = teams.reduce((carry, team) => {
                return {
                    forGoals: carry.forGoals += team.forGoals,
                    againstGoals: carry.againstGoals += team.againstGoals,
                }
            }, {
                forGoals:0,
                againstGoals: 0
            });


            const tableComponent = StandingsTable();
            const tableHtml = tableComponent.render(teams, totals);

            parentElement.innerHTML = `
                ${titleHtml}
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

export default StandigsPage;