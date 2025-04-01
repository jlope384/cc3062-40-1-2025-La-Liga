import BASE_URL from './BASE_URL.js';
import CONFIG from './config.js';

const getStandings = async () => {

    const response = await fetch(`${BASE_URL}/standings?league=140&season=2024`, {
        headers: {
            'x-apisports-key': CONFIG.API_URL
        }
    });

    if (!response.ok) {
        throw new Error("Fallo la consulta al API");
    }

    return await response.json();
}

export default getStandings;