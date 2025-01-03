'use client';
import './cooler.css';
import React, { useState } from 'react';

const Cooler = ({cooler}) => {
    const [coolerData, setcoolerData] = useState(cooler);
    const [selectedcoolers, setSelectedcoolers] = useState([]);
    const handlecoolerSelect = (cooler) => {
        setSelectedcoolers(cooler);
    };
    const filteredcoolerData = coolerData.filter(
        (cooler) =>
            selectedcoolers.length === 0 ||
            selectedcoolers.some((selected) => selected.id === cooler.id)
    );

    console.log("log", filteredcoolerData[0].id);

    return (
        <div className="cpu-container">
            <h1>Choose a cooler</h1>
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
                {filteredcoolerData.map((cooler) => (
                    <tr key={cooler.id}>
                        <td>
                            {cooler.manufacturer}
                        </td>
                        <td>{cooler.specification.fan_rpm} </td>
                        <td>{cooler.specification.noise_level} </td>
                        <td>{cooler.specification.color} </td>
                        <td>{cooler.specification.height} mm</td>
                        <td>${(cooler.current_price / 100).toFixed(2)}</td>
                        <td>
                            <button
                                onClick={() => console.log('Added cooler:', cooler)}
                                style={{
                                    backgroundColor: '#1abc9c',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                }}
                            >
                                Add
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cooler;

