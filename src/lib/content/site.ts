import flavioPortrait from '$lib/assets/brand/partners/flavio-ferretti-3.png';
import nathaliaPortrait from '$lib/assets/brand/partners/nathalia-ferretti-3.jpeg';

export const brand = {
	name: 'Ferretti Advogados',
	siteUrl: 'https://advocaciaferretti.com.br',
	domain: 'advocaciaferretti.com.br'
} as const;

export const navItems = [
	{ href: '#escritorio', label: 'Escritório' },
	{ href: '#atuacao', label: 'Atuação' },
	{ href: '#diferenciais', label: 'Diferenciais' },
	{ href: '#socios', label: 'Sócios' },
	{ href: '#contato', label: 'Contato' }
] as const;

export const contact = {
	whatsappLabel: 'WhatsApp',
	whatsappNumber: '(11) 99507-7294',
	whatsappHref:
		'https://wa.me/5511995077294?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Advocacia%20Ferretti.',
	email: 'contato.ferrettiadvogados@gmail.com',
	emailHref: 'mailto:contato.ferrettiadvogados@gmail.com',
	emails: [
		{
			label: 'contato.ferrettiadvogados@gmail.com',
			href: 'mailto:contato.ferrettiadvogados@gmail.com'
		}
	],
	instagram: '@ferretti.advs',
	instagramHref: 'https://www.instagram.com/ferretti.advs',
	service: 'Atendimento presencial em São Paulo e online para todo o Brasil',
	hours: 'Atendimento mediante agendamento'
} as const;

export const home = {
	title: brand.name,
	subtitle: 'Advocacia e consultoria jurídica',
	description:
		'Atuação especializada em Direito do Trabalho, com atendimento presencial em São Paulo e online para todo o Brasil.',
	paragraphs: [
		'A Ferretti Advogados presta assessoria jurídica a trabalhadores, profissionais e empresas, atuando tanto na esfera consultiva quanto contenciosa.',
		'Com atendimento nacional e condução direta pelos sócios, o escritório desenvolve soluções jurídicas pautadas pela técnica, responsabilidade e atenção às particularidades de cada demanda.',
		'Unimos experiência prática, atendimento próximo e atuação estratégica para proteger direitos, prevenir riscos e construir soluções jurídicas seguras para trabalhadores e empresas.'
	],
	emotional: ['Atendimento trabalhista especializado', 'Condução direta pelos sócios']
} as const;

export const office = {
	kicker: 'O escritório',
	title: 'Atuação técnica, transparente e próxima ao cliente.',
	paragraphs: [
		'Nosso escritório foi constituído com o propósito de oferecer uma atuação jurídica técnica, transparente, responsável e próxima de quem busca nossos serviços. A condução dos trabalhos é realizada diretamente pelos sócios, com foco na análise individualizada de cada caso e na construção de soluções adequadas às suas particularidades.',
		'Nosso trabalho é pautado pela excelência técnica, pela atenção aos detalhes, pela compreensão das necessidades de cada cliente e pelo comprometimento com a condução responsável de cada demanda.',
		'Com essa visão, a Ferretti Advogados reúne experiência, atendimento humanizado e atuação diligente, sempre pautados pela ética, transparência e pelo compromisso com a melhor solução para cada caso.'
	]
} as const;

export const practiceAreas = [
	{
		audience: 'Para trabalhadores',
		title: 'Defesa de direitos trabalhistas',
		description: 'Acompanhamento individualizado para trabalhadores e profissionais.',
		items: [
			'Reclamações trabalhistas',
			'Rescisão indireta',
			'Justa causa',
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
			'Atendimento próximo e acompanhamento direto, sem perda de contexto entre o primeiro contato e a estratégia jurídica.'
	},
	{
		icon: 'shield',
		title: 'Análise técnica',
		description:
			'Cada caso é avaliado com atenção às provas, riscos, alternativas e consequências práticas de cada caminho.'
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
			'Comunicação objetiva, transparência nas etapas e soluções construídas de acordo com a realidade do cliente.'
	}
] as const;

export const partners = [
	{
		name: 'Flávio Ferretti',
		initials: 'FF',
		src: flavioPortrait,
		role: 'Sócio | Advogado trabalhista',
		oab: 'OAB/SP 238.245',
		summary: 'Advogado com 17 anos de atuação profissional exclusivamente na área trabalhista.',
		description:
			'Ao longo de sua trajetória, participou da condução de milhares de audiências e negociações, desenvolvendo ampla experiência prática na resolução de conflitos e na representação de clientes em demandas judiciais.'
	},
	{
		name: 'Nathália Ferretti',
		initials: 'NF',
		src: nathaliaPortrait,
		role: 'Sócia | Advogada trabalhista',
		oab: 'OAB/SP 380.195',
		summary:
			'Advogada trabalhista desde 2018, com atuação voltada à assessoria consultiva e contenciosa de trabalhadores e empresas.',
		description:
			'Especializada em Direito e Processo do Trabalho, atua na condução de demandas judiciais e na elaboração de estratégias jurídicas voltadas à prevenção e solução de conflitos, sempre com atenção às particularidades de cada caso.'
	}
] as const;

export const partnersIntro =
	'A Ferretti Advogados nasceu da união de duas trajetórias construídas com dedicação à advocacia trabalhista, reunindo experiência prática, atendimento próximo e atuação técnica.';

export const seo = {
	title: `${brand.name} | Advocacia Trabalhista em São Paulo`,
	description:
		'Ferretti Advogados: advocacia trabalhista em São Paulo, com atendimento presencial e consultoria online para trabalhadores e empresas em todo o Brasil.',
	image: '/og-image.png',
	imageAlt: 'Ferretti Advogados - advocacia trabalhista estratégica',
	locale: 'pt_BR'
} as const;
