import React from 'react';
import './power-supply.css';

const PowerSupply = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a Power supply</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a power supply" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Type</th>
                        <th>Efficiency rating</th>
                        <th>Wattage</th>
                        <th>Modular</th>
                        <th>Color</th>
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

export default PowerSupply;