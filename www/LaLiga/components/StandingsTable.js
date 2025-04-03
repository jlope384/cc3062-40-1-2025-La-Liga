import StandigsRow from "../components/StandingsRow.js";

const StandingsTable = () => {

    const render = (standings, totals) => {
        let tableHtml = `
            <table class="table table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Logo</th>
                    <th>Equipo</th>
                    <th>Puntos</th>
                    <th>Jugados</th>
                    <th>Ganados</th>
                    <th>Empatados</th>
                    <th>Perdidos</th>
                    <th>Goles Favor</th>
                    <th>Goles Contra</th>
                    <th>Diferencia Goles</th>
                    <th>% Eficiencia</th>
                </tr>
            </thead>
            <tbody>
        `;

        standings.forEach(item => {
            tableHtml += StandigsRow(item);
        });

        tableHtml += `
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="8">Total</th>
                        <th>${totals.forGoals}</th>
                        <th>${totals.againstGoals}</th>
                        <th colspan="2"></th>
                    </tr>
                </tfoot>
            </table>
        `

        return tableHtml;
    }

    return {
        render,
    };
}

export default StandingsTable;