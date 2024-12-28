'use client'
import './storage.css';
import React, { useState } from 'react';
const Storage = ({storage}) => {
    const [storageData, setstorageData] = useState(storage);
    const [selectedstorages, setSelectedstorages] = useState([]);
    const handlestorageSelect = (storage) => {
        setSelectedstorages(storage);
    };
    const filteredstorageData = storageData.filter(
        (storage) =>
            selectedstorages.length === 0 ||
            selectedstorages.some((selected) => selected.id === storage.id)
    );

    console.log("log", filteredstorageData[0].id);

    return (
        <div className="cpu-container">
            <h1>Choose a Storage</h1>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Interface</th>
                        <th>Form Factor</th>
                        <th>Price/gb</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {filteredstorageData.map((storage) => (
                    <tr key={storage.id}>
                        <td>
                            {storage.manufacturer}
                        </td>
                        <td>{storage.specification.type} </td>
                        <td>{storage.specification.capacity}  Mb</td>
                        <td>{storage.specification.interface} </td>
                        <td>{storage.specification.form_factor} </td>
                        <td>${storage.specification.price_per_gb} </td>
                        <td>${(storage.current_price / 100).toFixed(2)}</td>
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
export default Storage;