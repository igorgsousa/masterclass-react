import React from 'react';

import TitleBar from '../../components/TitleBar'
import StarWarsPeople from '../../components/star-wars/StarWarsPeople'

function StarWarsPage() {
  return (     
      <div>
         <TitleBar/>
        <h2>Bem vindo ao lado negro da força </h2>

        <StarWarsPeople />
      </div> 
  );
}

export default StarWarsPage;
