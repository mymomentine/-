/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
<React.StrictMode>
	<App />
</React.StrictMode>,
document.getElementById('root')
);*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Publications from './pages/publications';
import Misc from './pages/misc';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

