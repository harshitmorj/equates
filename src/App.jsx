import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlankPage from './components/Blank';
import Home from './pages/Landing/Home';
import Technology from './pages/Technology/Technology';
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
            <Route path="/" element={<div><Home /><Footer /></div>} />
            <Route path="/technology" element={<div><Technology /><Footer /></div>} />
            <Route path="/products" element={<div><Products /><Questions /><Footer /></div>} />
            <Route path="/about" element={<div><AboutUs /><Questions /><Footer /></div>} />
            <Route path="/contact" element={<div><ContactUs /><Footer /></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
