/*
  ENNA PANROM: App.jsx — import paths fix pannrom + 404 page improve.
  YEN: Patha code la './pages/home' (lowercase) import pannirukaan,
  aana file peru Home.jsx (uppercase). Linux case-sensitive — build fail aagum.
  Correct case la import pannrom.
*/

import React from 'react';
import Home from './pages/Home';      /* fix: 'home' → 'Home' */
import About from './pages/About';
import Why from './pages/Why';
import Book from './pages/Book';
import Navbar from './component/Nav';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

/*
  ENNA PANROM: 404 page — simple styled component.
  YEN: Patha code la plain <div>404 Not Found</div> irunduchu — ugly.
  Ippo themed 404 page irukum.
*/
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#120101] to-[#340202] 
                  flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-8xl font-black text-[#f0a500] mb-4">404</h1>
    <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
    <p className="text-gray-400 mb-8">This page skipped leg day and disappeared 💀</p>
    <a href="/home" className="bg-[#f0a500] text-black font-bold px-8 py-3 rounded-lg
                               hover:bg-[#ffbb00] transition-colors duration-300">
      Back to Home
    </a>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/why' element={<Why />} />
        <Route path='/book' element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
