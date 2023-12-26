import React from 'react';

import { Link } from 'react-router-dom';

const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      <p>Here's a list of my hobbies.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/hobbies">Hobbies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hobbies;