import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BlackScreen from "./mosq1";
// import  Graph from './graph';
import Home from "./Homepage.jsx";
import Graph from "./Graph";
import Sidebar from "./Sidebar";
import MosquitoPage from "./mosq1";
import NoisePage from "./noise1";
import AirPage from "./air1";
import WaterPage from "./water1";
import FloodPage from "./flood1";
import Dashboard from "./Dashboard";

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
        </Routes>
      </Router>
      {/* <Graph  /> */}
      <Home />
    </div>
  );
}

export default App;
