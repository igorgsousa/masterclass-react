import React from 'react';
import {Link} from "react-router-dom";

import TitleBar from '../../components/TitleBar'

function HomePage() {
  return (     
      <div>

        <TitleBar/>
        <h2>Bem vindo ao sistema </h2>      
      </div> 
  );
}

export default HomePage;
