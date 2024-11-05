
import React from 'react';
import MyNavbar from './components/Navbar';
import Chart from './components/Chart';
import ChartTable from './components/ChartTable';

const App = () => {
    // Sample data for the table
    const songData = [
        { title: 'Song A', artist: 'Artist 1', points: 12 },
        { title: 'Song B', artist: 'Artist 2', points: 19 },
        { title: 'Song C', artist: 'Artist 3', points: 3 },
        { title: 'Song D', artist: 'Artist 4', points: 5 },
    ];

    return (
        <div>
            <MyNavbar />
            <div className="container mt-3">
                <h1>Welcome to XL Charts</h1>
                <Chart />
                <h2>Chart Table</h2>
                <ChartTable data={songData} />
            </div>
        </div>
    );
};

export default App;


