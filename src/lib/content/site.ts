export const navItems = [
	{ href: '#escritorio', label: 'Escritório' },
	{ href: '#atuacao', label: 'Atuação' },
	{ href: '#diferenciais', label: 'Diferenciais' },
	{ href: '#socios', label: 'Sócios' },
	{ href: '#contato', label: 'Contato' }
] as const;

export const contact = {
	whatsappLabel: 'WhatsApp',
	whatsappHref:
		'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Ferretti%20Advogados.',
	email: 'email@exemplo.com',
	emailHref: 'mailto:email@exemplo.com',
	instagram: '@ferrettiadvogados',
	instagramHref: 'https://instagram.com/ferrettiadvogados',
	service: 'Atendimento presencial em São Paulo e online para todo o Brasil',
	hours: 'Atendimento mediante agendamento'
} as const;

export const home = {
	title: 'Ferretti Advogados',
	subtitle: 'Advocacia e consultoria jurídica',
	description:
		'Advocacia e consultoria jurídica com atuação especializada em Direito do Trabalho, com atendimento presencial em São Paulo e online para todo o Brasil.',
	paragraphs: [
		'O Ferretti Advogados presta assessoria jurídica a trabalhadores, profissionais e pequenas empresas, atuando tanto na esfera consultiva quanto contenciosa.',
		'Com atendimento nacional e condução direta pelos sócios, o escritório desenvolve soluções jurídicas pautadas pela técnica, responsabilidade e atenção às particularidades de cada demanda.',
		'Unimos experiência prática, atendimento próximo e atuação estratégica para proteger direitos, prevenir riscos e construir soluções jurídicas seguras para pessoas e empresas.'
	],
	emotional: ['Atendimento trabalhista especializado', 'Condução direta pelos sócios']
} as const;

export const office = {
	kicker: 'O escritório',
	title: 'Atuação técnica, transparente e próxima ao cliente.',
	paragraphs: [
		'Nosso escritório foi constituído com o propósito de oferecer atuação jurídica técnica, transparente, responsável e próxima ao cliente. A condução dos trabalhos é realizada diretamente pelos sócios, com foco na análise individualizada de cada demanda e na construção de soluções adequadas às particularidades de cada caso.',
		'Nosso trabalho é pautado na técnica, na atenção aos detalhes, na compreensão das necessidades do cliente e no comprometimento com a condução responsável de cada demanda.',
		'Com essa visão, o Ferretti Advogados reúne experiência profissional, atuação humanizada, profissional e diligente, sempre pautados pela ética, transparência e respeito às normas que regem a profissão.'
	]
} as const;

export const practiceAreas = [
	{
		audience: 'Para pessoas',
		title: 'Defesa de direitos trabalhistas',
		description: 'Acompanhamento individualizado para trabalhadores e profissionais.',
		items: [
			'Reclamações trabalhistas',
			'Rescisão indireta',
			'Horas extras',
			'Assédio moral',
			'Verbas rescisórias',
			'Acidentes de trabalho'
		]
	},
	{
		audience: 'Para empresas',
		title: 'Consultoria e contencioso',
		description: 'Prevenção de riscos, defesa estratégica e adequação de procedimentos.',
		items: [
			'Defesa em reclamações trabalhistas',
			'Consultoria preventiva para prevenção de riscos',
			'Auditoria trabalhista',
			'Treinamentos',
			'Negociação de acordos',
			'Elaboração, revisão e análise de instrumentos contratuais',
			'Elaboração de contratos e políticas internas'
		]
	}
] as const;

export const differentiators = [
	{
		icon: 'handshake',
		title: 'Condução direta pelos sócios',
		description:
			'As demandas são acompanhadas de perto por profissionais experientes, sem perda de contexto entre o primeiro atendimento e a estratégia jurídica.'
	},
	{
		icon: 'shield',
		title: 'Técnica e responsabilidade',
		description:
			'Cada caso é analisado com atenção às provas, riscos, alternativas e consequências práticas de cada caminho.'
	},
	{
		icon: 'scale',
		title: 'Especialização trabalhista',
		description:
			'Atuação concentrada em Direito do Trabalho, tanto na esfera consultiva quanto contenciosa.'
	},
	{
		icon: 'file',
		title: 'Clareza no processo',
		description:
			'Comunicação objetiva, transparência nas etapas e soluções construídas de acordo com a realidade de cada cliente.'
	}
] as const;

export const partners = [
	{
		name: 'Flávio Ferretti',
		initials: 'FF',
		role: 'Sócio | Advogado trabalhista',
		summary: 'Advogado com 18 anos de atuação profissional exclusivamente na área trabalhista.',
		description:
			'Ao longo de sua trajetória, participou da condução de milhares de audiências e negociações, desenvolvendo ampla experiência prática na resolução de conflitos e na representação de clientes em demandas judiciais.'
	},
	{
		name: 'Nathália Ferretti',
		initials: 'NF',
		role: 'Sócia | Advogada trabalhista',
		summary:
			'Advogada trabalhista desde 2018, com atuação voltada à assessoria consultiva e contenciosa de trabalhadores e empresas.',
		description:
			'Especializada em Direito e Processo do Trabalho, atua na condução de demandas judiciais e na elaboração de estratégias jurídicas voltadas à prevenção e solução de conflitos, sempre com atenção às particularidades de cada caso.'
	}
] as const;

export const partnersIntro =
	'O Ferretti Advogados nasceu da união de duas trajetórias construídas com dedicação à advocacia trabalhista. Após anos de atuação em diferentes frentes da profissão, reunimos nossa experiência para criar um escritório comprometido com aquilo que consideramos essencial: atendimento próximo, atuação técnica e soluções jurídicas responsáveis.';

export const seo = {
	description:
		'Ferretti Advogados: advocacia e consultoria jurídica especializada em Direito do Trabalho, com atendimento presencial em São Paulo e online para todo o Brasil.'
} as const;
