import React from 'react';
import img01 from '../assets/imgs/img01.png';
import img02 from '../assets/imgs/sales.jpeg';
import img03 from '../assets/imgs/financeiro.jpg';
import img04 from '../assets/imgs/Documents.jpg';
import img05 from '../assets/imgs/process.jpg';

const listaData = [
	{
		title: 'Gestão centralizada de filiais e estoques',
		subtitles: ['Multi-filial e Multi-depósitos', 'Produção e Estoque'],
		topics: [
			'Controle integrado de várias filiais e depósitos, permitindo um gerenciamento preciso e eficiente das informações e movimentações.',
			'Controle total de materiais e movimentações, garantindo eficiência e minimizando erros no gerenciamento de produção e estoque.',
		],

		img: img01,
	},
	{
		title: 'Automatização de vendas e contratos',
		subtitles: ['Vendas', 'Contratos'],
		topics: [
			'Permite o cadastro para personalização de tipos de pedidos, condições de pagamentos e tabela de preços com controle de validade;',
			'Lançamento de contratos de compra de serviços, com períodos em aberto ou fechados. Geração do financeiro mensal a partir de contratos;',
		],

		img: img02,
	},
	{
		title: 'Controle financeiro e cobrança',
		subtitles: ['Financeiro', 'Cobrança'],
		topics: [
			'Permite a movimentação entre documentos, sendo possível baixas utilizando outros documentos como crédito, permuta ou substituição de contas a pagar ou receber;',
			'Permite integração bancária, gerando boletos com impressão própria e controle de remessa/retorno através de convênio bancário (cobrança escritural);',
		],

		img: img03,
	},
	{
		title: 'Gestão de documentos e integrações',
		subtitles: ['Emissão de Documentos', 'Integrações'],
		topics: [
			'Emite os principais documentos eletrônicos exigidos pela legislação atual: NF-e: Nota Fiscal Eletrônica | NFC-e: Nota Fiscal Consumidor Eletrônica | CF-e: Cupom Fiscal Eletrônico entre outros',
			'Mercado Livre | Tray | SkyHub | ByFood | Frenet | Correios',
		],

		img: img04,
	},
	{
		title: 'Inteligência e automação de processos',
		subtitles: ['Automações'],
		topics: [
			'Automação de rotinas de venda através de API do Mercado Livre | Envio automático de e-mails do CTe após autorização | Entrada automatizada de Notas Fiscais de entrada através de integração direta com a Sefaz.',
		],

		img: img05,
	},
];

const Funcionalidades = () => {
	const [ativo, setAtivo] = React.useState(0);

	return (
		<section className="max-w-7xl mx-auto py-24" id="funcionalidades">
			{/* Coluna dos botões */}
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
				<div>
					<span className="text-azul font-semibold">Descubra as</span>
					<h2 className="text-5xl font-bold text-cinza mt-2">
						Principais Funcionalidades
					</h2>
					<ul>
						{listaData.map((lista, index) => (
							<li key={index} className="mt-10">
								<button
									className={`bg-ciano w-full p-4 flex gap-4 items-center text-white font-bold text-xl rounded-md ${
										ativo === index
											? 'ring-2 ring-azul'
											: 'opacity-65'
									}`}
									onClick={() => setAtivo(index)}
								>
									<span className="bg-azul px-3 py-1 w-max rounded-lg text-sm">
										{index + 1}
									</span>
									{lista.title}
								</button>
							</li>
						))}
					</ul>
				</div>

				{/* Coluna de conteúdo com imagem */}
				<div>
					{listaData.map(
						(lista, index) =>
							ativo === index && (
								<div
									key={index}
									className="grid justify-between items-stretch"
								>
									<h3 className="text-3xl font-bold text-cinza">
										{lista.title}
									</h3>

									{/* Exibindo os subtítulos e tópicos */}
									{lista.subtitles &&
										lista.subtitles.map((subtitle, idx) => (
											<div key={idx} className="mt-6">
												<p className="text-xl text-azul font-semibold">
													{subtitle}
												</p>
												<ul className="list-disc pl-6 mt-2 text-lg text-cinza">
													<li>{lista.topics[idx]}</li>
												</ul>
											</div>
										))}

									{/* Exibindo a imagem com borda 3D */}
									<div className="relative mt-10 w-full h-auto">
										{/* Borda com efeito 3D */}
										<div
											className="absolute top-[-10px] left-[-10px] w-[95%] h-[90%] 
                            border-l-8 border-t-8 border-ciano transform translate-x-[-10px] translate-y-[-10px]"
											aria-hidden="true"
										></div>
										{/* Imagem */}
										<img
											src={lista.img}
											alt="Imagem decorativa"
											className="relative z-10 w-full h-auto rounded-md shadow-lg"
										/>
									</div>
								</div>
							)
					)}
				</div>
			</div>
		</section>
	);
};

export default Funcionalidades;

// const Funcionalidades = () => {
// 	const [ativo, setAtivo] = React.useState(0);

// 	return (
// 		<section className="max-w-7xl mx-auto  py-24" id="funcionalidades">
// 			{/* Coluna dos botões */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
// 				<div>
// 					<span className="text-azul font-semibold">Descubra as</span>
// 					<h2 className="text-5xl font-bold text-cinza mt-2">
// 						Principais Funcionalidades
// 					</h2>
// 					<ul>
// 						{listaData.map((lista, index) => (
// 							<li key={index} className="mt-10">
// 								<button
// 									className={`bg-ciano w-full  p-4 flex gap-4 items-center text-white font-bold text-xl rounded-md ${
// 										ativo === index
// 											? 'ring-2 ring-azul'
// 											: 'opacity-65'
// 									}`}
// 									onClick={() => setAtivo(index)}
// 								>
// 									<span className="bg-azul px-3 py-1 w-max rounded-lg text-sm">
// 										{index + 1}
// 									</span>
// 									{lista.title}
// 								</button>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 				<div>
// 					{listaData.map(
// 						(lista, index) =>
// 							ativo === index && (
// 								<div
// 									key={index}
// 									className="grid justify-between items-stretch  "
// 								>
// 									<h3 className="text-3xl font-bold text-cinza">
// 										{lista.title}
// 									</h3>
// 									<p className="mt-4 text-lg text-cinza">
// 										{lista.topic1}
// 									</p>
// 									<p className="mt-2 text-lg text-cinza">
// 										{lista.topic2}
// 									</p>
// 									<img
// 										src={lista.img}
// 										alt="Imagem decorativa"
// 									/>
// 								</div>
// 							)
// 					)}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Funcionalidades;
