import React from 'react';
import './cooler.css';

const Cooler = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a cooler</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a cooler" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Fan RPM</th>
                        <th>Noise level</th>
                        <th>Color</th>
                        <th>Radiator size</th>
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

export default Cooler;