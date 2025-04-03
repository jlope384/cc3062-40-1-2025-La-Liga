const StandingsRow = (item) => {

    return `
        <tr class="${item.rowClass}">
            <td>${item.rank}</td>
            <td>
                <img src="${item.logo}" width="50px" />
            </td>
            <td>
                <a href="/cc3062-40/www/LaLiga/#team?id=${item.id}">
                    ${item.name}
                </a>
            </td>
            <td>${item.points}</td>
            <td>${item.played}</td>
            <td>${item.win}</td>
            <td>${item.lose}</td>
            <td>${item.draw}</td>
            <td>${item.forGoals}</td>
            <td>${item.againstGoals}</td>
            <td>${item.goalsDiff}</td>
            <td>${item.efficiency}</td>
        </tr>
    `;

};

export default StandingsRow;