// src/Components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/imgs/logotipo.svg";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-ciano">
      <header className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <img src={logo} alt="Logotipo" className="h-10" />

        {/* Ícone do menu para dispositivos móveis */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Menu de navegação */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-1 justify-center items-center text-white gap-6 font-semibold text-lg lg:static absolute top-[70px] left-0 w-full lg:w-auto lg:bg-transparent bg-ciano transition-all duration-300 ease-in-out`}
          style={{ zIndex: isOpen ? 40 : 10 }}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-center lg:text-left p-4 lg:p-0">
            {isHomePage ? (
              <>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="inicio"
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    Inicio
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="sobre"
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    Sobre
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "inicio" }}
                    onClick={toggleMenu}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "sobre" }}
                    onClick={toggleMenu}
                  >
                    Sobre
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/funcionalidades" onClick={toggleMenu}>
                Funcionalidades
              </Link>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                to="vantagens"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Vantagens
              </ScrollLink>
            </li>
            {/* Botão Orçamento dentro do menu hambúrguer */}
            <li className="lg:hidden mt-4">
              <Link to="/orcamento">
                <button className="bg-azul text-white font-bold px-4 py-2 rounded">
                  Orçamento
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão Orçamento para dispositivos grandes */}
        <Link to="/orcamento" className="hidden lg:block">
          <button className="bg-azul text-white font-bold px-4 py-2 rounded">
            Orçamento
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
