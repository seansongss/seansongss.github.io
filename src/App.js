import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
