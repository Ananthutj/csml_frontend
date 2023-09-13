import React, { useState } from 'react';
import Sidebar from './Sidebar';

const MosquitoPage = () => {
  const mosquitoPageStyle = {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '20px',
    position: 'relative',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '75px',
    right: '950px',
  };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    window.location.href = selectedOption; // Manually change the window location
  };

  return (
    <div style={mosquitoPageStyle}>
      <Sidebar />

      {/* Dropdown menu */}
      <div style={{ ...dropdownStyle, backgroundColor: 'black' }}>
        {/* Use a regular select element */}
        <select
          onChange={handleOptionChange}
          style={{ color: 'white', backgroundColor: 'black' }}
        >
          <option value="/cusat">AreaWise</option>
          <option value="/marine">City Overview</option>
          <option value="/edapally">Density</option>
        </select>
      </div>
    </div>
  );
};

export default MosquitoPage;
