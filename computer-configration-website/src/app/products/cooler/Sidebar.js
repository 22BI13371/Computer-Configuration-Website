'use client';
import React, { useState, useEffect } from "react";
import "./cooler.css";

const Sidebar = ({ onFilterChange, coolerData = [] }) => {
  const [price, setPrice] = useState(20000);
  const [height, setHeight] = useState(0);
  const [manufacturer, setManufacturer] = useState({
    all: true,
    ek: false,
    coolerMaster: false,
    noctua: false,
  });
  const [maxFanRpm, setMaxFanRpm] = useState(700);
  const [selectedSockets, setSelectedSockets] = useState([]);

  const manufacturerMapping = {
    ek: "EK",
    coolerMaster: "Cooler Master",
    noctua: "Noctua",
  };

  const socketOptions = [
    "AM2", "AM2+", "AM3", "AM3+", "AM4", "AM5", "FM1", "FM2", "FM2+",
    "LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1366", "LGA1700",
    "LGA1851", "LGA2011", "LGA2011-3", "LGA2066"
  ];

  useEffect(() => {
    if (coolerData.length > 0) {
      const maxMinFanRpm = Math.max(
        ...coolerData
          .filter((cooler) => cooler.fan_rpm.includes(" - "))
          .map((cooler) => parseInt(cooler.fan_rpm.split(" - ")[0]))
      );
      setMaxFanRpm(maxMinFanRpm);
    }
  }, [coolerData]);

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice });
  };

  const handleFanRpmChange = (e) => {
    const newFanRpm = e.target.value;
    setMaxFanRpm(newFanRpm);
    onFilterChange({ fanRpm: newFanRpm });
  };

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
    onFilterChange({ height: newHeight });
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
      updatedManufacturer.all = Object.keys(updatedManufacturer)
        .filter((k) => k !== "all")
        .every((k) => !updatedManufacturer[k]);
    }

    setManufacturer(updatedManufacturer);

    const selectedManufacturers = Object.keys(updatedManufacturer)
      .filter((key) => updatedManufacturer[key] && key !== "all")
      .map((key) => manufacturerMapping[key]);

    onFilterChange({ manufacturer: selectedManufacturers });
  };

  const handleSocketChange = (e) => {
    const socket = e.target.value;
    setSelectedSockets((prevSockets) => {
      if (socket === "all") {
        return prevSockets.length === socketOptions.length ? [] : [...socketOptions];
      } else {
        return prevSockets.includes(socket)
          ? prevSockets.filter((s) => s !== socket)
          : [...prevSockets, socket];
      }
    });
  };

  useEffect(() => {
    onFilterChange({ sockets: selectedSockets });
  }, [selectedSockets, onFilterChange]);

  const filterBySocket = (cooler) => {
    const supportedSockets = cooler.cpu_socket
      .split(",")
      .map((socket) => socket.trim());

    return selectedSockets.every((socket) => supportedSockets.includes(socket));
  };

  const filteredCoolers = coolerData ? coolerData.filter(filterBySocket) : [];

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
          <input
            type="range"
            className="form-range"
            min="0"
            max="20000"
            value={price}
            onChange={handlePriceChange}
          />
          <span>${price}</span>
        </div>

        {/* Fan RPM Filter */}
        <div className="filter-group">
          <div className="filter-title">Fan RPM</div>
          <input
            type="range"
            className="form-range"
            min="550"
            max={maxFanRpm}
            value={maxFanRpm}
            onChange={handleFanRpmChange}
          />
          <span>{maxFanRpm} RPM</span>
        </div>

        {/* Height Filter */}
        <div className="filter-group">
          <div className="filter-title">Height</div>
          <input
            type="range"
            className="form-range"
            min="0"
            max="200"
            value={height}
            onChange={handleHeightChange}
          />
          <span>{height} mm</span>
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
          <div>
            <input
              type="checkbox"
              id="manufacturer-ek"
              checked={manufacturer.ek}
              onChange={() => handleManufacturerChange('ek')}
            />
            <label htmlFor="manufacturer-ek">EK</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="manufacturer-coolerMaster"
              checked={manufacturer.coolerMaster}
              onChange={() => handleManufacturerChange('coolerMaster')}
            />
            <label htmlFor="manufacturer-coolerMaster">Cooler Master</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="manufacturer-noctua"
              checked={manufacturer.noctua}
              onChange={() => handleManufacturerChange('noctua')}
            />
            <label htmlFor="manufacturer-noctua">Noctua</label>
          </div>
        </div>

        {/* Socket Filter */}
        <div className="filter-group">
          <div className="filter-title">Socket</div>
          <div>
            <input
              type="checkbox"
              id="socket-all"
              checked={selectedSockets.length === socketOptions.length}
              onChange={handleSocketChange}
              value="all"
            />
            <label htmlFor="socket-all">All</label>
          </div>
          {socketOptions.map((socket) => (
            <div key={socket}>
              <input
                type="checkbox"
                id={`socket-${socket}`}
                value={socket}
                checked={selectedSockets.includes(socket)}
                onChange={handleSocketChange}
              />
              <label htmlFor={`socket-${socket}`}>{socket}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
