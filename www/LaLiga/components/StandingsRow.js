const StandingsRow = (item) => {

    return `
        <tr>
            <td>${item.rank}</td>
            <td>
                <img src="${item.team.logo}" width="50px" />
            </td>
            <td>${item.team.name}</td>
        </tr>
    `;

};

export default StandingsRow;