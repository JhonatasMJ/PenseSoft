import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/imgs/logotipo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

// Definição do tipo para as props do ScrollOrLink
interface ScrollOrLinkProps {
	to: string;
	children: React.ReactNode;
	toggleMenu: () => void;
}

const ScrollOrLink: React.FC<ScrollOrLinkProps> = ({ to, children, toggleMenu }) => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return isHomePage ? (
		<ScrollLink to={to} smooth={true} duration={500} onClick={toggleMenu}>
			{children}
		</ScrollLink>
	) : (
		<Link to="/" state={{ scrollTo: to }} onClick={toggleMenu}>
			{children}
		</Link>
	);
};

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div className="bg-ciano fixed top-0 left-0 w-full z-50 shadow-lg">
			<header className="flex items-center justify-between max-w-7xl mx-auto p-4">
				<img src={logo} alt="Logotipo" className="h-10" />

				<div className="lg:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
					>
						{isOpen ? <X size={32} /> : <Menu size={32} />}
					</button>
				</div>

				<nav
					className={`${
						isOpen ? 'block' : 'hidden'
					} lg:flex flex-1 justify-center items-center text-white gap-6 font-semibold text-lg lg:static absolute top-[70px] left-0 w-full lg:w-auto lg:bg-transparent bg-ciano transition-all duration-300 ease-in-out navbar-links`}
					style={{ zIndex: isOpen ? 40 : 10 }}
				>
					<ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-center lg:text-left p-4 lg:p-0 navbar-links">
						<li className="cursor-pointer">
							<ScrollOrLink to="inicio" toggleMenu={toggleMenu}>
								Inicio
							</ScrollOrLink>
						</li>
						<li className="cursor-pointer">
							<ScrollLink to="vantagens" smooth={true} duration={500} onClick={toggleMenu}>
								Vantagens
							</ScrollLink>
						</li>
						<li className="cursor-pointer">
							<ScrollOrLink to="sobre" toggleMenu={toggleMenu}>
								Sobre
							</ScrollOrLink>
						</li>
						<li className="cursor-pointer">
							<ScrollOrLink to="funcionalidades" toggleMenu={toggleMenu}>
								Funcionalidades
							</ScrollOrLink>
						</li>

						<li className="lg:hidden mt-4">
							<Link to="/orcamento" onClick={toggleMenu}>
								<button className="bg-azul text-white font-bold px-4 py-2 rounded">Orçamento</button>
							</Link>
						</li>
					</ul>
				</nav>

				<Link to="/orcamento" className="hidden lg:block" onClick={toggleMenu}>
					<button className="bg-azul text-white font-bold px-4 py-2 rounded transition-all duration-300 ease-in hover:scale-110 hover:bg-azul-hover">
						Orçamento
					</button>
				</Link>
			</header>
		</div>
	);
};

export default Navbar;
