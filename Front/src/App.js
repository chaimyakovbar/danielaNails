import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Shop from './Components/pages/Shop'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import MainPage from './Components/MainPage'
import NavBar from './Components/NavBar'
import PolicySupport from './Components/pages/PolicySupport'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/PolicySupport" element={<PolicySupport/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
};

export default App;
