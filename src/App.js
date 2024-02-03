import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
import Publications from './pages/publications';
import Blog from './pages/blog';
import Hello from './pages/posts/hello'; 
import Projects from './pages/projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/hello' element={<Hello/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
