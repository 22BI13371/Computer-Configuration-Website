import React from 'react';
import './memory.css';

const Memory = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a Memory</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a memory" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Speed</th>
                        <th>Modules</th>
                        <th>Memory max</th>
                        <th>Memory slots</th>
                        <th>Color</th>
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

export default Memory;