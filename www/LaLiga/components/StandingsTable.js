import StandigsRow from "../components/StandingsRow.js";

const StandingsTable = () => {

    const render = (standings) => {
        let tableHtml = `
            <table border="1" style="width:100%; border-collapse: collapse;">
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
                </tr>
            </thead>
            <tbody>
        `;

        standings.forEach(item => {
            console.log(item);
            tableHtml += StandigsRow(item);
        });

        tableHtml += `
                </tbody>
            </table>
        `

        return tableHtml;
    }

    return {
        render,
    };
}

export default StandingsTable;