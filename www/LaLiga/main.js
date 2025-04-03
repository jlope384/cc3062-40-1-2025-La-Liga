import StandigsPage from './pages/StandingsPage.js';
import TeamPage from './pages/TeamPage.js';

const root = document.getElementById('root');
root.innerHTML = "";

const renderPage = () => {
    const hash = window.location.hash;

    let page = StandigsPage();

    if (hash.startsWith("#team")) {
        const queryString = hash.split('?')[1];
        const params = new URLSearchParams(queryString);
        const teamId = params.get('id');

        page = TeamPage(teamId);
    }

    page.render(root);
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);

