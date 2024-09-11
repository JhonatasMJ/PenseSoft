import React from 'react';
import { useState } from 'react';
import build from '../assets/imgs/Rectangle 39.png';

const Orcamento = () => {
	const [usuarios, setUsuarios] = useState(5); // Valor padrão para número de usuários

	return (
		<>
			{/* Seção azul logo abaixo da navbar */}
			<section className="bg-ciano relative " id="orcamento">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 relative pb-48 items-baseline gap-4">
					<h2 className="text-1xl font-bold text-cinza mb-0 mt-2">
						Faça um
					</h2>
					<h1 className="text-4xl text-white font-bold">Orçamento</h1>
					<p className="text-black text-1xl mt-6 w-[52%]">
						Quer saber mais sobre nossas soluções ou discutir como
						podemos ajudar o seu negócio a crescer? Estamos aqui
						para responder às suas dúvidas e oferecer o suporte que
						você precisa.
					</p>
				</div>
			</section>

			{/* Seção de orçamento */}
			<section className="max-w-7xl mx-auto pb-44 pt-20">
				{/* Formulário de orçamento */}
				<div className="bg-white max-w-7xl mx-auto grid grid-cols-[498px_660px] gap-0 relative items-center top-[-220px] h-auto w-full">
					<img
						src={build}
						alt="imagem de um prédio"
						className="w-[90%] h-auto m-0 p-0"
					/>
					<form className="gap-6">
						<p className="font-extrabold border-l-8 border-ciano pl-2 mb-8">
							DADOS PESSOAIS
						</p>
						<div className="flex flex-row justify-between gap-6">
							<input
								type="text"
								id="nome"
								placeholder="Insira seu nome"
								className="w-full border border-gray-300 rounded-md p-2 h-12 bg-gray-50 mb-8 text-gray-700"
							/>
							<input
								type="text"
								id="email"
								placeholder="Insira seu email"
								className="w-full border border-gray-300 rounded-md p-2 h-12 bg-gray-100 mb-8"
							/>
						</div>

						<div>
							<label
								htmlFor="nome"
								className="block font-semibold mb-2"
							>
								Insira seu melhor número
							</label>
							<input
								type="tel"
								id="telefone"
								pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
								placeholder="(00) 0 0000-0000"
								className="w-full border border-gray-300 rounded-md p-2 h-12 bg-gray-50 mb-8 text-gray-700"
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
								className="w-full border border-gray-300 rounded-md p-2 h-40 bg-gray-50"
							></textarea>
						</div>

						<div className="flex flex-col">
							<label className="block font-semibold mb-2">
								Onde hospedara o ERP
							</label>
							<div className="flex flex-col gap-4">
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
									<label
										htmlFor="on-premise"
										className="ml-2"
									>
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
							} // Certifique-se de converter para número
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

						<div className="flex justify-left">
							<button className="bg-blue-900 text-white font-bold px-6 py-2 rounded-md mt-4 h-12">
								ENVIAR ORÇAMENTO
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Orcamento;
