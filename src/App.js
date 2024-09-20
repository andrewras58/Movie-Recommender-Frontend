import './css/App.scss';
import React from 'react';
//import { Routes, Route, Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

const Footer = () => (
  <footer>
    <span>Footer Content</span>
  </footer>
);

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/wow" element={<div>wow</div>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
