import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import HomePage from './Components/HomePage';
import Solutions from './Components/Solutions';
import LandingPage from './Components/LandingPage';
import Solution from './Components/Solution';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes using the 'element' prop */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path='/solution' element={<Solution/>}/>
      </Routes>
    </Router>
  );
};

export default App;