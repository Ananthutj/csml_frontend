import React from 'react';
import Sidebar from './Sidebar';
import './components/noise.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
