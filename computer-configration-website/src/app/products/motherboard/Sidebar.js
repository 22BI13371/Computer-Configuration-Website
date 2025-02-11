'use client';
import React, { useState, useEffect } from 'react';
import { motherboard } from '../../lib/placeholder_data'; // Import motherboard data
import './motherboard.css';

const Sidebar = ({ onFilterChange, onMotherboardSelect }) => {
  const [price, setPrice] = useState(500);
  const [manufacturer, setManufacturer] = useState({
    all: true,
    asus: false,
    gigabyte: false,
    msi: false,
    asrock: false,
  });
  const [chipset, setChipset] = useState({
    all: true,
    chipsets: [],
  });
  const [formFactor, setFormFactor] = useState({
    all: true,
    families: ['atx', 'microatx'], // Add more form factors if needed
  });

  useEffect(() => {
    if (!motherboard || !Array.isArray(motherboard)) return;

    const uniqueChipsets = [
      ...new Set(motherboard.map((item) => item.chipset)),
    ];
    setChipset((prev) => ({
      ...prev,
      chipsets: uniqueChipsets.map((chip) => ({ name: chip, checked: false })),
    }));
  }, []);

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    onFilterChange((prevFilters) => ({ ...prevFilters, price: newPrice }));
  };

  const handleManufacturerChange = (key) => {
    const updatedManufacturer = { ...manufacturer };
    if (key === 'all') {
      updatedManufacturer.all = true;
      Object.keys(updatedManufacturer).forEach((k) => {
        if (k !== 'all') updatedManufacturer[k] = false;
      });
    } else {
      updatedManufacturer[key] = !updatedManufacturer[key];
      updatedManufacturer.all = !Object.values(updatedManufacturer).some(
        (val, index) => index !== 0 && val
      );
    }
    setManufacturer(updatedManufacturer);
    onFilterChange({
      manufacturer: Object.keys(updatedManufacturer).filter(
        (key) => updatedManufacturer[key] && key !== 'all'
      ),
    });
  };

  const handleChipsetChange = (name) => {
    const updatedChipset = { ...chipset };
    updatedChipset.chipsets = updatedChipset.chipsets.map((chip) =>
      chip.name === name ? { ...chip, checked: !chip.checked } : chip
    );
    updatedChipset.all = updatedChipset.chipsets.every((chip) => !chip.checked);
    setChipset(updatedChipset);
    onFilterChange({
      chipset: updatedChipset.chipsets
        .filter((chip) => chip.checked)
        .map((chip) => chip.name),
    });
  };

  const handleFormFactorChange = (key) => {
    const updatedFormFactor = { ...formFactor };

    if (key === 'all') {
      updatedFormFactor.all = true;
      updatedFormFactor.families.forEach((family) => {
        updatedFormFactor[family] = false;
      });
    } else {
      updatedFormFactor[key] = !updatedFormFactor[key];
      updatedFormFactor.all = !Object.values(updatedFormFactor)
        .slice(1) // Skip the 'all' key
        .some((value) => value); // Check if at least one family is selected
    }

    setFormFactor(updatedFormFactor);

    const selectedFormFactors = updatedFormFactor.families.filter(
      (family) => updatedFormFactor[family]
    );

    onFilterChange({ form_factor: selectedFormFactors });
  };

  return (
    <>
      <style>
        {`
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
          .filter-group {
            margin-bottom: 10px;
          }
          .filter-title {
            font-weight: bold;
            margin-bottom: 5px;
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
              min="0"
              max="1000"
              value={price}
              onChange={handlePriceChange}
            />
            <span>${price}</span>
          </div>
        </div>
        {/* Manufacturer Filter */}
        <div className="filter-group">
          <div className="filter-title">Manufacturer</div>
          {Object.keys(manufacturer).map((key) => (
            <div key={key}>
              <input
                type="checkbox"
                checked={manufacturer[key]}
                onChange={() => handleManufacturerChange(key)}
              />
              <label>{key.toUpperCase()}</label>
            </div>
          ))}
        </div>
        {/* Form Factor Filter */}
        <div className="filter-group">
          <div className="filter-title">Form Factor</div>
          <input
            type="checkbox"
            id="form_factor-all"
            checked={formFactor.all}
            onChange={() => handleFormFactorChange('all')}
          />
          <label htmlFor="form_factor-all">All</label>
          {formFactor.families.map((key) => (
            <div key={key}>
              <input
                type="checkbox"
                id={`form_factor-${key}`}
                checked={formFactor[key]}
                onChange={() => handleFormFactorChange(key)}
              />
              <label htmlFor={`form_factor-${key}`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
