import getStandings from '../utils/getStandings.js';
import StandingsTable from '../components/StandingsTable.js';

const StandigsPage = () => {

    const render = async (parentElement) => {

        try {
            const data = await getStandings();
            const raw = data.response[0].league.standings[0];

            const tableComponent = StandingsTable();
            const tableHtml = tableComponent.render(raw);

            parentElement.innerHTML = `
                <h1>La Liga</h1>
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