import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Publications from './pages/publications';
import Misc from './pages/misc';
import CV from './pages/cv';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/misc' element={<Misc />} />
        <Route path='/cv' element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
