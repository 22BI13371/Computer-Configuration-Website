// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import {
//   getAllFromLocalStorage,
//   rmvAllStorageItem,
//   rmvStorageItem,
//   compatibleParts,
// } from '../lib/builderData';
// import './builders.css';

// const Builder = ({ tmp }) => {
//   const parts = [
//     { name: 'CPU', path: '/products/cpu' },
//     { name: 'Motherboard', path: '/products/motherboard' },
//     { name: 'Memory', path: '/products/memory' },
//     { name: 'Storage', path: '/products/storage' },
//     { name: 'Video Card', path: '/products/videocard' },
//     { name: 'Power Supply', path: '/products/power-supply' },
//     { name: 'Case', path: '/products/case' },
//     { name: 'Monitor', path: '/products/monitor' },
//     { name: 'Cooler', path: '/products/cooler' },
//   ];

//   // Track current active build
//   const [activeBuild, setActiveBuild] = useState(1);
  
//   // Store multiple builds' information
//   const [builds, setBuilds] = useState({
//     1: { parts: [], totalPrice: 0 },
//     2: { parts: [], totalPrice: 0 },
//     3: { parts: [], totalPrice: 0 }
//   });

//   useEffect(() => {
//     // Load initial build data
//     const savedParts = getAllFromLocalStorage();
//     setBuilds(prev => ({
//       ...prev,
//       1: { parts: savedParts, totalPrice: calculateBuildTotal(savedParts) }
//     }));
//     compatibleParts(tmp, 'Memory');
//   }, []);

//   // Function to calculate total price for a build
//   const calculateBuildTotal = (items) => {
//     return items.reduce((sum, part) => sum + (part.price || 0), 0) / 100;
//   };

//   // Function to switch between builds
//   const switchBuild = (buildNumber) => {
//     setActiveBuild(buildNumber);
//     // Save current build to localStorage before switching
//     const currentBuildKey = `build_${buildNumber}`;
//     localStorage.setItem(currentBuildKey, JSON.stringify(builds[buildNumber].parts));
//   };

//   // Function to remove part from current build
//   const removePart = (category) => {
//     rmvStorageItem(category);
//     const updatedParts = getAllFromLocalStorage();
//     setBuilds(prev => ({
//       ...prev,
//       [activeBuild]: {
//         parts: updatedParts,
//         totalPrice: calculateBuildTotal(updatedParts)
//       }
//     }));
//   };

//   // Function to reset current build
//   const resetBuild = () => {
//     rmvAllStorageItem();
//     setBuilds(prev => ({
//       ...prev,
//       [activeBuild]: { parts: [], totalPrice: 0 }
//     }));
//   };

//   // Function to generate PDF (now includes build number)
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const timestamp = generateTimestamp();
//     const fileName = `PC_Build_${activeBuild}_${timestamp}.pdf`;

//     doc.setFontSize(18);
//     doc.text(`PC Build ${activeBuild} Configuration`, 14, 20);

//     const tableData = parts.map((part) => {
//       const selectedPart = builds[activeBuild].parts.find((p) => p.category === part.name);
//       return [
//         part.name,
//         selectedPart?.name || 'Not Selected',
//         selectedPart ? `$${(selectedPart.price / 100).toFixed(2)}` : '-'
//       ];
//     });

//     tableData.push(['Total Price', '', `$${builds[activeBuild].totalPrice.toFixed(2)}`]);

//     autoTable(doc, {
//       startY: 30,
//       head: [['Component', 'Selected Item', 'Price']],
//       body: tableData,
//     });

//     doc.save(fileName);
//   };

//   const generateTimestamp = () => {
//     const now = new Date();
//     return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now
//       .getDate()
//       .toString()
//       .padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now
//       .getMinutes()
//       .toString()
//       .padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
//   };

//   const currentBuild = builds[activeBuild];

//   return (
//     <div id="builder-container">
//       <header id="header">
//         <h1>Choose Your Parts</h1>
//       </header>

//       <div id="tab-container">
//         {[1, 2, 3].map((buildNum) => (
//           <button
//             key={buildNum}
//             className={`tab-button ${activeBuild === buildNum ? 'active' : ''}`}
//             onClick={() => switchBuild(buildNum)}
//           >
//             Build {buildNum}
//           </button>
//         ))}
//       </div>

//       <table id="parts-table">
//         <tbody>
//           {parts.map((part) => {
//             let currentPart = currentBuild.parts.find((currPart) => currPart.category === part.name);
//             return currentPart ? (
//               <tr key={part.name}>
//                 <td>{part.name}</td>
//                 <td>{currentPart?.name}</td>
//                 <td>${currentPart?.price / 100}</td>
//                 <td>
//                   <button className="select-button" onClick={() => removePart(currentPart.category)}>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ) : (
//               <tr key={part.name}>
//                 <td>{part.name}</td>
//                 <td>
//                   <Link href={part.path}>
//                     <button className="select-button">{`+ choose a ${part.name}`}</button>
//                   </Link>
//                 </td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             );
//           })}

//           <tr key="peripherals">
//             <td>Peripherals</td>
//             <td id="peripherals-row" colSpan="3">
//               {['Keyboard', 'Mouse', 'Headphones', 'Speakers', 'Webcam'].map((item) => (
//                 <button key={item} className="peripheral-item">
//                   {item}
//                 </button>
//               ))}
//             </td>
//           </tr>

//           <tr key="total-price">
//             <td colSpan="2"><strong>Total Price:</strong></td>
//             <td colSpan="2"><strong>${currentBuild.totalPrice.toFixed(2)}</strong></td>
//           </tr>
//         </tbody>
//       </table>

//       <div id="action-buttons">
//         <button id="save-button">Save</button>
//         <button id="share-button">Share</button>
//         <button id="print-button" onClick={generatePDF}>Download PDF</button>
//       </div>
//     </div>
//   );
// };

// export default Builder;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
  getAllFromLocalStorage,
  rmvAllStorageItem,
  rmvStorageItem,
  compatibleParts,
} from '../lib/builderData';
import './builders.css';

const Builder = ({ tmp }) => {
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

  const [activeBuild, setActiveBuild] = useState(1);
  const [builds, setBuilds] = useState({
    1: { parts: [], totalPrice: 0 },
    2: { parts: [], totalPrice: 0 },
    3: { parts: [], totalPrice: 0 }
  });

  useEffect(() => {
    // Check if the page needs a refresh (stored in sessionStorage)
    if (sessionStorage.getItem("needsRefresh")) {
      sessionStorage.removeItem("needsRefresh");
      window.location.reload();
    }

    const savedParts = getAllFromLocalStorage();
    setBuilds(prev => ({
      ...prev,
      1: { parts: savedParts, totalPrice: calculateBuildTotal(savedParts) }
    }));
    compatibleParts(tmp, 'Memory');
  }, []);

  const calculateBuildTotal = (items) => {
    return items.reduce((sum, part) => sum + (part.price || 0), 0) / 100;
  };

  const switchBuild = (buildNumber) => {
    setActiveBuild(buildNumber);
    const currentBuildKey = `build_${buildNumber}`;
    localStorage.setItem(currentBuildKey, JSON.stringify(builds[buildNumber].parts));
  };

  const removePart = (category) => {
    rmvStorageItem(category);
    const updatedParts = getAllFromLocalStorage();
    setBuilds(prev => ({
      ...prev,
      [activeBuild]: {
        parts: updatedParts,
        totalPrice: calculateBuildTotal(updatedParts)
      }
    }));
  };

  const resetBuild = () => {
    rmvAllStorageItem();
    setBuilds(prev => ({
      ...prev,
      [activeBuild]: { parts: [], totalPrice: 0 }
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const timestamp = generateTimestamp();
    const fileName = `PC_Build_${activeBuild}_${timestamp}.pdf`;

    doc.setFontSize(18);
    doc.text(`PC Build ${activeBuild} Configuration`, 14, 20);

    const tableData = parts.map((part) => {
      const selectedPart = builds[activeBuild].parts.find((p) => p.category === part.name);
      return [
        part.name,
        selectedPart?.name || 'Not Selected',
        selectedPart ? `$${(selectedPart.price / 100).toFixed(2)}` : '-'
      ];
    });

    tableData.push(['Total Price', '', `$${builds[activeBuild].totalPrice.toFixed(2)}`]);

    autoTable(doc, {
      startY: 30,
      head: [['Component', 'Selected Item', 'Price']],
      body: tableData,
    });

    doc.save(fileName);
  };

  const generateTimestamp = () => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now
      .getDate()
      .toString()
      .padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now
      .getMinutes()
      .toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
  };

  const currentBuild = builds[activeBuild];

  return (
    <div id="builder-container">
      <header id="header">
        <h1>Choose Your Parts</h1>
      </header>

      <div id="tab-container">
        {[1, 2, 3].map((buildNum) => (
          <button
            key={buildNum}
            className={`tab-button ${activeBuild === buildNum ? 'active' : ''}`}
            onClick={() => switchBuild(buildNum)}
          >
            Build {buildNum}
          </button>
        ))}
      </div>

      <table id="parts-table">
        <tbody>
          {parts.map((part) => {
            let currentPart = currentBuild.parts.find((currPart) => currPart.category === part.name);
            return currentPart ? (
              <tr key={part.name}>
                <td>{part.name}</td>
                <td>{currentPart?.name}</td>
                <td>${currentPart?.price / 100}</td>
                <td>
                  <button className="select-button" onClick={() => removePart(currentPart.category)}>
                    Remove
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={part.name}>
                <td>{part.name}</td>
                <td>
                  <Link href={part.path}>
                    <button
                      className="select-button"
                      onClick={() => sessionStorage.setItem("needsRefresh", "true")}
                    >
                      {`+ choose a ${part.name}`}
                    </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
              </tr>
            );
          })}

          <tr key="peripherals">
            <td>Peripherals</td>
            <td id="peripherals-row" colSpan="3">
              {['Keyboard', 'Mouse', 'Headphones', 'Speakers', 'Webcam'].map((item) => (
                <button key={item} className="peripheral-item">
                  {item}
                </button>
              ))}
            </td>
          </tr>

          <tr key="total-price">
            <td colSpan="2"><strong>Total Price:</strong></td>
            <td colSpan="2"><strong>${currentBuild.totalPrice.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>

      <div id="action-buttons">
        <button id="save-button">Save</button>
        <button id="share-button">Share</button>
        <button id="print-button" onClick={generatePDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default Builder;
