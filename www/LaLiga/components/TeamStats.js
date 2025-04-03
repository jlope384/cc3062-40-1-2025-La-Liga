const TeamStatsTable = () => {
    const render = ({ stats, efficiency, formations }) => {
        return `
            <div class="team-stats-container">
                <div class="general-stats">
                    <h3>Estadísticas Generales</h3>
                    <table class="table">
                        <tr>
                            <td>Partidos jugados</td>
                            <td>${stats.fixtures.played.total}</td>
                        </tr>
                        <tr>
                            <td>Victorias</td>
                            <td>${stats.fixtures.wins.total}</td>
                        </tr>
                        <tr>
                            <td>Empates</td>
                            <td>${stats.fixtures.draws.total}</td>
                        </tr>
                        <tr>
                            <td>Derrotas</td>
                            <td>${stats.fixtures.loses.total}</td>
                        </tr>
                        <tr>
                            <td>Eficiencia</td>
                            <td>${efficiency}%</td>
                        </tr>
                    </table>
                </div>

                <div class="goals-stats">
                    <h3>Goles</h3>
                    <table class="table">
                        <tr>
                            <td>A favor</td>
                            <td>${stats.goals.for.total.total}</td>
                        </tr>
                        <tr>
                            <td>En contra</td>
                            <td>${stats.goals.against.total.total}</td>
                        </tr>
                    </table>
                </div>

                <div class="formations">
                    <h3>Formaciones</h3>
                    <table class="table">
                        ${formations.map(formation => `
                            <tr>
                                <td>${formation.formation}</td>
                                <td>${formation.played} partidos (${formation.percentage}%)</td>
                            </tr>
                        `).join('')}
                    </table>
                </div>
            </div>
        `;
    }

    return {
        render
    }
}

export default TeamStatsTable;