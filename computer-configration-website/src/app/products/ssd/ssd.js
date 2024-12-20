import React from 'react';
import './ssd.css';

const Ssd = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a SSD</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a SSD" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Capacity</th>
                        <th>Cache</th>
                        <th>Form Factor</th>
                        <th>Interface</th>
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

export default Ssd;