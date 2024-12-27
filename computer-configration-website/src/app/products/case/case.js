import React from 'react';
import './case.css';

const Case = () => {
    return (
        <div className="cpu-container">
            <h1>Choose a Case</h1>
            <div className="search-bar">
                <input type="text" placeholder="find a case" />
            </div>
            <table className="cpu-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>type</th>
                        <th>Color</th>
                        <th>Power supply</th>
                        <th>side pannel</th>
                        <th>External volume</th>
                        <th>Internal 3.5 Bays</th>
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

export default Case;