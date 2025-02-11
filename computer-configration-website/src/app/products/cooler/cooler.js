'use client';
import './cooler.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import { cooler } from '../../lib/placeholder_data'; // Importing cooler data
import { saveToLocalStorage, compatibleParts } from '@/app/lib/builderData';
import Link from 'next/link';

const Cooler = ({ cooler }) => {
  const [coolerData, setCoolerData] = useState(cooler);
  const [selectedCoolers, setSelectedCoolers] = useState([]);
  const [filters, setFilters] = useState({
    price: null,
    fanRpm: null,
    height: null,
    manufacturer: [],
    socket: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const applyFilters = () => {
    let filteredData = cooler;

    // Apply price filter
    if (filters.price !== null) {
      filteredData = filteredData.filter(
        (item) => item.current_price <= filters.price
      );
    }

    // Apply fan RPM filter
    if (filters.fanRpm !== null) {
      filteredData = filteredData.filter(
        (item) => item.specification.fan_rpm <= filters.fanRpm
      );
    }

    // Apply height filter
    if (filters.height !== null) {
      filteredData = filteredData.filter((item) => {
        if (item.specification.height === undefined) return true;
        return item.specification.height <= filters.height;
      });
    }

    // Apply manufacturer filter
    if (filters.manufacturer.length > 0) {
      filteredData = filteredData.filter((item) =>
        filters.manufacturer.some((manufacturer) =>
          item.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
        )
      );
    }

    // Apply socket filter
    if (filters.socket.length > 0) {
      filteredData = filteredData.filter((item) =>
        filters.socket.some((socket) => item.cpu_socket.includes(socket))
      );
    }

    if (filters.compat && filters.compat.length > 0) {
      filteredData = compatibleParts(filteredData, 'Cooler');
    }

    return filteredData;
  };

  const filteredCoolerData = applyFilters();

  const handleCoolerSelect = (coolers) => {
    setSelectedCoolers(coolers);
  };

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
                  <Link href={'/builder'}>
                    <button
                      onClick={() => {
                        saveToLocalStorage(
                          item.id,
                          item.category,
                          item.current_price,
                          item.name
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

export default Cooler;
