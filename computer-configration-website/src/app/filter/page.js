"use client"
import React, { useState } from "react";
import { cpu } from "../lib/placeholder_data"; // Ensure the path is correct

const Sidebar = ({ onFilterChange, onCpuSelect }) => {
  const [price, setPrice] = useState(71169);
  const [published, setPublished] = useState("all");
  const [featured, setFeatured] = useState({
    all: true,
    yes: false,
    no: false,
  });
  const [cpuOptions, setCpuOptions] = useState({
    all: true,
    options: cpu.map((cpuItem) => ({
      id: cpuItem.id,
      label: cpuItem.series + " " + cpuItem.micro_architecture,
      checked: false,
      details: cpuItem, // Store the full CPU data to show later
    })),
  });

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
  };

  const handlePublishedChange = (e) => {
    const newPublished = e.target.value;
    setPublished(newPublished);
    onFilterChange({ published: newPublished });
  };

  const handleFeaturedChange = (key) => {
    const newFeatured = {
      all: key === "all",
      yes: key === "yes",
      no: key === "no",
    };
    setFeatured(newFeatured);
    onFilterChange({ featured: key });
  };

  const handleCpuChange = (id) => {
    const newCpuOptions = {
      ...cpuOptions,
      all: false,
      options: cpuOptions.options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      ),
    };
    setCpuOptions(newCpuOptions);

    const selectedCpus = newCpuOptions.options.filter((option) => option.checked).map((option) => option.details);
    onCpuSelect(selectedCpus);
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
          <div className="filter-title">Published</div>
          <select
            className="form-select"
            value={published}
            onChange={handlePublishedChange}
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="filter-group">
          <div className="filter-title">Featured Build</div>
          {Object.keys(featured).map((key) => (
            <div key={key}>
              <input
                type="checkbox"
                id={`featured-${key}`}
                checked={featured[key]}
                onChange={() => handleFeaturedChange(key)}
              />
              <label htmlFor={`featured-${key}`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="filter-group">
          <div className="filter-title">CPU</div>
          <input
            type="checkbox"
            id="cpu-all"
            checked={cpuOptions.all}
            onChange={() =>
              setCpuOptions({
                all: true,
                options: cpuOptions.options.map((option) => ({
                  ...option,
                  checked: false,
                })),
              })
            }
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

const Page = () => {
  const [filters, setFilters] = useState({});
  const [selectedCpus, setSelectedCpus] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleCpuSelect = (cpus) => {
    setSelectedCpus(cpus);
  };

  const renderCpuDetails = (cpus) => {
    if (!cpus.length) return null;

    return cpus.map((cpu) => {
      const cpuInfo = `
        Series: ${cpu.series} ${cpu.micro_architecture} 
        | Core Count: ${cpu.core_count} 
        | Thread Count: ${cpu.thread_count} 
        | Base Clock Speed: ${cpu.performance_core_clock} GHz 
        | Boost Clock Speed: ${cpu.efficiency_core_boost_clock} GHz 
        | L2 Cache: ${cpu.l2_cache} MB 
        | L3 Cache: ${cpu.l3_cache} MB 
        | TDP: ${cpu.tdp} W 
        | Socket: ${cpu.socket}
      `;

      return (
        <div key={cpu.id}>
          <input type="checkbox" checked readOnly />
          <label>{cpuInfo}</label>
        </div>
      );
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onFilterChange={handleFilterChange} onCpuSelect={handleCpuSelect} />
      <div style={{ marginLeft: "20px", flex: 1 }}>
        {renderCpuDetails(selectedCpus)}
      </div>
    </div>
  );
};

export default Page;
