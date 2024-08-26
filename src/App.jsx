import React from 'react'
import Home from './Pages/home/Home';
import { Routes, Route } from "react-router-dom"
import { Footer } from './Componets';
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
      <Footer />
    </div>
  );
}

export default App;
