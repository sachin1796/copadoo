import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes using the 'element' prop */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;