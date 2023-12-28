import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './pages/Navbar';
import ButtonAppBar from './pages/ButtonAppBar';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';

const App = () => {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
