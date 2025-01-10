'use client';
import './power-supply.css';
import React, { useState } from 'react';
import { saveToLocalStorage } from '@/app/lib/builderData';
import Link from 'next/link';

const Powersupply = ({ powerSupply }) => {
  const [powerSupplyData, setPowerSupplyData] = useState(powerSupply);
  const [selectedPowerSupplys, setSelectedPowerSupplys] = useState([]);

  const handlePowerSupplySelect = (powerSupply) => {
    setSelectedPowerSupplys(powerSupply);
  };

  const filteredPowerSupplyData = powerSupplyData.filter(
    (item) =>
      selectedPowerSupplys.length === 0 ||
      selectedPowerSupplys.some((selected) => selected.id === item.id)
  );

  console.log('log', filteredPowerSupplyData[0]?.id);

  return (
    <div className="cpu-container">
      <h1>Choose a Power Supply</h1>
      <table className="cpu-table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Type</th>
            <th>Efficiency Rating</th>
            <th>Wattage</th>
            <th>Modular</th>
            <th>Color</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPowerSupplyData.map((item) => (
            <tr key={item.id}>
              <td>{item.manufacturer}</td>
              <td>{item.specification.type}</td>
              <td>{item.specification.efficiency_rating}</td>
              <td>{item.specification.wattage} W</td>
              <td>{item.specification.modular}</td>
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
                        item.name,
                        item.specification
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
  );
};

export default Powersupply;
