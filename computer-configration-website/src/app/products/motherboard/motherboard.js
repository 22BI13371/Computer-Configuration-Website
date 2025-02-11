'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Link from 'next/link';
import { saveToLocalStorage, compatibleParts } from '@/app/lib/builderData';
import './motherboard.css';

const Motherboard = ({ motherboard }) => {
  const [motherboardData, setMotherboardData] = useState(motherboard);
  const [selectedMotherboards, setSelectedMotherboards] = useState([]);

  const handleFilterChange = (newFilters) => {
    let filteredData = motherboard;

    // Apply manufacturer filter
    if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
      filteredData = filteredData.filter((motherboard) =>
        newFilters.manufacturer.some((manufacturer) =>
          motherboard.manufacturer
            .toLowerCase()
            .includes(manufacturer.toLowerCase())
        )
      );
    }

    // Apply socket filter
    if (newFilters.socket && newFilters.socket.length > 0) {
      filteredData = filteredData.filter((motherboard) =>
        newFilters.socket.includes(motherboard.cpu_socket)
      );
    }

    // Apply form factor filter
    if (newFilters.form_factor && newFilters.form_factor.length > 0) {
      filteredData = filteredData.filter((motherboard) =>
        newFilters.form_factor.includes(motherboard.specification.form_factor)
      );
    }

    if (newFilters.compat && newFilters.compat.length > 0) {
      filteredData = compatibleParts(filteredData, 'Motherboard');
    }

    setMotherboardData(filteredData);
  };

  const handleMotherboardSelect = (motherboards) => {
    setSelectedMotherboards(motherboards);
  };

  const filteredMotherboardData = motherboardData.filter(
    (motherboard) =>
      selectedMotherboards.length === 0 ||
      selectedMotherboards.some((selected) => selected.id === motherboard.id)
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
