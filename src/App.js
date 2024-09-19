import './css/App.scss';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
