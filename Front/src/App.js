import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Works from './Components/pages/Works'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import MainPage from './Components/pages/MainPage'
import NavBar from './Components/helpers/NavBar'
import PolicySupport from './Components/pages/PolicySupport'
import Feedback from './Components/pages/Feedback';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/PolicySupport" element={<PolicySupport/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>

  );
};

export default App;
