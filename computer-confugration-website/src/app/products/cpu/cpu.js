import React from 'react';
import './cpu.css';

const CPU = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a CPU</h1>
            <div className="search-bar">
                <input type="text" placeholder="CPUs" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Core Count</th>
                        <th>Performance Core Clock</th>
                        <th>Performance Core Boost Clock</th>
                        <th>Microarchitecture</th>
                        <th>TIP</th>
                        <th>Integrated Graphics</th>
                        <th>Rating</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data rows will be added here */}
                </tbody>
            </table>
        </div>
    );
};

export default CPU;