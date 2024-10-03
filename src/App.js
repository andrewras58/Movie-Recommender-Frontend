import './App.scss';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Changelog from './components/changelog/Changelog';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/changelog" element={<Changelog />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
