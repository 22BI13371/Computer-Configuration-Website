'use client';
import React, { useState, useEffect } from 'react';
// import { cpu } from "../../lib/placeholder_data"; // Importing the data from placeholder_data.js
import { fetchPcParts } from '@/app/lib/data';
import './cpu.css';

const Sidebar = ({ onFilterChange, onCpuSelect, cpu }) => {
  const [price, setPrice] = useState(71169);
  const [manufacturer, setManufacturer] = useState({
    all: true,
    amd: false,
    intel: false,
  });

  const [cpuOptions, setCpuOptions] = useState({
    all: true,
    options: cpu.map((cpuItem) => ({
      id: cpuItem.id,
      label:
        cpuItem.specification.series +
        ' ' +
        cpuItem.specification.micro_architecture,
      checked: false,
      details: cpuItem, // Store the full CPU data to show later
    })),
  });

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
  };

  const handleManufacturerChange = (key) => {
    const newManufacturer = {
      all: key === 'all',
      amd: key === 'amd',
      intel: key === 'intel',
    };
    setManufacturer(newManufacturer);

    // Trigger the filter change with the selected manufacturer
    onFilterChange({ manufacturer: key });
  };

  const handleCpuChange = (id) => {
    const newCpuOptions = {
      ...cpuOptions,
      options: cpuOptions.options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      ),
    };

    // Check if all individual checkboxes are unchecked
    const allUnchecked = newCpuOptions.options.every(
      (option) => !option.checked
    );

    if (allUnchecked) {
      newCpuOptions.all = true;
      newCpuOptions.options = newCpuOptions.options.map((option) => ({
        ...option,
        checked: false,
      }));
    } else {
      newCpuOptions.all = false;
    }

    setCpuOptions(newCpuOptions);

    const selectedCpus = newCpuOptions.options
      .filter((option) => option.checked)
      .map((option) => option.details);

    onCpuSelect(selectedCpus);
  };

  const handleAllCpuChange = () => {
    setCpuOptions({
      all: true,
      options: cpuOptions.options.map((option) => ({
        ...option,
        checked: false,
      })),
    });
    onCpuSelect([]);
  };

  return (
    <>
      <style>
        {`
          .form-range {
            appearance: none;
            width: 100%;
            height: 8px;
            background: #ddd;
            border-radius: 5px;
            outline: none;
          }

          .form-range::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            background: #007bff;
            border-radius: 50%;
            cursor: pointer;
          }

          .form-range::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #007bff;
            border-radius: 50%;
            cursor: pointer;
          }

          .filter-section {
            width: 300px;
            padding: 15px;
            background: #f8f9fa;
            border: 1px solid #ddd;
            color: #000;
          }

          .filter-header {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }

          .filter-title {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .filter-group {
            margin-bottom: 20px;
          }

          .slider-container {
            position: relative;
          }

          .max-value {
            position: absolute;
            right: 0;
            top: -25px;
            font-weight: bold;
            font-size: 14px;
            color: #333;
          }
        `}
      </style>

      <div className="filter-section">
        <div className="filter-header">Filters</div>

        <div className="filter-group">
          <div className="filter-title">Price</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="71169"
              value={price}
              onChange={handlePriceChange}
            />
            <span className="max-value">${price}</span>
          </div>
        </div>

        <div className="filter-group">
          <div className="filter-title">Manufacturer</div>
          {Object.keys(manufacturer).map((key) => (
            <div key={key}>
              <input
                type="checkbox"
                id={`manufacturer-${key}`}
                checked={manufacturer[key]}
                onChange={() => handleManufacturerChange(key)}
              />
              <label htmlFor={`manufacturer-${key}`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="filter-group">
          <div className="filter-title">SERIES</div>
          <input
            type="checkbox"
            id="cpu-all"
            checked={cpuOptions.all}
            onChange={handleAllCpuChange}
          />
          <label htmlFor="cpu-all">All</label>

          {cpuOptions.options.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={`cpu-${option.id}`}
                checked={option.checked}
                onChange={() => handleCpuChange(option.id)}
              />
              <label htmlFor={`cpu-${option.id}`}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const CPU = ({ cpu }) => {
  const [cpuData, setCpuData] = useState(cpu);
  const [selectedCpus, setSelectedCpus] = useState([]);
  const [manufacturerFilter, setManufacturerFilter] = useState('all');

  // Function to handle "Add" button click (you can modify the functionality as needed)
  const handleAddClick = (cpu) => {
    console.log('Added CPU:', cpu);
    // Add your logic to handle the add action here
  };

  // Function to filter CPUs based on the selected filters
  const handleFilterChange = (newFilters) => {
    let filteredData = cpu;

    // Apply price filter
    if (newFilters.price) {
      filteredData = filteredData.filter(
        (cpu) => cpu.current_price <= newFilters.price
      );
    }

    // Apply manufacturer filter
    if (newFilters.manufacturer && newFilters.manufacturer !== 'all') {
      filteredData = filteredData.filter((cpu) =>
        newFilters.manufacturer === 'amd'
          ? cpu.specification.series.includes('AMD')
          : cpu.specification.series.includes('Intel')
      );
    }

    setCpuData(filteredData);
  };

  const handleCpuSelect = (cpus) => {
    setSelectedCpus(cpus);
  };

  // Filter CPU data based on selected CPUs
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
        cpu={cpu}
      />
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h1>Choose a CPU</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search CPUs" />
        </div>
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
                <td>
                  {cpu.specification.series} {cpu.specification.core_family}{' '}
                  {cpu.specification.performance_core_clock} GHz
                </td>
                <td>{cpu.specification.core_count}</td>
                <td>{cpu.specification.performance_core_clock} GHz</td>
                <td>{cpu.specification.efficiency_core_boost_clock} GHz</td>
                <td>{cpu.specification.micro_architecture}</td>
                <td>{cpu.specification.tdp}W</td>
                <td>{cpu.specification.integrated_graphics}</td>
                <td>${(cpu.current_price / 100).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleAddClick(cpu)}
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

export default CPU;
