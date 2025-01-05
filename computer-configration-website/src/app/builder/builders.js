'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  getAllFromLocalStorage,
  rmvAllStorageItem,
  rmvStorageItem,
} from '../lib/builderData';
import { fetchPcPartsWithInClause } from '../lib/data';
import { useState, useEffect } from 'react';
import './builders.css';
import { useRouter } from 'next/navigation';

const Builder = () => {
  const parts = [
    { name: 'CPU', path: '/products/cpu' },
    { name: 'Motherboard', path: '/products/motherboard' },
    { name: 'Memory', path: '/products/memory' },
    { name: 'Storage', path: '/products/storage' },
    { name: 'Video Card', path: '/products/videocard' },
    { name: 'Power Supply', path: '/products/power-supply' },
    { name: 'Case', path: '/products/case' },
    { name: 'Monitor', path: '/products/monitor' },
    { name: 'Cooler', path: '/products/cooler' },
  ];

  const [partsInfo, setPartsInfo] = useState([]);

  useEffect(() => {
    setPartsInfo(getAllFromLocalStorage());
  }, []);

  const router = useRouter();
  const peripherals = ['Keyboard', 'Mouse', 'Headphones', 'Speakers', 'Webcam'];
  const builds = ['Build 1', 'Build 2', 'Build 3'];

  return (
    <div id="builder-container">
      <header id="header">
        <h1>Choose Your Parts</h1>
      </header>
      <div id="tab-container">
        {builds.map((build, index) => (
          <button
            key={index}
            className="tab-button"
            onClick={() => {
              rmvAllStorageItem();
              window.location.reload();
            }}
          >
            {build}
          </button>
        ))}
      </div>
      <table id="parts-table">
        <tbody>
          {parts.map((part) => {
            {
              let currentPart = partsInfo.find(
                (currPart) => currPart.category == part.name
              );

              return currentPart ? (
                <tr key={part.name}>
                  <td>{part.name}</td>
                  <td>{currentPart?.name}</td>
                  <td>{currentPart?.price / 100}</td>
                  <td>
                    <Link href={'/builder'}>
                      <button
                        className="select-button"
                        onClick={() => {
                          rmvStorageItem(currentPart.category);
                          window.location.reload();
                        }}
                      >
                        Remove
                      </button>
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr key={part.name}>
                  <td>{part.name}</td>
                  <td>
                    <Link href={part.path}>
                      <button className="select-button">{`+ choose a ${part.name}`}</button>
                    </Link>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              );
            }
          })}
          <tr key="peripherals">
            <td>Peripherals</td>
            <td id="peripherals-row">
              {peripherals.map((item) => (
                <span key={item} className="peripheral-item">
                  {item}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div id="action-buttons">
        <button id="save-button">Save</button>
        <button id="share-button">Share</button>
        <button id="print-button">Print</button>
      </div>
    </div>
  );
};

export default Builder;
