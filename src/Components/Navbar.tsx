// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom
import logo from '../assets/imgs/logotipo.svg';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='bg-ciano'>
      <header className='flex items-center justify-between max-w-7xl mx-auto p-4'>
        <img src={logo} alt="Logotipo" className="h-10" />

        <nav className='flex-1'>
          <ul className='flex justify-center text-white gap-6 font-semibold text-lg'>
            <li className='cursor-pointer'><ScrollLink to="inicio" smooth={true} duration={500}>Inicio</ScrollLink></li>
            <li className='cursor-pointer'><ScrollLink to="sobre" smooth={true} duration={500}>Sobre</ScrollLink></li>
            <li><Link to="/">Funcionalidades</Link></li>
            <li><Link to="/vantagens">Vantagens</Link></li>
          </ul>
        </nav>

        <Link to="/orcamento">
          <button className='bg-azul text-white font-bold px-4 py-2 rounded'>
            Orçamento
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Navbar;
