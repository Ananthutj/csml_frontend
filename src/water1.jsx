import React from 'react';
import Graph from './Graph';

const WaterPage = () => {
  const waterPageStyle = {
    backgroundColor: 'black',
    
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
  };

  return <div style={waterPageStyle}>
    <Graph/>
    <h1  style={{color:'white'}}><center>water page</center></h1>
  </div>;
};

export default WaterPage;
