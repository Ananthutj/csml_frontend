import React from 'react';
import Sidebar from './Sidebar';
import './components/noise.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';
import { dbNoise } from './firebase.config';
import { collection, getDocs, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import Chart from './components/chart';

function NoiseChart() {
    // Get a reference to a query that filters by timestamp
    const decibelLevelsRef = collection(dbNoise, 'noise/sensor_data/mlG83Q7Wk6Zr8l7fijgDqf3SxcV2');
    const levelQuery = query(decibelLevelsRef, orderBy('timestamp', 'asc'),);

    const [decibelLevels, setDecibelLevels] = useState([{ level: 0, time: 0 }]);

    // const filterDataByDate = (data, startDate) => {
    //     const startTimestamp = startDate.getTime();
    //     return data.filter(entry => entry.time >= startTimestamp);
    // };

    const fetchDecibelLevels = async () => {
        await getDocs(levelQuery).then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().data), time: parseInt(doc.data().timestamp) }));
            setDecibelLevels(data);

            console.log("Decibels: ", data);
        });
    };

    // Define a function to listen for real-time updates
    const subscribeToDecibelLevels = () => {
        const limitQuery = query(decibelLevelsRef, orderBy('timestamp', 'desc'), limit(1));

        const unsubscribe = onSnapshot(limitQuery, (querySnapshot) => {
            console.log("Snapshot is working");
            const data = querySnapshot.docs.map(doc => ({ level: parseInt(doc.data().data), time: parseInt(doc.data().timestamp) }));
            setDecibelLevels(decibelLevels => [...decibelLevels, data[0]]);
            console.log("Decibels in subscribe: ", decibelLevels);

        });

        // Return a function that can be used to unsubscribe from the listener
        return unsubscribe;
    };

    // Use the useEffect hook to fetch the data once when the component mounts
    useEffect(() => {
        fetchDecibelLevels();
    }, []);
    // Use the useEffect hook to subscribe to real-time updates when the component mounts
    useEffect(() => {
        // Call the subscribe function and store the unsubscribe function
        const unsubscribe = subscribeToDecibelLevels();

        // Return a function that will call the unsubscribe function when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    if (decibelLevels.length === 0) {
        return <div>Loading...</div>;
    }
    // Render the Line component with the formatted data and some options
    return (
        <div>
            <h1 className='text-3xl font-bold text-white'>Line Chart with Decibel Levels and Time</h1>

            <Chart data={decibelLevels} />
        </div>
    );
}


const NoisePage = () => {
  const noisePageStyle = {
   
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    display: 'flex',
  };

  const sidebarStyle = {
    width: '230px',
    backgroundColor: 'blue', // Set your desired sidebar background color
  };

  const contentStyle = {
    flex: 1,
    padding: '20px',
    color: 'white',
    marginLeft: '20px', // Add margin to create space between sidebar and content
  };

  const cardStyle = {
    width: '100%',
    margin: '10px',
  };

  return (
    <div style={noisePageStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div>
        <NoiseChart />
      </div>
      <div style={contentStyle} >
        <Row style={{marginTop:'83px',marginRight:'61px'}}>
          <Col xs={12} md={4} >
            <Card style={{ width: '100%', ...cardStyle }}>
              <Card.Img variant="top" src="" />
              <Card.Body style={{backgroundColor:'#008080'}}>
                <Card.Title>Real Time Analysis</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{ width: '100%', ...cardStyle }}>
              <Card.Img variant="top" src="" />
              <Card.Body style={{backgroundColor:'#6D62EB'}}>
                <Card.Title>PeakAnalysis</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{ width: '100%', ...cardStyle }}>
              <Card.Img variant="top" src="" />
              <Card.Body style={{backgroundColor:'#AAC600'}}>
                <Card.Title>Mean Analysis</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NoisePage;
