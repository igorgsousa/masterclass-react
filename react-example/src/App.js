import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import Calculator from './Calculator';

function App() {
  return (
    <div>
      <h1>Projeto react training</h1>
      
      <WelcomeMessage name="Javalee"/>
      <Calculator/>

    </div>
  );
}

export default App;
