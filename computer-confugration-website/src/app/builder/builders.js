import React from 'react';
import './builders.css';

const Builder = () => {
    const parts = [
        "CPU",
        "Motherboard",
        "Memory",
        "SSD",
        "HDD",
        "VGA",
        "Power Supply",
        "Case",
        "Monitor",
        "Cooler", 
        "Expansion Cards/Networking"
    ];
    const peripherals = ["Keyboard", "Mouse", "Headphones", "Speakers", "Webcam"];
    const builds = ["Build 1", "Build 2", "Build 3", "Build 4"];

    return (
        <div id="builder-container">
            <header id="header">
                <h1>Choose Your Parts</h1>
            </header>
            <div id="tab-container">
                {builds.map((build, index) => (
                    <button key={index} className="tab-button">{build}</button>
                ))}
            </div>
            <table id="parts-table">
                <tbody>
                {parts.map((part) => (
                    <tr key={part}>
                        <td>{part}</td>
                        <td>
                            <button className="select-button">{`+ choose a ${part}`}</button>
                        </td>
                    </tr>
                ))}
                <tr key="peripherals">
                    <td>Peripherals</td>
                    <td id="peripherals-row">
                        {peripherals.map((item) => (
                            <span key={item} className="peripheral-item">{item}</span>
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
