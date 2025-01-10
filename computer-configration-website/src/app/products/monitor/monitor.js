'use client';
import './monitor.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { saveToLocalStorage } from '@/app/lib/builderData';

const Monitor = ({ monitor }) => {
  const [monitorData, setmonitorData] = useState(monitor);
  const [selectedmonitors, setSelectedmonitors] = useState([]);
  const handlemonitorSelect = (monitor) => {
    setSelectedmonitors(monitor);
  };
  const filteredmonitorData = monitorData.filter(
    (monitor) =>
      selectedmonitors.length === 0 ||
      selectedmonitors.some((selected) => selected.id === monitor.id)
  );

  return (
    <div className="cpu-container">
      <h1>Choose a Monitor</h1>

      <table className="cpu-table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Screen size</th>
            <th>Resolutions</th>
            <th>Refresh rate</th>
            <th>Response time(G2G)</th>
            <th>Panel type</th>
            <th>Ratio</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredmonitorData.map((monitor) => (
            <tr key={monitor.id}>
              <td>{monitor.manufacturer}</td>
              <td>{monitor.specification.screen_size} '</td>
              <td>{monitor.specification.resolution} </td>
              <td>{monitor.specification.refrest_rate} Hz </td>
              <td>{monitor.specification.response_time} ms </td>
              <td>{monitor.specification.panel_type} </td>
              <td>{monitor.specification.aspect_ratio} </td>
              <td>{(monitor.current_price / 100).toFixed(2)} $</td>
              <td>
                <Link href={'/builder'}>
                  <button
                    onClick={() => {
                      saveToLocalStorage(
                        monitor.id,
                        monitor.category,
                        monitor.current_price,
                        monitor.name,
                        monitor.specification
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
export default Monitor;
