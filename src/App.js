  import './App.css';
  import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import BlackScreen from './mosq1';
  import Home from './Homepage.jsx';
  import Graph from './Graph';
  import Sidebar from './Sidebar';
  import MosquitoPage from './mosq1';
  import NoisePage from './noise1';
  import AirPage from './air1';
  import WaterPage from './water1';
  import FloodPage from './flood1';
  import Dashboard from './Dashboard';
  import CusatPage from './cusat'; // Import your CusatPage component
  import MarinePage from './marine'; // Import your MarinePage component
  import EdapallyPage from './edapally'; // Import your EdapallyPage component
  const myRoutes = () => {
    console.log('Routes rendered');
    return (
      <Routes>
        // ...
      </Routes>
    );
  };
  function App() {
    return (
      <div>
        <Router>
        <Routes>
  <Route path="/" element={<Sidebar />} />

  <Route path="/mosq1" element={<MosquitoPage />} />
  <Route path="/noise1" element={<NoisePage />} />
  <Route path="/air1" element={<AirPage />} />
  <Route path="/water1" element={<WaterPage />} />
  <Route path="/flood1" element={<FloodPage />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/cusat" element={<CusatPage />} /> {/* Add this route */}
  <Route path="/marine" element={<MarinePage />} /> {/* Add this route */}
  <Route path="/edapally" element={<EdapallyPage />} /> {/* Add this route */}
</Routes>
        </Router>
        {/* <Graph /> */}
        <Home />
      </div>
    );
  }

  export default App;
