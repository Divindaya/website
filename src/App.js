import React from 'react';
import NavConfig from './components/NavConfig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <NavConfig />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
      </>
  );
}

export default App;
