'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import './motherboard.css';

const Motherboard = ({ motherboard }) => {
  const [motherboardData, setMotherboardData] = useState(motherboard);
  const [selectedMotherboards, setSelectedMotherboards] = useState([]);

  const handleFilterChange = (newFilters) => {
    let filteredData = motherboard;

    // Apply price filter
    if (newFilters.price) {
      filteredData = filteredData.filter(
        (mb) => mb.current_price <= newFilters.price
      );
    }
    // Apply manufacturer filter
    if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
      filteredData = filteredData.filter((mb) =>
        newFilters.manufacturer.some((manufacturer) =>
          mb.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
        )
      );
    }
    // Apply form factor filter
    if (newFilters.formFactor && newFilters.formFactor.length > 0) {
      filteredData = filteredData.filter((mb) =>
        newFilters.formFactor.includes(mb.specification.form_factor)
      );
    }
    // Apply memory max filter
    if (newFilters.memoryMax) {
      filteredData = filteredData.filter(
        (mb) => mb.specification.memory_max <= newFilters.memoryMax
      );
    }
    setMotherboardData(filteredData);
  };

  const handleMotherboardSelect = (motherboards) => {
    setSelectedMotherboards(motherboards);
  };

  const filteredMotherboardData = motherboardData.filter(
    (mb) =>
      selectedMotherboards.length === 0 ||
      selectedMotherboards.some((selected) => selected.id === mb.id)
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        onFilterChange={handleFilterChange}
        onMotherboardSelect={handleMotherboardSelect}
      />
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h1>Choose a Motherboard</h1>
        <table className="motherboard-table">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Socket/CPU</th>
              <th>Form Factor</th>
              <th>Memory Max</th>
              <th>Memory Slots</th>
              <th>Color</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMotherboardData.map((mb) => (
              <tr key={mb.id}>
                <td>{mb.manufacturer}</td>
                <td>{mb.specification.cpu_socket}</td>
                <td>{mb.specification.form_factor}</td>
                <td>{mb.specification.memory_max} GB</td>
                <td>{mb.specification.memory_slots}</td>
                <td>{mb.specification.color}</td>
                <td>${(mb.current_price / 100).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => console.log('Added Motherboard:', mb)}
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
    </div>
  );
};

export default Motherboard;
