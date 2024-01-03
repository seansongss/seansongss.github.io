import React from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Expereince from './pages/Experience';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Expereince />
      <Contact />
    </div>
  );
};

export default App;
