import React from 'react';

function WelcomeMessage(props) {
  return (     
      <div>
        <h2>Bem vindo {props.name}</h2>
      </div> 
  );
}

export default WelcomeMessage;
