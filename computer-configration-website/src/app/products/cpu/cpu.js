"use client";
import React, { useState } from "react";
import { cpu } from "../../lib/placeholder_data"; // Importing the data from placeholder_data.js
import Sidebar from "./Sidebar"; // Import Sidebar component
import "./cpu.css";

const CPU = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a CPU</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a cpu" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Core Count</th>
                        <th>Performance Core Clock</th>
                        <th>Performance Core Boost Clock</th>
                        <th>Microarchitecture</th>
                        <th>TIP</th>
                        <th>Integrated Graphics</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data rows will be added here */}
                </tbody>
            </table>
        </div>
    );
};

export default CPU;