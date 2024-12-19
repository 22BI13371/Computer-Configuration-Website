'use client';

import React, { useState, useEffect } from 'react';
import { fetchPcPartWithFilter } from '../lib/data'; // Ensure this import path is correct

export default function Page() {
  const [manufacturers, setManufacturers] = useState(['Intel', 'AMD']);
  const [series, setSeries] = useState('Intel Core i9');
  const [priceRange, setPriceRange] = useState({ min: 42000, max: 45000 });
  const [filteredCpus, setFilteredCpus] = useState([]);
  const [error, setError] = useState(null);

  // Fetch CPU data when filters change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cpus = await fetchPcPartWithFilter(
          'CPU',
          {
            current_price: priceRange,
            manufacturer: manufacturers,
          },
          { series }
        );
        setFilteredCpus(cpus);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Failed to fetch data');
        setFilteredCpus([]);
      }
    };
    fetchData();
  }, [manufacturers, series, priceRange]); // Run effect whenever filters change

  // Handle manufacturer checkbox changes
  const handleCheckboxChange = (manufacturer) => {
    setManufacturers((prev) => {
      if (manufacturer === 'All') {
        return prev.includes('All') ? [] : ['All', 'Intel', 'AMD'];
      }
      const updated = prev.includes(manufacturer)
        ? prev.filter((item) => item !== manufacturer)
        : [...prev.filter((item) => item !== 'All'), manufacturer];
      return updated;
    });
  };

  // Handle submit to apply filters
  const handleSubmit = async () => {
    try {
      const filteredManufacturers =
        manufacturers.includes('All') || manufacturers.length === 0
          ? ['Intel', 'AMD']
          : manufacturers;

      const cpus = await fetchPcPartWithFilter(
        'CPU',
        {
          current_price: priceRange,
          manufacturer: filteredManufacturers,
        },
        { series }
      );

      setFilteredCpus(cpus);
      setError(null);
    } catch (err) {
      console.error("Error applying filters:", err);
      setError(err.message);
      setFilteredCpus([]);
    }
  };

  return (
    <div>
      <h1>Filter CPUs</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={manufacturers.includes('All')}
            onChange={() => handleCheckboxChange('All')}
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            checked={manufacturers.includes('Intel')}
            onChange={() => handleCheckboxChange('Intel')}
          />
          Intel
        </label>
        <label>
          <input
            type="checkbox"
            checked={manufacturers.includes('AMD')}
            onChange={() => handleCheckboxChange('AMD')}
          />
          AMD
        </label>
      </div>

      <div>
        <label>
          Series:
          <input
            type="text"
            value={series}
            onChange={(e) => setSeries(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                min: Number(e.target.value),
              }))
            }
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                max: Number(e.target.value),
              }))
            }
          />
        </label>
      </div>

      <div>
        <button onClick={handleSubmit}>Apply Filters</button>
      </div>

      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : filteredCpus.length === 0 ? (
          <p>No CPUs found for the selected filters.</p>
        ) : (
          filteredCpus.map((cpu) => (
            <div key={cpu.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <p><strong>Name:</strong> {cpu.name}</p>
              <p><strong>Price:</strong> ₹{(cpu.current_price / 100).toFixed(2)}</p>
              <p><strong>Series:</strong> {cpu.series}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
