'use client';
import React, { useState, useEffect } from 'react';
import { cpu } from '../../lib/placeholder_data'; // Importing the data from placeholder_data.js
import './cpu.css';

const Sidebar = ({ onFilterChange, onCpuSelect, data }) => {
  const [price, setPrice] = useState(71169);
  const [thread, setThread] = useState(32);
  const [l2Cache, setL2Cache] = useState(32);
  const [l3Cache, setL3Cache] = useState(64);
  const [manufacturer, setManufacturer] = useState({
    all: true,
    amd: false,
    intel: false,
  });
  const [coreFamily, setCoreFamily] = useState({
    all: true,
    families: [],
  });
  const [cpuOptions, setCpuOptions] = useState({
    all: true,
    options: cpu.map((cpuItem) => ({
      id: cpuItem.id,
      label: cpuItem.series + ' ' + cpuItem.micro_architecture,
      checked: false,
      details: cpuItem,
    })),
  });

  useEffect(() => {
    const uniqueCoreFamilies = [
      ...new Set(cpu.map((item) => item.core_family)),
    ];
    setCoreFamily((prev) => ({
      ...prev,
      families: uniqueCoreFamilies.map((family) => ({
        name: family,
        checked: false,
      })),
    }));
  }, []);

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
  };

  const handleThreadChange = (e) => {
    const newThread = e.target.value;
    setThread(newThread);
    onFilterChange({ thread: newThread });
  };

  const handleL2CacheChange = (e) => {
    const newL2Cache = e.target.value;
    setL2Cache(newL2Cache);
    onFilterChange({ l2Cache: newL2Cache });
  };

  const handleL3CacheChange = (e) => {
    const newL3Cache = e.target.value;
    setL3Cache(newL3Cache);
    onFilterChange({ l3Cache: newL3Cache });
  };

  const handleManufacturerChange = (key) => {
    const updatedManufacturer = { ...manufacturer };

    if (key === 'all') {
      // If "All" is clicked, reset everything
      updatedManufacturer.all = true;
      updatedManufacturer.amd = false;
      updatedManufacturer.intel = false;
    } else {
      // Toggle the clicked manufacturer checkbox
      updatedManufacturer[key] = !updatedManufacturer[key];
      // If both "AMD" and "Intel" are unchecked, "All" should be unchecked
      updatedManufacturer.all =
        !updatedManufacturer.amd && !updatedManufacturer.intel;
    }

    setManufacturer(updatedManufacturer);

    // Get the selected manufacturers
    const selectedManufacturers = Object.keys(updatedManufacturer)
      .filter((key) => updatedManufacturer[key] && key !== 'all')
      .map((key) => key);

    // Pass the selected manufacturers to the filter change handler
    onFilterChange({ manufacturer: selectedManufacturers });
  };

  const handleCoreFamilyChange = (key) => {
    const updatedCoreFamily = { ...coreFamily };

    if (key === 'all') {
      updatedCoreFamily.all = true;
      updatedCoreFamily.families = updatedCoreFamily.families.map((family) => ({
        ...family,
        checked: false,
      }));
    } else {
      updatedCoreFamily.families = updatedCoreFamily.families.map((family) =>
        family.name === key ? { ...family, checked: !family.checked } : family
      );
      updatedCoreFamily.all = updatedCoreFamily.families.every(
        (family) => !family.checked
      );
    }

    setCoreFamily(updatedCoreFamily);

    const selectedFamilies = updatedCoreFamily.families
      .filter((family) => family.checked)
      .map((family) => family.name);

    onFilterChange({ coreFamily: selectedFamilies });
  };

  const handleCpuChange = (id) => {
    const newCpuOptions = {
      ...cpuOptions,
      options: cpuOptions.options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      ),
    };

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
      width: 250px;
      padding: 10px;
      background: #f8f9fa;
      border: 1px solid #ddd;
      color: #000;
      font-size: 0.9em;
    }

    .filter-header {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      margin-bottom: 15px;
    }

    .filter-title {
      font-weight: bold;
      margin-bottom: 8px;
    }

    .filter-group {
      margin-bottom: 15px;
    }

    .slider-container {
      position: relative;
    }

    .max-value {
      position: absolute;
      right: 0;
      top: -25px;
      font-weight: bold;
      font-size: 12px;
      color: #333;
    }
  `}
      </style>

      <div className="filter-section">
        <div className="filter-group">
          <div className="filter-title">Compatibility Checker</div>
          <input
            type="checkbox"
            id="compat-chec"
            onChange={(e) => {
              const checked = e.target.checked;

              if (checked) {
                onFilterChange({ compat: [1] });
              }
              if (!checked) {
                onFilterChange({ compat: [] });
              }
            }}
          />
          <label htmlFor="manufacturer-all">On/Off</label>
        </div>

        <div className="filter-header">Filters</div>

        {/* Price Filter */}
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

        {/* Thread Count Filter */}
        <div className="filter-group">
          <div className="filter-title">THREAD COUNT</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="32"
              value={thread}
              onChange={handleThreadChange}
            />
            <span className="max-value">{thread}</span>
          </div>
        </div>

        {/* L2 Cache Filter */}
        <div className="filter-group">
          <div className="filter-title">L2 CACHE</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="95"
              value={l2Cache}
              onChange={handleL2CacheChange}
            />
            <span className="max-value">{l2Cache} MB</span>
          </div>
        </div>

        {/* L3 Cache Filter */}
        <div className="filter-group">
          <div className="filter-title">L3 CACHE</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="96"
              value={l3Cache}
              onChange={handleL3CacheChange}
            />
            <span className="max-value">{l3Cache} MB</span>
          </div>
        </div>

        {/* Manufacturer Filter */}
        <div className="filter-group">
          <div className="filter-title">Manufacturer</div>
          <input
            type="checkbox"
            id="manufacturer-all"
            checked={manufacturer.all}
            onChange={() => handleManufacturerChange('all')}
          />
          <label htmlFor="manufacturer-all">All</label>

          {['amd', 'intel'].map((key) => (
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

        {/* Core Family Filter */}
        <div className="filter-group">
          <div className="filter-title">Core Family</div>
          <input
            type="checkbox"
            id="core-family-all"
            checked={coreFamily.all}
            onChange={() => handleCoreFamilyChange('all')}
          />
          <label htmlFor="core-family-all">All</label>

          {coreFamily.families.map((family) => (
            <div key={family.name}>
              <input
                type="checkbox"
                id={`core-family-${family.name}`}
                checked={family.checked}
                onChange={() => handleCoreFamilyChange(family.name)}
              />
              <label htmlFor={`core-family-${family.name}`}>
                {family.name}
              </label>
            </div>
          ))}
        </div>

        {/* CPU Series Filter */}
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

export default Sidebar;
