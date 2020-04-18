import React from 'react';

import './App.css';
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Music from './components/Music'

function App() {
  return (
    <div id="page-wrapper">
      <div id="wrapper">
        <Home />
        <About />
        <Music />
        <Gallery />
        <Contact />
        {/* Copyright */}
        <div className="copyright">&copy; Akshay Iyer, 2020. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>
      </div>
    </div>
  );
}

export default App;
