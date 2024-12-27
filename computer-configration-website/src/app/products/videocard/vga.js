import React from 'react';
import './vga.css';

const Vga = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a VGA</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a vga" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Chipset</th>
                        <th>Memory</th>
                        <th>Core Clock</th>
                        <th>Boost clock</th>
                        <th>color</th>
                        <th>length</th>
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

export default Vga;