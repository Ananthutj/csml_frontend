import React from 'react';
import marineImage from './components/images/marine.png';

const CusatPage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center',     // Vertically center
    height: '100vh',          // 100% of the viewport height
  };

  const imageStyle = {
    maxWidth: '100%', // Ensure the image doesn't exceed its container width
    maxHeight: '100%', // Ensure the image doesn't exceed its container height
  };

  return (
    <div style={containerStyle}>
      {/* Centered cusat.png image */}
      <img src={marineImage} alt="Cusat" style={imageStyle} />
    </div>
  );
};

export default CusatPage;
