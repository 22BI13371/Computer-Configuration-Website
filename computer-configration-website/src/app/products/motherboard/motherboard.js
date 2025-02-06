'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Link from 'next/link';
import { saveToLocalStorage } from '@/app/lib/builderData';
import './motherboard.css';

const Motherboard = ({ motherboard }) => {
  const [motherboardData, setMotherboardData] = useState(motherboard);
  const [selectedMotherboards, setSelectedMotherboards] = useState([]);

  const handleFilterChange = (newFilters) => {
    let filteredData = motherboard;

    // Apply manufacturer filter
    if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
      filteredData = filteredData.filter((mb) =>
        newFilters.manufacturer.some((manufacturer) =>
          mb.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
        )
      );
    }

    // Apply socket filter
    if (newFilters.socket && newFilters.socket.length > 0) {
      filteredData = filteredData.filter((mb) =>
        newFilters.socket.includes(mb.cpu_socket)
      );
    }

    // Apply form factor filter
    if (newFilters.formFactor && newFilters.formFactor.length > 0) {
      filteredData = filteredData.filter((mb) =>
        newFilters.formFactor.includes(mb.form_factor)
      );
    }

    setMotherboardData(filteredData);
  };

  const handleMotherboardSelect = (motherboard) => {
    setSelectedMotherboards([motherboard]);
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
              <th>Socket</th>
              <th>Form Factor</th>
              <th>Memory Max</th>
              <th>Memory Slots</th>
              <th>Color</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMotherboardData.map((motherboard) => (
              <tr key={motherboard.id}>
                <td>{motherboard.manufacturer}</td>
                <td>{motherboard.specification.cpu_socket}</td>
                <td>{motherboard.specification.form_factor}</td>
                <td>{motherboard.specification.memory_max} GB</td>
                <td>{motherboard.specification.memory_slots}</td>
                <td>{motherboard.specification.color}</td>
                <td>${(motherboard.current_price / 100).toFixed(2)}</td>
                <td>
                  <Link href={'/builder'}>
                    <button
                      onClick={() => {
                        saveToLocalStorage(
                          motherboard.id,
                          motherboard.category,
                          motherboard.current_price,
                          motherboard.name,
                          motherboard.specification
                        );
                      }}
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
                  </Link>
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
