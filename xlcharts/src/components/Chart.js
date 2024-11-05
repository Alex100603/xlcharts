
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
    const data = {
        labels: ['Song A', 'Song B', 'Song C', 'Song D'],
        datasets: [
            {
                label: 'Points',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Sample Chart</h2>
            <Bar data={data} />
        </div>
    );
};

export default Chart;

