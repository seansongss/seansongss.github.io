import React from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Expereince from './pages/Experience';
import Contact from './pages/Contact';
import Intro from './Intro';

import './App.css'

const App = () => {
  return (
    <div className='container'>
      <section>
        <Intro />
        <Navbar />
        <Home />
      </section>
      <section><About /></section>
      <section><Projects /></section>
      <section><Expereince /></section>
      <section><Contact /></section>
    </div>
  );
};

export default App;
