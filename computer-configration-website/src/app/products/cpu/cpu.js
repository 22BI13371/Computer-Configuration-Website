'use client';
import React, { useState } from 'react';
// import { cpu } from '../../lib/placeholder_data'; // Importing the data from placeholder_data.js
import Sidebar from './Sidebar'; // Import Sidebar component
import Link from 'next/link';
import { saveToLocalStorage, compatibleParts } from '@/app/lib/builderData';
import './cpu.css';

const CPU = ({ cpu }) => {
  const [cpuData, setCpuData] = useState(cpu);
  const [selectedCpus, setSelectedCpus] = useState([]);
  const handleFilterChange = (newFilters) => {
    let filteredData = cpu;
    // Apply price filter
    if (newFilters.price) {
      filteredData = filteredData.filter(
        (cpu) => cpu.current_price <= newFilters.price
      );
    }
    // Apply thread count filter
    if (newFilters.thread) {
      filteredData = filteredData.filter(
        (cpu) => cpu.specification.thread_count <= newFilters.thread
      );
    }
    // Apply L2 Cache filter
    if (newFilters.l2Cache) {
      filteredData = filteredData.filter(
        (cpu) => cpu.specification.l2_cache <= newFilters.l2Cache
      );
    }
    if (newFilters.l3Cache) {
      filteredData = filteredData.filter(
        (cpu) => cpu.specification.l3_cache <= newFilters.l3Cache
      );
    }
    // Apply manufacturer filter
    if (newFilters.manufacturer && newFilters.manufacturer.length > 0) {
      filteredData = filteredData.filter((cpu) =>
        newFilters.manufacturer.some((manufacturer) =>
          cpu.name.toLowerCase().includes(manufacturer.toLowerCase())
        )
      );
    }
    if (newFilters.coreFamily && newFilters.coreFamily.length > 0) {
      filteredData = filteredData.filter((cpu) =>
        newFilters.coreFamily.includes(cpu.specification.core_family)
      );
    }
    if (newFilters.compat && newFilters.compat.length > 0) {
      filteredData = compatibleParts(filteredData, 'CPU');
    }
    setCpuData(filteredData);
  };
  const handleCpuSelect = (cpus) => {
    setSelectedCpus(cpus);
  };
  const filteredCpuData = cpuData.filter(
    (cpu) =>
      selectedCpus.length === 0 ||
      selectedCpus.some((selected) => selected.id === cpu.id)
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        onFilterChange={handleFilterChange}
        onCpuSelect={handleCpuSelect}
        data={cpu}
      />
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h1>Choose a CPU</h1>
        <table className="cpu-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Core Count</th>
              <th>Performance Core Clock</th>
              <th>Performance Core Boost Clock</th>
              <th>Microarchitecture</th>
              <th>TDP</th>
              <th>Integrated Graphics</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCpuData.map((cpu) => (
              <tr key={cpu.id}>
                <td>{cpu.manufacturer}</td>
                <td>{cpu.specification.core_count}</td>
                <td>{cpu.specification.performance_core_clock} GHz</td>
                <td>{cpu.specification.efficiency_core_boost_clock} GHz</td>
                <td>{cpu.specification.micro_architecture}</td>
                <td>{cpu.specification.tdp}W</td>
                <td>{cpu.specification.integrated_graphics}</td>
                <td>${(cpu.current_price / 100).toFixed(2)}</td>
                <td>
                  <Link
                    href={{
                      pathname: '/builder',
                      query: { id: cpu.id, category: cpu.category },
                    }}
                  >
                    <button
                      onClick={() => {
                        saveToLocalStorage(
                          cpu.id,
                          cpu.category,
                          cpu.current_price,
                          cpu.name,
                          cpu.specification
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

export default CPU;
