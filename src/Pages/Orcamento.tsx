import { useState } from 'react';
import background from '../assets/imgs/bg-1.webp';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Box, FormHelperText } from '@mui/material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import { ChevronUp } from 'lucide-react';
import logo from '../assets/imgs/logotipo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

import {
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormGroup,
	Checkbox,
	FormLabel,
} from '@mui/material';

interface FormValues {
	nomeEmpresa: string;
	nomeResponsavel: string;
	emailContato: string;
	telefone: string;
	faturamentoAnual: string;
	colaboradores: string;
	modulosERP: string[];
	usuarios: string;
	sistemaAtual: string;
	prazoImplementacao: string;
	OrcamentoParcelas: string;
	conheceuEmpresa: string;
	desafioAtual: string;
	usouERPAntes: string;
	nomeSistemaERP?: string;
	recursosImportantes: string[];
	orcamentoERP: string;
	agendarDemonstracao: string;
	outrosRecursos?: string;
}

const Orcamento = () => {
	// Configuração do useForm com a interface FormValues
	const [showOtherField, setShowOtherField] = useState(false);
	const {
		control,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			nomeEmpresa: '',
			nomeResponsavel: '',
			emailContato: '',
			telefone: '',
			faturamentoAnual: '',
			colaboradores: '',
			modulosERP: [],
			usuarios: '',
			sistemaAtual: '',
			prazoImplementacao: '',
			conheceuEmpresa: '',
			desafioAtual: '',
			usouERPAntes: '',
			nomeSistemaERP: '',
			recursosImportantes: [],
			orcamentoERP: '',
			agendarDemonstracao: '',
			OrcamentoParcelas: '',
		},
	});

	const [isModalOpen, setModalOpen] = useState(false);
	const [otherResource, setOtherResource] = useState('');

	const onSubmit = (data: FormValues) => {
		const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const userID = import.meta.env.VITE_EMAILJS_USER_ID;

		emailjs.init(userID);

		let recursos = data.recursosImportantes;
		if (otherResource) {
			recursos = [...recursos, otherResource]; // Adiciona o campo "Outros"
		}

		// Mapeando os dados para o template do EmailJS
		const templateParams = {
			nomeEmpresa: data.nomeEmpresa,
			nomeResponsavel: data.nomeResponsavel,
			emailContato: data.emailContato,
			telefone: data.telefone,
			faturamentoAnual: data.faturamentoAnual,
			colaboradores: data.colaboradores,
			modulosERP: data.modulosERP.join(', '), // Convertendo array para string
			usuarios: data.usuarios,
			sistemaAtual: data.sistemaAtual,
			prazoImplementacao: data.prazoImplementacao,
			usouERPAntes: data.usouERPAntes,
			nomeSistemaERP: data.nomeSistemaERP,
			recursosImportantes: recursos.join(', '), // Convertendo array para string
			orcamentoERP: data.orcamentoERP,
			agendarDemonstracao: data.agendarDemonstracao,
			OrcamentoParcelas: data.OrcamentoParcelas,
		};

		emailjs.send(serviceID, templateID, templateParams, userID).then(
			(response) => {
				console.log(
					'Email enviado com sucesso!',
					response.status,
					response.text
				);

				reset();

				setModalOpen(true);
			},
			(err) => {
				console.error('Erro ao enviar email:', err);
			}
		);
	};

	const ResponsiveInputLabel = styled(InputLabel)(({ theme }) => ({
		fontSize: '1rem', // Tamanho padrão para telas maiores
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.875rem', // Ajusta a fonte para dispositivos móveis
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.75rem', // Ajusta ainda mais para telas menores
		},
	}));

	return (
		<>
			<>
				<section className="bg-ciano relative px-4 " id="orcamento">
					<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 relative pb-48 items-baseline gap-4">
						<h2 className="text-2xl font-bold text-cinza mb-0 mt-2">
							Faça um
						</h2>
						<h1 className="text-4xl text-white font-bold mt-16">
							Orçamento
						</h1>
						<p className="text-white w-full text-base md:text-lg mt-6 md:w-[60%]">
							Quer saber mais sobre nossas soluções ou discutir
							como podemos ajudar o seu negócio a crescer? Estamos
							aqui para responder às suas dúvidas e oferecer o
							suporte que você precisa.
						</p>
					</div>
				</section>
				;
			</>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' }, // Alinha vertical em telas pequenas e horizontal em maiores
					gap: 2,
					width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
					maxWidth: '900px', // Limita a largura máxima do formulário
					mx: 'auto',
					justifyContent: 'center',
					alignItems: 'center',
					px: 2,
					padding: { xs: 2, md: 4 },
					boxSizing: 'border-box',
				}}
			>
				<section className="max-w-7xl mx-auto pb-44 pt-20">
					<div className="bg-white max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[498px_770px] gap-0 relative items-center top-[-250px] h-auto w-full">
						<img
							src={background}
							alt="imagem de um prédio"
							className="hidden lg:block lg:w-full lg:h-full object-cover m-0 p-0"
						/>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="p-6 w-full h-auto max-w-[900px] mx-auto"
						>
							<p className="font-extrabold border-l-8 border-ciano pl-2 mb-8 mt-6 text-lg md:text-xl lg:text-2xl">
								PREENCHA COM SEUS DADOS
							</p>
							<Controller
								name="nomeEmpresa"
								control={control}
								rules={{
									required: 'Nome da empresa é obrigatório',
								}}
								render={({ field }) => (
									<TextField
										{...field}
										label="Nome da empresa*"
										variant="outlined"
										fullWidth
										InputProps={{
											style: { fontSize: '14px' },
										}}
										InputLabelProps={{
											style: { fontSize: '14px' },
										}}
										margin="normal"
										error={!!errors.nomeEmpresa}
										helperText={errors.nomeEmpresa?.message}
									/>
								)}
							/>
							<Controller
								name="nomeResponsavel"
								control={control}
								rules={{
									required:
										'Nome do responsável é obrigatório',
								}}
								render={({ field }) => (
									<TextField
										{...field}
										label="Nome do responsável*"
										variant="outlined"
										fullWidth
										InputProps={{
											style: { fontSize: '14px' },
										}}
										InputLabelProps={{
											style: { fontSize: '14px' },
										}}
										margin="normal"
										error={!!errors.nomeResponsavel}
										helperText={
											errors.nomeResponsavel?.message
										}
									/>
								)}
							/>
							<Controller
								name="emailContato"
								control={control}
								rules={{
									required: 'E-mail é obrigatório',
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.(com|com\.br)$/,
										message:
											'O e-mail deve ter a extensão .com ou .com.br',
									},
								}}
								render={({ field }) => (
									<TextField
										{...field}
										label="E-mail de contato*"
										variant="outlined"
										fullWidth
										InputProps={{
											style: { fontSize: '14px' },
										}}
										InputLabelProps={{
											style: { fontSize: '14px' },
										}}
										margin="normal"
										error={!!errors.emailContato}
										helperText={
											errors.emailContato?.message
										}
									/>
								)}
							/>
							<Controller
								name="telefone"
								control={control}
								rules={{ required: 'Telefone é obrigatório' }}
								render={({ field }) => (
									<InputMask
										{...field}
										mask="(99) 99999-9999" // Máscara de telefone (ajuste conforme necessário)
										onChange={(e) => field.onChange(e)}
									>
										{() => (
											<TextField
												label="Telefone (com WhatsApp)*"
												variant="outlined"
												fullWidth
												inputRef={field.ref}
												InputProps={{
													style: { fontSize: '14px' },
												}}
												InputLabelProps={{
													style: { fontSize: '14px' },
												}}
												margin="normal"
												error={!!errors.telefone}
												helperText={
													errors.telefone?.message
												}
											/>
										)}
									</InputMask>
								)}
							/>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.faturamentoAnual}
							>
								<ResponsiveInputLabel>
									Faturamento anual estimado*
								</ResponsiveInputLabel>
								<Controller
									name="faturamentoAnual"
									control={control}
									rules={{
										required:
											'Selecione o faturamento anual',
									}}
									render={({ field }) => (
										<Select
											{...field}
											label="Faturamento anual estimado*"
										>
											<MenuItem value="Menos de R$ 1 milhão">
												Menos de R$ 1 milhão
											</MenuItem>
											<MenuItem value="De R$ 1 milhão a R$ 3 milhões">
												De R$ 1 milhão a R$ 3 milhões
											</MenuItem>
											<MenuItem value="De R$ 3 milhões a R$ 10 milhões">
												De R$ 3 milhões a R$ 10 milhões
											</MenuItem>
											<MenuItem value="De R$ 10 milhões a R$ 50 milhões">
												De R$ 10 milhões a R$ 50 milhões
											</MenuItem>
											<MenuItem value="Acima de R$ 50 milhões">
												Acima de R$ 50 milhões
											</MenuItem>
										</Select>
									)}
								/>
								{errors.faturamentoAnual && (
									<FormHelperText>
										{errors.faturamentoAnual.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.colaboradores}
							>
								<ResponsiveInputLabel>
									Possui quantos colaboradores?*
								</ResponsiveInputLabel>
								<Controller
									name="colaboradores"
									control={control}
									rules={{
										required:
											'Selecione a quantidade de colaboradores',
									}}
									render={({ field }) => (
										<Select
											{...field}
											label="Possui quantos colaboradores?*"
										>
											<MenuItem value="1-2">1-2</MenuItem>
											<MenuItem value="3-5">3-5</MenuItem>
											<MenuItem value="6-10">
												6-10
											</MenuItem>
											<MenuItem value="11-20">
												11-20
											</MenuItem>
											<MenuItem value="Mais de 20">
												Mais de 20
											</MenuItem>
										</Select>
									)}
								/>
								{errors.colaboradores && (
									<FormHelperText>
										{errors.colaboradores.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.modulosERP}
							>
								<FormLabel>
									Quais módulos do ERP você está interessado?*
								</FormLabel>
								<Controller
									name="modulosERP"
									control={control}
									rules={{
										validate: {
											atLeastOne: (value) =>
												value.length > 0 ||
												'Selecione pelo menos um item',
										},
									}}
									render={({ field }) => (
										<FormGroup>
											<Box
												sx={{
													display: 'grid',
													gridTemplateColumns: {
														xs: 'repeat(2, 1fr)', // 2 colunas em dispositivos pequenos (telas xs)
														md: 'repeat(3, 1fr)', // 3 colunas em dispositivos médios em diante
													},
													gap: 2, // Espaçamento entre os itens
												}}
											>
												{[
													'Estoque',
													'Compras',
													'NF Entrada',
													'Produção',
													'Vendas',
													'NF Saída',
													'NF Eletrônica',
													'Transporte (CT-e ou MDF-e)',
													'Contrato Locação',
													'Tesouraria',
													'Fiscal',
													'Patrimônio',
													'Análise de Dados (relatórios e BI)',
													'Controle de Embalagens Retornáveis',
													'Agendador de Tarefas',
													'Aplicativo de Vendas Android',
													'Aplicativo de Coleta de Assinatura Android',
												].map((module) => (
													<FormControlLabel
														key={module}
														control={
															<Checkbox
																value={module}
																checked={field.value.includes(
																	module
																)}
																onChange={(
																	e
																) => {
																	const value =
																		e.target
																			.value;
																	if (
																		field.value.includes(
																			value
																		)
																	) {
																		field.onChange(
																			field.value.filter(
																				(
																					item: string
																				) =>
																					item !==
																					value
																			)
																		);
																	} else {
																		field.onChange(
																			[
																				...field.value,
																				value,
																			]
																		);
																	}
																}}
															/>
														}
														label={module}
													/>
												))}
												{/* Adicionando o módulo Financeiro com submódulos */}
												<SimpleTreeView>
													<TreeItem
														itemId="financeiro"
														label="Financeiro"
													>
														<TreeItem
															itemId="contas"
															label={
																<FormControlLabel
																	control={
																		<Checkbox
																			value="Contas a Pagar"
																			checked={field.value.includes(
																				'Contas a Pagar'
																			)}
																			onChange={(
																				e
																			) => {
																				const value =
																					e
																						.target
																						.value;
																				if (
																					field.value.includes(
																						value
																					)
																				) {
																					field.onChange(
																						field.value.filter(
																							(
																								item: string
																							) =>
																								item !==
																								value
																						)
																					);
																				} else {
																					field.onChange(
																						[
																							...field.value,
																							value,
																						]
																					);
																				}
																			}}
																		/>
																	}
																	label="Contas a Pagar"
																/>
															}
														/>
														<TreeItem
															itemId="contasReceber"
															label="Contas a Receber"
														>
															<TreeItem
																itemId="boleto"
																label={
																	<FormControlLabel
																		control={
																			<Checkbox
																				value="Emissão de Boleto"
																				checked={field.value.includes(
																					'Emissão de Boleto'
																				)}
																				onChange={(
																					e
																				) => {
																					const value =
																						e
																							.target
																							.value;
																					if (
																						field.value.includes(
																							value
																						)
																					) {
																						field.onChange(
																							field.value.filter(
																								(
																									item: string
																								) =>
																									item !==
																									value
																							)
																						);
																					} else {
																						field.onChange(
																							[
																								...field.value,
																								value,
																							]
																						);
																					}
																				}}
																			/>
																		}
																		label="Emissão de Boleto"
																	/>
																}
															/>
															<TreeItem
																itemId="reguaCobranca"
																label={
																	<FormControlLabel
																		control={
																			<Checkbox
																				value="Régua de Cobrança"
																				checked={field.value.includes(
																					'Régua de Cobrança'
																				)}
																				onChange={(
																					e
																				) => {
																					const value =
																						e
																							.target
																							.value;
																					if (
																						field.value.includes(
																							value
																						)
																					) {
																						field.onChange(
																							field.value.filter(
																								(
																									item: string
																								) =>
																									item !==
																									value
																							)
																						);
																					} else {
																						field.onChange(
																							[
																								...field.value,
																								value,
																							]
																						);
																					}
																				}}
																			/>
																		}
																		label="Régua de Cobrança"
																	/>
																}
															/>
														</TreeItem>
													</TreeItem>
												</SimpleTreeView>
											</Box>
											{errors.modulosERP && (
												<FormHelperText>
													{errors.modulosERP.message}
												</FormHelperText>
											)}
										</FormGroup>
									)}
								/>
							</FormControl>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.usuarios}
							>
								<ResponsiveInputLabel>
									Quantos usuários irão utilizar o sistema?*
								</ResponsiveInputLabel>
								<Controller
									name="usuarios"
									control={control}
									rules={{
										required:
											'Selecione a quantidade de usuários',
									}}
									render={({ field }) => (
										<Select
											{...field}
											label="Quantos usuários irão utilizar o sistema?*"
										>
											<MenuItem value="1-2">1-5</MenuItem>
											<MenuItem value="3-5">
												6-10
											</MenuItem>
											<MenuItem value="6-10">
												11-15
											</MenuItem>
											<MenuItem value="Mais de 20">
												Mais de 15
											</MenuItem>
										</Select>
									)}
								/>
								{errors.usuarios && (
									<FormHelperText>
										{errors.usuarios.message}
									</FormHelperText>
								)}
							</FormControl>
							<Controller
								name="sistemaAtual"
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label="Qual seu sistema de gestão atual?"
										variant="outlined"
										fullWidth
										InputProps={{
											style: { fontSize: '14px' },
										}}
										InputLabelProps={{
											style: { fontSize: '14px' },
										}}
										margin="normal"
									/>
								)}
							/>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.prazoImplementacao}
							>
								<ResponsiveInputLabel>
									Prazo para implementação do ERP*
								</ResponsiveInputLabel>
								<Controller
									name="prazoImplementacao"
									control={control}
									defaultValue=""
									rules={{ required: 'Selecione um prazo' }}
									render={({ field }) => (
										<Select
											{...field}
											label="Prazo para implementação do ERP*"
										>
											<MenuItem value="Imediato">
												Imediato
											</MenuItem>
											<MenuItem value="1 a 3 meses">
												1 a 3 meses
											</MenuItem>
											<MenuItem value="3 a 6 meses">
												3 a 6 meses
											</MenuItem>
											<MenuItem value="Mais de 6 meses">
												Mais de 6 meses
											</MenuItem>
										</Select>
									)}
								/>
								{errors.prazoImplementacao && (
									<FormHelperText>
										{errors.prazoImplementacao.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								fullWidth
								margin="normal"
								defaultValue=""
								error={!!errors.usouERPAntes}
							>
								<FormLabel>
									Já utilizou algum sistema ERP antes?*
								</FormLabel>
								<Controller
									name="usouERPAntes"
									control={control}
									rules={{ required: 'Selecione uma opção' }}
									render={({ field }) => (
										<RadioGroup {...field} row>
											<FormControlLabel
												value="Sim"
												control={<Radio />}
												label="Sim"
											/>
											<FormControlLabel
												value="Não"
												control={<Radio />}
												label="Não"
											/>
										</RadioGroup>
									)}
								/>
								{errors.usouERPAntes && (
									<FormHelperText>
										{errors.usouERPAntes.message}
									</FormHelperText>
								)}
							</FormControl>
							{watch('usouERPAntes') === 'Sim' && (
								<Controller
									name="nomeSistemaERP"
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label="Qual ERP utilizou?"
											variant="outlined"
											fullWidth
											InputProps={{
												style: { fontSize: '14px' },
											}}
											InputLabelProps={{
												style: { fontSize: '14px' },
											}}
											margin="normal"
										/>
									)}
								/>
							)}
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.recursosImportantes}
							>
								<FormLabel className="text-base md:text-lg lg:text-xl">
									Quais recursos são mais importantes para
									você?*
								</FormLabel>
								<Controller
									name="recursosImportantes"
									control={control}
									rules={{
										validate: {
											atLeastOne: (value) =>
												value.length > 0 ||
												'Selecione pelo menos um item',
										},
									}}
									render={({ field }) => (
										<FormGroup>
											<Box
												sx={{
													display: 'grid',
													gridTemplateColumns:
														'repeat(2, 1fr)', // 2 colunas
													gap: 2, // espaçamento entre os itens
												}}
											>
												{[
													'Automação de cobranças',
													'Controle de produção',
													'Emissão de notas fiscais',
													'Gestão de estoque',
													'Integração com e-commerce',
													'Outros',
												].map((resource) => (
													<FormControlLabel
														key={resource}
														control={
															<Checkbox
																value={resource}
																checked={field.value.includes(
																	resource
																)}
																onChange={(
																	e
																) => {
																	const value =
																		e.target
																			.value;
																	if (
																		value ===
																		'Outros'
																	) {
																		setShowOtherField(
																			e
																				.target
																				.checked
																		); // Exibe o campo "Outros"
																	}
																	if (
																		field.value.includes(
																			value
																		)
																	) {
																		field.onChange(
																			field.value.filter(
																				(
																					item
																				) =>
																					item !==
																					value
																			)
																		);
																	} else {
																		field.onChange(
																			[
																				...field.value,
																				value,
																			]
																		);
																	}
																}}
															/>
														}
														label={resource}
													/>
												))}
											</Box>
										</FormGroup>
									)}
								/>

								{showOtherField && (
									<TextField
										className="text-base md:text-lg lg:text-xl"
										label="Especifique outros recursos"
										variant="outlined"
										margin="normal"
										fullWidth
										value={otherResource} // Valor do campo "Outros"
										onChange={(e) =>
											setOtherResource(e.target.value)
										} // Atualiza o valor de "Outros"
									/>
								)}

								{errors.recursosImportantes && (
									<FormHelperText>
										{errors.recursosImportantes.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.OrcamentoParcelas}
							>
								<ResponsiveInputLabel>
									Qual é o seu orçamento (mensalidade)?*
								</ResponsiveInputLabel>
								<Controller
									name="OrcamentoParcelas"
									control={control}
									rules={{
										required:
											'Selecione um orçamento aproximado',
									}}
									render={({ field }) => (
										<Select
											{...field}
											labelId="orcamento-label"
											value={field.value || ''}
											label="Qual é o seu orçamento (mensalidade)?*"
										>
											<MenuItem value="500">
												Até R$ 500,00
											</MenuItem>
											<MenuItem value="500 a 1000">
												De R$ 500,00 a R$ 1.000,00
											</MenuItem>
											<MenuItem value="1000 a 1500">
												De R$ 1.000,00 a R$ 1.500,00
											</MenuItem>
											<MenuItem value="1500 a 2000">
												De R$ 1.500,00 a R$ 2.000,00
											</MenuItem>
											<MenuItem value="2000 a 2500">
												De R$ 2.000,00 a R$ 2.500,00
											</MenuItem>
											<MenuItem value="2500 a 3000">
												De R$ 2.500,00 a R$ 3.000,00
											</MenuItem>
											<MenuItem value="3000 a 3500">
												De R$ 3.000,00 a R$ 3.500,00
											</MenuItem>
											<MenuItem value="3500 a 4000">
												De R$ 3.500,00 a R$ 4.000,00
											</MenuItem>
											<MenuItem value="4000 a 4500">
												De R$ 4.000,00 a R$ 4.500,00
											</MenuItem>
											<MenuItem value="4500 a 5000">
												De R$ 4.500,00 a R$ 5.000,00
											</MenuItem>
											<MenuItem value="Acima de 5000">
												Acima de R$ 5.000,00
											</MenuItem>
										</Select>
									)}
								/>
								{errors.OrcamentoParcelas && (
									<FormHelperText>
										{errors.OrcamentoParcelas.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl
								fullWidth
								margin="normal"
								error={!!errors.agendarDemonstracao}
							>
								<ResponsiveInputLabel>
									Gostaria de agendar uma demonstração?*
								</ResponsiveInputLabel>
								<Controller
									name="agendarDemonstracao"
									control={control}
									rules={{
										required:
											'Selecione se gostaria ou não de agendar uma demonstração',
									}}
									render={({ field }) => (
										<Select
											{...field}
											label="Gostaria de agendar uma demonstração?*"
										>
											<MenuItem value="Sim">Sim</MenuItem>
											<MenuItem value="Não">Não</MenuItem>
										</Select>
									)}
								/>
								{errors.agendarDemonstracao && (
									<FormHelperText>
										{errors.agendarDemonstracao.message}
									</FormHelperText>
								)}
							</FormControl>
							<Button
								sx={{
									backgroundColor: '#2e5077',
									marginTop: '1rem',
									width: { xs: '60%', sm: '40%' },
									height: '3.5rem',
									fontSize: { xs: '12px', sm: '14px' }, // Ajusta o tamanho da fonte do botão em diferentes tamanhos de tela
									padding: {
										xs: '8px 16px',
										sm: '10px 24px',
									},
									fontWeight: 'bold',
									transition: 'all 0.3s ease',
									'&:hover': {
										backgroundColor: '#21B2D8',
										transform: 'scale(1.05)',
									},
								}}
								type="submit"
								variant="contained"
							>
								SOLICITAR ORÇAMENTO
							</Button>
						</form>

						{isModalOpen && (
							<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
								<div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg text-center mx-4">
									<h2 className="text-xl md:text-2xl font-bold mb-4">
										Email enviado
									</h2>
									<p className="mb-6 text-sm md:text-base">
										Orçamento solicitado com sucesso!
									</p>
									<button
										onClick={() => setModalOpen(false)}
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
									>
										Fechar
									</button>
								</div>
							</div>
						)}
					</div>
				</section>
			</Box>
			<footer className="bg-ciano py-2">
				<div className="max-w-7xl mx-auto flex items-center justify-between text-white">
					<div className="text-center md:text-left mb-4 md:mb-0">
						<img src={logo} alt="Logotipo" className="h-10" />
					</div>

					<div className="text-center">
						<p className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
							PenseSoft © Todos os direitos reservados
						</p>
					</div>

					<div className="text-center relative">
						<button className="bg-azul-escuro text-ciano rounded-lg p-3 relative -top-6">
							<ScrollLink
								to="orcamento"
								smooth={true}
								duration={500}
							>
								<ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
							</ScrollLink>
						</button>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Orcamento;
