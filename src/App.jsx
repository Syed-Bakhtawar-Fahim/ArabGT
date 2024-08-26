import React from 'react'
import Home from './Pages/home/Home';
import { Routes, Route, Link } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/review' element={<Home />} />
      <Route path='news' element={<Home />} />
      <Route path='/more' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
