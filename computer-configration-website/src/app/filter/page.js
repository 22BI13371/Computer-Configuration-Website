"use client";

import React, { useState } from "react";

const Sidebar = () => {
  // State for price range
  const [price, setPrice] = useState(71169);

  // State for Published dropdown
  const [published, setPublished] = useState("all");

  // State for Featured Build checkboxes
  const [featured, setFeatured] = useState({
    all: true,
    yes: false,
    no: false,
  });

  // State for CPU checkboxes
  const [cpuOptions, setCpuOptions] = useState({
    all: true,
    options: [
      { id: "5600X", label: "AMD Ryzen 5 5600X", checked: false },
      { id: "7600", label: "AMD Ryzen 5 7600", checked: false },
      { id: "7600X", label: "AMD Ryzen 5 7600X", checked: false },
      { id: "7700X", label: "AMD Ryzen 7 7700X", checked: false },
      { id: "7800X3D", label: "AMD Ryzen 7 7800X3D", checked: false },
    ],
  });

  // State to track expanded view for the CPU filter
  const [showMoreCpu, setShowMoreCpu] = useState(false);

  // Price slider handler
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Published dropdown handler
  const handlePublishedChange = (e) => setPublished(e.target.value);

  // Featured Build checkbox handler
  const handleFeaturedChange = (key) => {
    setFeatured({
      all: key === "all",
      yes: key === "yes",
      no: key === "no",
    });
  };

  // CPU checkbox handler
  const handleCpuChange = (id) => {
    setCpuOptions((prev) => ({
      ...prev,
      all: false,
      options: prev.options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      ),
    }));
  };

  // Toggle Show More for CPU options
  const toggleShowMoreCpu = () => setShowMoreCpu((prev) => !prev);

  return (
    <>
      {/* Inline CSS */}
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


          .filter-section {
            width: 300px; /* Set sidebar width */
            padding: 15px;
            background: #f8f9fa; /* Light background color */
            border: 1px solid #ddd; /* Border for separation */
          }

          .filter-title {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .filter-group {
            margin-bottom: 20px;
          }

          .filter-group label {
            margin-right: 10px;
          }

          .show-more {
            cursor: pointer;
            color: #007bff;
            text-decoration: underline;
            font-size: 0.9em;
            margin-top: 5px;
          }

          .filter-header {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }
        `}
      </style>

      <div className="filter-section">
        {/* Filter Header */}
        <div className="filter-header">Filters</div>

        {/* Price Filter */}
        <div className="filter-group">
          <div className="filter-title">Price</div>
          <div className="slider-container" style={{ position: "relative" }}>
            <input
              type="range"
              className="form-range"
              min="0"
              max="71169"
              value={price}
              onChange={handlePriceChange}
              style={{ width: "100%" }}
            />
            <span
              className="max-value"
              style={{
                position: "absolute",
                right: "0", // Position the max value at the rightmost side of the container
                top: "-25px", // Adjust the vertical positioning as needed
                fontWeight: "bold",
                fontSize: "14px",
                color: "#333",
              }}
            >
              ${price}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span>$0</span>
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
              ${price}
            </span>
          </div>
        </div>

        {/* Published Filter */}
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

        {/* Featured Build Filter */}
        <div className="filter-group">
          <div className="filter-title">Featured Build</div>
          {["all", "yes", "no"].map((key) => (
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

        {/* CPU Filter */}
        <div className="filter-group">
          <div className="filter-title">CPU</div>
          <div>
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
          </div>
          {cpuOptions.options
            .slice(0, showMoreCpu ? cpuOptions.options.length : 3)
            .map((option) => (
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
          <div className="show-more" onClick={toggleShowMoreCpu}>
            {showMoreCpu ? "Show less" : "Show more"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
