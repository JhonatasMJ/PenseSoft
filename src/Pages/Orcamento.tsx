import { useState } from 'react';
import background from '../assets/imgs/bg-1.png';
import { useForm, Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
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

// Definição da interface para os valores do formulário
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
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<>
			<>
				<section className="bg-ciano relative " id="orcamento">
					<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 relative pb-48 items-baseline gap-4">
						<h2 className="text-1xl font-bold text-cinza mb-0 mt-2">
							Faça um
						</h2>
						<h1 className="text-4xl text-white font-bold">
							Orçamento
						</h1>
						<p className="text-black text-1xl mt-6 w-[52%]">
							Quer saber mais sobre nossas soluções ou discutir
							como podemos ajudar o seu negócio a crescer? Estamos
							aqui para responder às suas dúvidas e oferecer o
							suporte que você precisa.
						</p>
					</div>
				</section>
				;
			</>

			<section className="max-w-7xl mx-auto pb-44 pt-20">
				<div className="bg-white max-w-7xl mx-auto grid grid-cols-[498px_770px] gap-0 relative items-center top-[-220px] h-auto w-full">
					<img
						src={background}
						alt="imagem de um prédio"
						className="w-full h-full object-cover m-0 p-0"
					/>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="p-6 w-full h-full"
					>
						<p className="font-extrabold border-l-8 border-ciano pl-2 mb-8 mt-6">
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
								required: 'Nome do responsável é obrigatório',
							}}
							render={({ field }) => (
								<TextField
									{...field}
									label="Nome do responsável*"
									variant="outlined"
									fullWidth
									margin="normal"
									error={!!errors.nomeResponsavel}
									helperText={errors.nomeResponsavel?.message}
								/>
							)}
						/>
						<Controller
							name="emailContato"
							control={control}
							rules={{ required: 'E-mail é obrigatório' }}
							render={({ field }) => (
								<TextField
									{...field}
									label="E-mail de contato*"
									variant="outlined"
									fullWidth
									margin="normal"
									error={!!errors.emailContato}
									helperText={errors.emailContato?.message}
								/>
							)}
						/>
						<Controller
							name="telefone"
							control={control}
							rules={{ required: 'Telefone é obrigatório' }}
							render={({ field }) => (
								<TextField
									{...field}
									label="Telefone (com WhatsApp)*"
									variant="outlined"
									fullWidth
									margin="normal"
									error={!!errors.telefone}
									helperText={errors.telefone?.message}
								/>
							)}
						/>
						<FormControl
							fullWidth
							margin="normal"
							error={!!errors.faturamentoAnual}
						>
							<InputLabel>Faturamento anual estimado*</InputLabel>
							<Controller
								name="faturamentoAnual"
								control={control}
								rules={{
									required: 'Selecione o faturamento anual',
								}}
								render={({ field }) => (
									<Select
										{...field}
										label="Faturamento anual estimado*"
									>
										<MenuItem value="Até R$ 1 milhão">
											Até R$ 1 milhão
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
							<InputLabel>
								Quantos colaboradores trabalham no escritório?*
							</InputLabel>
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
										label="Quantos colaboradores trabalham no escritório?*"
									>
										<MenuItem value="1-2">1-2</MenuItem>
										<MenuItem value="3-5">3-5</MenuItem>
										<MenuItem value="6-10">6-10</MenuItem>
										<MenuItem value="11-20">11-20</MenuItem>
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
											'Contas a Receber',
											'Contas a Pagar',
											'Tesouraria',
											'Fiscal',
											'Patrimônio',
											'Análise de Dados (relatórios e BI)',
											'Régua de Cobrança',
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
														onChange={(e) => {
															const value =
																e.target.value;
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
																field.onChange([
																	...field.value,
																	value,
																]);
															}
														}}
													/>
												}
												label={module}
											/>
										))}
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
							error={!!errors.colaboradores}
						>
							<InputLabel>
								Quantos usuários irão utilizar o sistema
								inicialmente?*
							</InputLabel>
							<Controller
								name="colaboradores"
								control={control}
								rules={{
									required:
										'Selecione a quantidade de usuários',
								}}
								render={({ field }) => (
									<Select
										{...field}
										label="Quantos usuários irão utilizar o sistema inicialmente?"
									>
										<MenuItem value="1-2">1-5</MenuItem>
										<MenuItem value="3-5">6-10</MenuItem>
										<MenuItem value="6-10">11-15</MenuItem>
										<MenuItem value="Mais de 20">
											Mais de 15
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
						<Controller
							name="sistemaAtual"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									label="Qual o sistema de gestão atual da sua empresa?"
									variant="outlined"
									fullWidth
									margin="normal"
								/>
							)}
						/>
						<FormControl
							fullWidth
							margin="normal"
							error={!!errors.prazoImplementacao}
						>
							<InputLabel>
								Prazo estimado para implementação do ERP*
							</InputLabel>
							<Controller
								name="prazoImplementacao"
								control={control}
								rules={{ required: 'Selecione um prazo' }}
								render={({ field }) => (
									<Select
										{...field}
										label="Prazo estimado para implementação do ERP*"
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
						<Controller
							name="conheceuEmpresa"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									label="Como conheceu nossa empresa?"
									variant="outlined"
									fullWidth
									margin="normal"
								/>
							)}
						/>
						<Controller
							name="desafioAtual"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									label="Qual o principal desafio que você enfrenta atualmente?"
									variant="outlined"
									fullWidth
									margin="normal"
								/>
							)}
						/>
						<FormControl
							fullWidth
							margin="normal"
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
							<FormLabel>
								Quais recursos são mais importantes para você?*
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
														onChange={(e) => {
															const value =
																e.target.value;
															if (
																value ===
																'Outros'
															) {
																setShowOtherField(
																	e.target
																		.checked
																);
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
																field.onChange([
																	...field.value,
																	value,
																]);
															}
														}}
													/>
												}
												label={resource}
											/>
										))}
									</FormGroup>
								)}
							/>
							{errors.recursosImportantes && (
								<FormHelperText>
									{errors.recursosImportantes.message}
								</FormHelperText>
							)}
						</FormControl>

						{showOtherField && (
							<FormControl fullWidth margin="normal">
								<Controller
									name="outrosRecursos"
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label="Quais?"
											variant="outlined"
											fullWidth
											margin="normal"
										/>
									)}
								/>
							</FormControl>
						)}
						<FormControl
							fullWidth
							margin="normal"
							error={!!errors.OrcamentoParcelas}
						>
							<InputLabel>
								Qual é o seu orçamento aproximado para um
								sistema ERP (mensalidade)?*
							</InputLabel>
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
										label="Qual é o seu orçamento aproximado para um sistema ERP (mensalidade)?*"
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
							error={!!errors.prazoImplementacao}
						>
							<InputLabel>
								Gostaria de agendar uma demonstração do
								sistema?*
							</InputLabel>
							<Controller
								name="prazoImplementacao"
								control={control}
								rules={{
									required:
										'Selecione se gostaria ou não de agendar uma demonstração',
								}}
								render={({ field }) => (
									<Select
										{...field}
										label="Gostaria de agendar uma demonstração do sistema?"
									>
										<MenuItem value="Sim">Sim</MenuItem>
										<MenuItem value="Não">Não</MenuItem>
									</Select>
								)}
							/>
							{errors.prazoImplementacao && (
								<FormHelperText>
									{errors.prazoImplementacao.message}
								</FormHelperText>
							)}
						</FormControl>
						<Button
							sx={{
								backgroundColor: '#2e5077',
								marginTop: '1rem',
								width: '40%',
								height: '3.5rem',
								fontWeight: 'bold',
								fontSize: '1.2rem',
								transition: 'all 0.3s ease', // Transição suave
								'&:hover': {
									backgroundColor: '#21B2D8', // Cor ao passar o mouse
									transform: 'scale(1.05)', // Aumenta o tamanho em 5%
								},
							}}
							type="submit"
							variant="contained"
						>
							ENVIAR ORÇAMENTO
						</Button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Orcamento;
