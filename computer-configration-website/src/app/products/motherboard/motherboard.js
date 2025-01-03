'use client'
import './motherboard.css';
import React, { useState } from 'react';

const Motherboard = ({motherboard}) => {
        const [motherboardData, setmotherboardData] = useState(motherboard);
        const [selectedmotherboards, setSelectedmotherboards] = useState([]);
        const handlemotherboardSelect = (motherboard) => {
            setSelectedmotherboards(motherboard);
        };
        const filteredmotherboardData = motherboardData.filter(
            (motherboard) =>
                selectedmotherboards.length === 0 ||
                selectedmotherboards.some((selected) => selected.id === motherboard.id)
        );

        console.log("log", filteredmotherboardData[0].id);

        return (
        <div className="cpu-container">
            <h1>Choose a motherboard</h1>
            <table className="cpu-table">
                <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Socket/cpu</th>
                    <th>Form factor</th>
                    <th>Memory max</th>
                    <th>Memory slot</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredmotherboardData.map((motherboard) => (
                    <tr key={motherboard.id}>
                        <td>
                            {motherboard.manufacturer}
                        </td>
                        <td>{motherboard.specification.cpu_socket} </td>
                        <td>{motherboard.specification.form_factor} </td>
                        <td>{motherboard.specification.memory_max} GB </td>
                        <td>{motherboard.specification.memory_slots} </td>
                        <td>{motherboard.specification.color} </td>
                        <td>${(motherboard.current_price / 100).toFixed(2)}</td>
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

export default Motherboard;