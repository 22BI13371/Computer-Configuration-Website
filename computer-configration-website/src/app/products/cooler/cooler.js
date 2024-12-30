'use client';
import React from 'react';
import './cooler.css';
import Sidebar from './Sidebar';

const Cooler = ({cooler1}) => {
    const Coolers = cooler1.slice((item) => item.id === cooler1.id)
    return (
        <div style={{display: 'flex'}}>
            <Sidebar>

            </Sidebar>
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
                        {Coolers.map((cooler) => (
                            <tr key={cooler.id}>
                                <td>{cooler.name}</td>
                                <td>{cooler.specification.fan_rpm}</td> 
                                <td>{cooler.specification.noise_level}</td>
                                <td>{cooler.specification.color}</td>
                                <td>{cooler.radiator}</td>
                                <td>{cooler.current_price}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cooler;