
const TeamPage = (teamId) => {

    const render = (parentElement) => {
        parentElement.innerHTML = `<h1>Equipo: ${teamId}</h1>`;
    }

    return {
        render
    }
}

export default TeamPage;