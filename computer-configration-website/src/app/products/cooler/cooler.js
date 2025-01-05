'use client';
import './cooler.css';
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import { cooler } from '../../lib/placeholder_data'; // Importing cooler data

const Cooler = ({ cooler }) => {
  const [coolerData, setCoolerData] = useState(cooler);
  const [selectedCoolers, setSelectedCoolers] = useState([]);

  const handleFilterChange = (newFilters) => {
    let filteredData = cooler;

    // Apply price filter
    if (newFilters.price) {
      filteredData = filteredData.filter(
        (item) => item.current_price <= newFilters.price
      );
    }

    // Apply fan RPM filter
    if (newFilters.fanRpm) {
      filteredData = filteredData.filter(
        (item) => item.specification.fan_rpm <= newFilters.fanRpm
      );
    }

    // Apply height filter
    if (newFilters.height !== undefined) {
      filteredData = filteredData.filter((item) => {
        if (item.specification.height === undefined) return true;
        return item.specification.height <= newFilters.height;
      });
    }

    // Apply manufacturer filter
    if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
      filteredData = filteredData.filter((item) =>
        newFilters.manufacturer.some((manufacturer) =>
          item.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
        )
      );
    }

    // Apply socket filter
    if (newFilters.socket && newFilters.socket.length > 0) {
      filteredData = filteredData.filter((item) =>
        newFilters.socket.some((socket) =>
          item.cpu_socket.includes(socket)
        )
      );
    }

    setCoolerData(filteredData);
  };

  const handleCoolerSelect = (coolers) => {
    setSelectedCoolers(coolers);
  };

  const filteredCoolerData = coolerData.filter(
    (item) =>
      selectedCoolers.length === 0 ||
      selectedCoolers.some((selected) => selected.id === item.id)
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        onFilterChange={handleFilterChange}
        onCoolerSelect={handleCoolerSelect}
      />
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h1>Choose a Cooler</h1>
        <table className="cooler-table">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Fan RPM</th>
              <th>Height</th>
              <th>Color</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoolerData.map((item) => (
              <tr key={item.id}>
                <td>{item.manufacturer}</td>
                <td>{item.specification.fan_rpm}</td>
                <td>{item.specification.height || 'N/A'}</td>
                <td>{item.specification.color}</td>
                <td>${(item.current_price / 100).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => console.log('Added Cooler:', item)}
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

export default Cooler;
