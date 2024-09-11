// src/Components/MainComponent.js
import React from 'react';
import Home from '../Components/Home';
import Vantagens from '../Components/Vantagens';
import About from '../Components/About';
import Boost from '../Components/Boost';
import Funcionalidades from '../Components/Funcionalidades';
// Importe outras seções que compõem a página principal

const Main = () => {
  return (
    <>
      <Home />
      <Vantagens />
      <About/>
      <Boost/>
      <Funcionalidades/>
    </>
  );
};

export default Main;
