'use client';
import './power-supply.css';
import React, { useState, useEffect } from 'react';

const Powersupply = ({ powerSupply }) => {
    const [powerSupplyData, setPowerSupplyData] = useState([]);
    const [selectedPowerSupplys, setSelectedPowerSupplys] = useState([]);

    useEffect(() => {
        if (powerSupply) {
            setPowerSupplyData(powerSupply);
        }
    }, [powerSupply]);

    const handlePowerSupplySelect = (powerSupply) => {
        setSelectedPowerSupplys((prev) => [...prev, powerSupply]);
    };

    const filteredPowerSupplyData = powerSupplyData.filter(
        (powerSupply) =>
            selectedPowerSupplys.length === 0 ||
            selectedPowerSupplys.some((selected) => selected.id === powerSupply.id)
    );

    console.log("log", filteredPowerSupplyData[0].id);

    return (
        <div className="cpu-container">
            <h1>Choose a Power Supply</h1>
            <div className="search-bar">
                <input type="text" placeholder="Find a power supply" />
            </div>
            <table className="cpu-table">
                <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Type</th>
                    <th>Efficiency Rating</th>
                    <th>Wattage</th>
                    <th>Modular</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredPowerSupplyData.map((powerSupply) => (
                    <tr key={powerSupply.id}>
                        <td>{powerSupply.manufacturer}</td>
                        <td>{powerSupply.specification.type}</td>
                        <td>{powerSupply.specification.efficiency_rating}</td>
                        <td>{powerSupply.specification.wattage} W</td>
                        <td>{powerSupply.specification.modular}</td>
                        <td>{powerSupply.specification.color}</td>
                        <td>${(powerSupply.current_price / 100).toFixed(2)}</td>
                        <td>
                            <button
                                onClick={() => handlePowerSupplySelect(powerSupply)}
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

export default Powersupply;
