"use client";
import React, { useState, useEffect } from "react";
import "./motherboard.css";

const Sidebar = ({ onFilterChange, onMotherboardSelect }) => {
  const [price, setPrice] = useState(50000); // Example max price
  const [manufacturer, setManufacturer] = useState({
    all: true,
    asus: false,
    gigabyte: false,
    msi: false,
    asrock: false,
  });
  const [socket, setSocket] = useState({
    all: true,
    types: [], // Initialize as an empty array
  });
  const [formFactor, setFormFactor] = useState({
    all: true,
    factors: [], // Initialize as an empty array
  });
  const [memoryMax, setMemoryMax] = useState(128); // Example max memory
  const [color, setColor] = useState({
    all: true,
    colors: [], // Initialize as an empty array
  });

  useEffect(() => {
    // Fetch unique socket types, form factors, and colors from data
    const uniqueSockets = ["LGA1151", "AM4", "LGA1700"]; // Replace with actual data
    const uniqueFormFactors = ["ATX", "Micro-ATX", "Mini-ITX"]; // Replace with actual data
    const uniqueColors = ["Black", "White", "RGB"]; // Replace with actual data

    setSocket((prev) => ({
      ...prev,
      types: uniqueSockets.map((type) => ({
        name: type,
        checked: false,
      })),
    }));

    setFormFactor((prev) => ({
      ...prev,
      factors: uniqueFormFactors.map((factor) => ({
        name: factor,
        checked: false,
      })),
    }));

    setColor((prev) => ({
      ...prev,
      colors: uniqueColors.map((color) => ({
        name: color,
        checked: false,
      })),
    }));
  }, []);

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
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
      updatedManufacturer.all = Object.values(updatedManufacturer).every(
        (val, idx) => idx === 0 || !val
      );
    }

    setManufacturer(updatedManufacturer);

    const selectedManufacturers = Object.keys(updatedManufacturer)
      .filter((key) => updatedManufacturer[key] && key !== "all")
      .map((key) => key);

    onFilterChange({ manufacturer: selectedManufacturers });
  };

  const handleCheckboxGroupChange = (group, setGroup, key) => {
    const updatedGroup = { ...group };

    if (key === "all") {
      updatedGroup.all = true;
      updatedGroup.types = updatedGroup.types?.map((item) => ({
        ...item,
        checked: false,
      })) || [];
    } else {
      updatedGroup.types = updatedGroup.types?.map((item) =>
        item.name === key ? { ...item, checked: !item.checked } : item
      ) || [];
      updatedGroup.all = updatedGroup.types.every((item) => !item.checked);
    }

    setGroup(updatedGroup);

    const selectedItems = updatedGroup.types
      ? updatedGroup.types.filter((item) => item.checked).map((item) => item.name)
      : [];

    onFilterChange({ [group === socket ? "socket" : "formFactor"]: selectedItems });
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
        <div className="filter-header">Filters</div>

        {/* Price Filter */}
        <div className="filter-group">
          <div className="filter-title">Price</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="50000"
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
          {Object.keys(manufacturer).map(
            (key) =>
              key !== "all" && (
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
              )
          )}
        </div>

        {/* Socket Filter */}
        <div className="filter-group">
          <div className="filter-title">Socket</div>
          <input
            type="checkbox"
            id="socket-all"
            checked={socket.all}
            onChange={() => handleCheckboxGroupChange(socket, setSocket, "all")}
          />
          <label htmlFor="socket-all">All</label>
          {socket.types.map((type) => (
            <div key={type.name}>
              <input
                type="checkbox"
                id={`socket-${type.name}`}
                checked={type.checked}
                onChange={() =>
                  handleCheckboxGroupChange(socket, setSocket, type.name)
                }
              />
              <label htmlFor={`socket-${type.name}`}>{type.name}</label>
            </div>
          ))}
        </div>

        {/* Form Factor Filter */}
        <div className="filter-group">
          <div className="filter-title">Form Factor</div>
          <input
            type="checkbox"
            id="form-factor-all"
            checked={formFactor.all}
            onChange={() =>
              handleCheckboxGroupChange(formFactor, setFormFactor, "all")
            }
          />
          <label htmlFor="form-factor-all">All</label>
          {formFactor.factors.map((factor) => (
            <div key={factor.name}>
              <input
                type="checkbox"
                id={`form-factor-${factor.name}`}
                checked={factor.checked}
                onChange={() =>
                  handleCheckboxGroupChange(formFactor, setFormFactor, factor.name)
                }
              />
              <label htmlFor={`form-factor-${factor.name}`}>{factor.name}</label>
            </div>
          ))}
        </div>

        {/* Memory Max Filter */}
        <div className="filter-group">
          <div className="filter-title">Memory Max</div>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              min="0"
              max="128"
              value={memoryMax}
              onChange={(e) => {
                const newMemoryMax = e.target.value;
                setMemoryMax(newMemoryMax);
                onFilterChange({ memoryMax: newMemoryMax });
              }}
            />
            <span className="max-value">{memoryMax} GB</span>
          </div>
        </div>

        {/* Color Filter */}
        <div className="filter-group">
          <div className="filter-title">Color</div>
          <input
            type="checkbox"
            id="color-all"
            checked={color.all}
            onChange={() => handleCheckboxGroupChange(color, setColor, "all")}
          />
          <label htmlFor="color-all">All</label>
          {color.colors.map((col) => (
            <div key={col.name}>
              <input
                type="checkbox"
                id={`color-${col.name}`}
                checked={col.checked}
                onChange={() =>
                  handleCheckboxGroupChange(color, setColor, col.name)
                }
              />
              <label htmlFor={`color-${col.name}`}>{col.name}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
