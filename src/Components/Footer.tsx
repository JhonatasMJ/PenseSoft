import { ChevronUp } from 'lucide-react';
import logo from '../assets/imgs/logotipo.svg';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {
	return (
		<footer className="bg-ciano py-2">
			<div className="max-w-7xl mx-auto flex items-center justify-between text-white">
				<div className="text-center md:text-left mb-4 md:mb-0">
					<img src={logo} alt="Logotipo" className="h-10" />
				</div>

				<div className="text-center">
					<p className="text-xl font-semibold">
						PenseSoft © Todos os direitos reservados
					</p>
				</div>

				<div className="text-center relative">
					<button className="bg-azul-escuro text-ciano rounded-lg p-3 relative -top-6">
					<ScrollLink
										to="inicio"
										smooth={true}
										duration={500}
									>
										
						<ChevronUp className="h-6 w-6 text-white relative " />
									</ScrollLink>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
