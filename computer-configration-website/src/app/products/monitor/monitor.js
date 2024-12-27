import React from 'react';
import './monitor.css';

const Monitor = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a Monitor</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a Monitor" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Screen size</th>
                        <th>Resolutions</th>
                        <th>Refresh rate</th>
                        <th>Response time(G2G)</th>
                        <th>Panel type</th>
                        <th>Ratio</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data rows will be added here */}
                </tbody>
            </table>
        </div>
    );
};

export default Monitor;