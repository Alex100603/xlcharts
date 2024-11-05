
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ChartTable from './components/ChartTable';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">XLCharts</h1>
        <ChartTable />
      </div>
    </div>
  );
}

export default App;