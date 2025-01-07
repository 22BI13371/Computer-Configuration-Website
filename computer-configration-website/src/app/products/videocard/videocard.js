'use client';
import './vga.css';
import React, { useState } from 'react';
import { saveToLocalStorage } from '@/app/lib/builderData';
import Link from 'next/link';

const Videocard = ({ videoCard }) => {
  const [videoCardData, setvideoCardData] = useState(videoCard);
  const [selectedvideoCards, setSelectedvideoCards] = useState([]);

  const handlevideoCardSelect = (videoCard) => {
    setSelectedvideoCards(videoCard);
  };

  const filteredvideoCardData = videoCardData.filter(
    (videoCard) =>
      selectedvideoCards.length === 0 ||
      selectedvideoCards.some((selected) => selected.id === videoCard.id)
  );

  console.log('log', filteredvideoCardData[0].id);
  // console.log("log", videoCard[);

  return (
    <div className="cpu-container">
      <h1>Choose a videoCard</h1>
      <table className="cpu-table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Chipset</th>
            <th>Memory</th>
            <th>Core Clock</th>
            <th>Boost Clock</th>
            <th>Color</th>
            <th>Length</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredvideoCardData.map((videoCard) => (
            <tr key={videoCard.id}>
              <td>{videoCard.manufacturer}</td>
              <td>{videoCard.specification.chipset}</td>
              <td>{videoCard.specification.memory} GB</td>
              <td>{videoCard.specification.core_clock} MHz</td>
              <td>{videoCard.specification.boost_clock} MHz</td>
              <td>{videoCard.specification.color}</td>
              <td>{videoCard.specification.length} mm</td>
              <td>${(videoCard.current_price / 100).toFixed(2)}</td>
              <td>
                <Link href={'/builder'}>
                  <button
                    onClick={() => {
                      saveToLocalStorage(
                        videoCard.id,
                        videoCard.category,
                        videoCard.current_price,
                        videoCard.name,
                        videoCard.specification
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

export default Videocard;
