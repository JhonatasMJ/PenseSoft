// src/Components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation para verificar a rota atual
import logo from "../assets/imgs/logotipo.svg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const location = useLocation(); // Obtém a localização atual (rota)

  const isHomePage = location.pathname === "/"; // Verifica se está na página inicial

  return (
    <div className="bg-ciano">
      <header className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <img src={logo} alt="Logotipo" className="h-10" />

        <nav className="flex-1">
          <ul className="flex justify-center text-white gap-6 font-semibold text-lg">
            {isHomePage ? (
              <>
                <li className="cursor-pointer">
                  <ScrollLink to="inicio" smooth={true} duration={500}>
                    Inicio
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink to="sobre" smooth={true} duration={500}>
                    Sobre
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" state={{ scrollTo: "inicio" }}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/" state={{ scrollTo: "sobre" }}>
                    Sobre
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="funcionalidades">Funcionalidades</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <ScrollLink to="vantagens" smooth={true} duration={500}>
                Vantagens
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <Link to="/orcamento">
          <button className="bg-azul text-white font-bold px-4 py-2 rounded">
            Orçamento
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
