import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
import Publications from './pages/publications';
import Notes from './pages/notes';
import Overwatch from './pages/posts/overwatch'; 
import Hello from './pages/posts/hello'; 
import Hiatus from './pages/posts/hiatus'; 
import Playground from './pages/playground';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/notes/overwatch' element={<Overwatch/>} />
        <Route path='/notes/hello' element={<Hello/>} />
        <Route path='/notes/hiatus' element={<Hiatus/>} />
        <Route path='/playground' element={<Playground/>} />
      </Routes>
    </Router>
  );
}

export default App;
