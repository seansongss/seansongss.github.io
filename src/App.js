import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
