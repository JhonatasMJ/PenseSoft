import React from 'react';
import { useState } from 'react';

const Orcamento = () => {
	const [usuarios, setUsuarios] = useState(5); // Valor padrão para número de usuários

	return (
		<>
			{/* Seção azul logo abaixo da navbar */}
			<section className="bg-ciano relative " id="orcamento">
				<div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-1 relative py-24 items-baseline gap-8">
					<h2 className="text-1xl font-bold text-cinza mb-0 mt-2">
						Faça um
					</h2>
					<h1 className="text-4xl text-white font-bold mt-2">
						Orçamento
					</h1>
					<p className="text-white text-1xl mt-8">
						Quer saber mais sobre nossas soluções ou discutir como
						podemos ajudar o seu negócio a crescer? Estamos aqui
						para responder às suas dúvidas e oferecer o suporte que
						você precisa.
					</p>
				</div>
			</section>

			{/* Seção de orçamento */}
			<section className="max-w-7xl mx-auto p-4 pb-44 pt-20">
				{/* Formulário de orçamento */}
				<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="nome"
							className="block font-semibold mb-2"
						>
							Nome:
						</label>
						<input
							type="text"
							id="nome"
							placeholder="Insira seu nome"
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div>
						<label
							htmlFor="telefone"
							className="block font-semibold mb-2"
						>
							Seu melhor número:
						</label>
						<input
							type="text"
							id="telefone"
							placeholder="Insira seu número de telefone"
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div className="col-span-2">
						<label
							htmlFor="mensagem"
							className="block font-semibold mb-2"
						>
							Mensagem:
						</label>
						<textarea
							id="mensagem"
							placeholder="Insira sua mensagem"
							className="w-full border border-gray-300 rounded-md p-2"
						></textarea>
					</div>

					<div className="col-span-2">
						<label className="block font-semibold mb-2">
							Regime tributário:
						</label>
						<div className="flex gap-4">
							<div>
								<input
									type="radio"
									id="nuvem"
									name="hospedagem"
									value="nuvem"
								/>
								<label htmlFor="nuvem" className="ml-2">
									Quero ele na nuvem
								</label>
							</div>
							<div>
								<input
									type="radio"
									id="on-premise"
									name="hospedagem"
									value="on-premise"
								/>
								<label htmlFor="on-premise" className="ml-2">
									Na minha própria empresa (On-Premise)
								</label>
							</div>
							<div>
								<input
									type="radio"
									id="indeciso"
									name="hospedagem"
									value="indeciso"
								/>
								<label htmlFor="indeciso" className="ml-2">
									Ainda não decidi
								</label>
							</div>
						</div>
					</div>

					<div>
						<label
							htmlFor="usuarios"
							className="block font-semibold mb-2"
						>
							Número de usuários do sistema:
						</label>
						<input
							type="number"
							id="usuarios"
							value={usuarios}
							onChange={(e) =>
								setUsuarios(Number(e.target.value))
							} 
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block font-semibold mb-2"
						>
							Email:
						</label>
						<input
							type="email"
							id="email"
							placeholder="Insira seu email"
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div className="col-span-2 flex justify-center">
						<button className="bg-ciano text-white font-bold px-6 py-2 rounded-md mt-4">
							ENVIAR ORÇAMENTO
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Orcamento;
