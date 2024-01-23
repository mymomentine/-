import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Publications from './pages/publications';
import Blog from './pages/blog';
import Random from './pages/random';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </Router>
  );
}

export default App;
