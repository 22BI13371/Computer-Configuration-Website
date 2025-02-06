"use client";
import React, { useState, useEffect } from "react";
import { motherboard } from "../../lib/placeholder_data"; // Import motherboard data
import "./motherboard.css";

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
  
  useEffect(() => {
    if (!motherboard || !Array.isArray(motherboard)) return;
    
    const uniqueChipsets = [...new Set(motherboard.map((item) => item.chipset))];
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
    if (key === "all") {
      updatedManufacturer.all = true;
      Object.keys(updatedManufacturer).forEach((k) => {
        if (k !== "all") updatedManufacturer[k] = false;
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
        (key) => updatedManufacturer[key] && key !== "all"
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
        <div className="filter-header">Filters</div>
        {/* Price Filter */}
        <div className="filter-group">
          <div className="filter-title">Price</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="1000"
              value={price}
              onChange={handlePriceChange}
            />
            <span className="max-value">${price}</span>
          </div>
        </div>
        {/* Manufacturer Filter */}
        <div className="filter-group">
          <div className="filter-title">Manufacturer</div>
          <input
            type="checkbox"
            id="manufacturer-all"
            checked={manufacturer.all}
            onChange={() => handleManufacturerChange("all")}
          />
          <label htmlFor="manufacturer-all">All</label>
          {Object.keys(manufacturer)
            .filter((key) => key !== "all")
            .map((key) => (
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
        {/* Chipset Filter */}
        <div className="filter-group">
          <div className="filter-title">Chipset</div>
          <input
            type="checkbox"
            id="chipset-all"
            checked={chipset.all}
            onChange={() => handleChipsetChange("all")}
          />
          <label htmlFor="chipset-all">All</label>
          {chipset.chipsets.map((chip) => (
            <div key={chip.name}>
              <input
                type="checkbox"
                id={`chipset-${chip.name}`}
                checked={chip.checked}
                onChange={() => handleChipsetChange(chip.name)}
              />
              <label htmlFor={`chipset-${chip.name}`}>{chip.name}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
