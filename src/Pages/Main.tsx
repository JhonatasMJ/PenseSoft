// src/Components/MainComponent.js
import React from 'react';
import Home from '../Components/Home';
import Vantagens from '../Components/Vantagens';
import About from '../Components/About';
// Importe outras seções que compõem a página principal

const Main = () => {
  return (
    <>
      <Home />
      <Vantagens />
      <About/>
    </>
  );
};

export default Main;
