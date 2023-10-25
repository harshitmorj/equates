import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Landing/Home';
import Satellite from './pages/Landing/Satellite';
import TechProd from './pages/Landing/TechProd';
import Technology from './pages/Technology/Technology';
// import EarthSat from './pages/Technology/EarthSat';
// import SatelliteConstellation from './pages/Technology/SatelliteConstellation';
// import Aeroplane from './pages/Technology/Aeroplane';
// import GroundSatellite from './pages/Technology/GroundSatellite';
import Products from './pages/Products/Products';
import Questions from './pages/Products/Questions';
import AboutUs from './pages/About/About';
import ContactUs from './pages/Contact/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="bg-black">
        <Header activeTab={activeTab} toggle={toggle} />
        <main className="absolute top-20 left-0 right-0 bg-black">
          <Routes>
            <Route path="/" element={<div><Home /><Satellite /><TechProd /><Footer /></div>} />
            {/* <Route path="/technology" element={<div><Technology /><EarthSat /><SatelliteConstellation /><Aeroplane /><GroundSatellite /><Footer /></div>} /> */}
            <Route path="/technology" element={<div><Technology /><Footer /></div>} />
            <Route path="/products" element={<div><Products /><Footer /></div>} />
            <Route path="/about" element={<div><AboutUs /><Footer /></div>} />
            <Route path="/contact" element={<div><ContactUs /><Questions /><Footer /></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

