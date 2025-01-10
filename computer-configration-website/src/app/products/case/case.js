'use client';
import './case.css';
import React, { useState } from 'react';
import { saveToLocalStorage } from '@/app/lib/builderData';
import Link from 'next/link';

const Case = ({ pcCase }) => {
  const [pcCaseData, setpcCaseData] = useState(pcCase);
  const [selectedpcCases, setSelectedpcCases] = useState([]);
  const handlepcCaseSelect = (pcCase) => {
    setSelectedpcCases(pcCase);
  };
  const filteredpcCaseData = pcCaseData.filter(
    (pcCase) =>
      selectedpcCases.length === 0 ||
      selectedpcCases.some((selected) => selected.id === pcCase.id)
  );
  return (
    <div className="cpu-container">
      <h1>Choose a Case</h1>
      <table className="cpu-table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>type</th>
            <th>Color</th>
            <th>Power supply</th>
            <th>side pannel</th>
            <th>External volume</th>
            <th>Drive Bays</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredpcCaseData.map((pcCase) => (
            <tr key={pcCase.id}>
              <td>{pcCase.manufacturer}</td>
              <td>{pcCase.specification.type} </td>
              <td>{pcCase.specification.color} </td>
              <td>{pcCase.specification.power_supply} </td>
              <td>{pcCase.specification.side_panel} </td>
              <td>{pcCase.specification.volume} </td>
              <td>{pcCase.specification.drive_bays} </td>
              <td>{(pcCase.current_price / 100).toFixed(2)} $</td>
              <td>
                <Link href={'/builder'}>
                  <button
                    onClick={() => {
                      saveToLocalStorage(
                        pcCase.id,
                        pcCase.category,
                        pcCase.current_price,
                        pcCase.name,
                        pcCase.specification,
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

export default Case;
