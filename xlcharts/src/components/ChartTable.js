
import React from 'react';

const ChartTable = ({ data }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Song Title</th>
                    <th>Artist</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.artist}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ChartTable;
