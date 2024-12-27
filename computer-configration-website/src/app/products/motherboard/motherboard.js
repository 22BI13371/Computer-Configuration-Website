import React from 'react';
import './motherboard.css';

const Motherboard = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a motherboard</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a motherboard" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Speed</th>
                        <th>Modules</th>
                        <th>Color</th>
                        <th>First word latency</th>
                        <th>CAS latency</th>
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

export default Motherboard;