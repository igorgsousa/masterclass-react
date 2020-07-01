import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
  return (     
      <div>
        <h2>Bem vindo ao sistema </h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/star-wars">Star Wars</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>

      </div> 
  );
}

export default HomePage;
