'use client';
import './memory.css';
import React, { useState } from 'react';
import { saveToLocalStorage } from '@/app/lib/builderData';
import Link from 'next/link';

const Memory = ({ memory }) => {
  const [memoryData, setmemoryData] = useState(memory);
  const [selectedmemorys, setSelectedmemorys] = useState([]);
  const handlememorySelect = (memory) => {
    setSelectedmemorys(memory);
  };
  const filteredmemoryData = memoryData.filter(
    (memory) =>
      selectedmemorys.length === 0 ||
      selectedmemorys.some((selected) => selected.id === memory.id)
  );

  console.log('log', filteredmemoryData[0].id);
  return (
    <div className="cpu-container">
      <h1>Choose a Memory</h1>
      <table className="cpu-table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Speed</th>
            <th>Modules</th>
            <th>Price/GB</th>
            <th>Color</th>
            <th>First word latency</th>
            <th>CAS Katency</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredmemoryData.map((memory) => (
            <tr key={memory.id}>
              <td>{memory.manufacturer}</td>
              <td>{memory.specification.speed} </td>
              <td>{memory.specification.modules} </td>
              <td>{memory.specification.price_gb} $</td>
              <td>{memory.specification.color} </td>
              <td>{memory.specification.first_word_latency} ns </td>
              <td>{memory.specification.cas_latency} </td>
              <td>{(memory.current_price / 100).toFixed(2)} $</td>
              <td>
                <Link href={'/builder'}>
                  <button
                    onClick={() => {
                      saveToLocalStorage(
                        memory.id,
                        memory.category,
                        memory.current_price,
                        memory.name,
                        memory.specification,
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
export default Memory;
