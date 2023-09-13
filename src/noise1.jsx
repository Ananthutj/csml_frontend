import React from 'react';
import Sidebar from './Sidebar'
import './components/noise.css'

const NoisePage = () => {
  const noisePageStyle = {
    backgroundColor: 'black',
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    display: 'flex',
  };

 const textContainerStyle = {
    flex: '1', // Allow the text container to take remaining space
    padding: '20px', // Add some padding for spacing
    color: 'white',
  };

  return (
    <div style={noisePageStyle}>
     <Sidebar />
      <div style={textContainerStyle}>
        <h1 className='heading'>Noise Page</h1>
        </div>
  </div>
  );
};

export default NoisePage;
