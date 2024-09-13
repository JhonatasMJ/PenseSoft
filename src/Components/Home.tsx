import { Plus } from 'lucide-react';
import woman from '../assets/imgs/womanHome.png';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<section className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2  pb-24 pt-10 md:pb-44 md:pt-20 items-center " id='inicio'>
			<motion.div
				className="flex flex-col justify-center  mt-14"
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<span className="text-lg font-semibold text-black">
					Bem-vindo(a)👋
				</span>
				<h1 className=" text-3xl md:text-5xl  text-cinza font-bold mt-2">
					Flexível, configurável e feito para o seu{' '}
					<span className="bg-ciano text-white px-1">sucesso.</span>
				</h1>
				<p className="text-cinza text-lg mt-10">
					Um ERP que se adapta ao seu negócio, flexível, configurável
					e feito para o seu sucesso. A solução que seu negócio
					precisa, com atendimento humanizado.
				</p>
				<div className="flex gap-8 mt-4">
					<motion.button
						className="w-max bg-ciano text-azul font-bold px-4  py-4 md:text-base   md:px-12 md:py-3  rounded-md mt-14 shadow-custom-ciano"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<a className="flex items-center  md:gap-3 md:text-base text-sm" href="/">
							SAIBA MAIS
							<motion.div
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<Plus size={20} />
							</motion.div>
						</a>
					</motion.button>
					<motion.button
						className="w-max bg-azul text-white font-bold rounded-md px-6 py-2 mt-14 text-sm  md:px-12 md:py-3"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<a href="/">ORÇAMENTO</a>
					</motion.button>
				</div>
			</motion.div>
			<motion.div
				className=" flex-auto items-center justify-center hidden md:flex"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<img
					src={woman}
					alt="Mulher segurando notebook"
					className="w-5/6"
				/>
			</motion.div>
		</section>
	);
};

export default Home;
