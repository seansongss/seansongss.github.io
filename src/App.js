import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import ButtonAppBar from './components/ButtonAppBar';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
