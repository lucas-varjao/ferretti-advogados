<script lang="ts">
	import {
		BriefcaseBusiness,
		FileCheck,
		Mail,
		MapPin,
		MessageCircle,
		Scale,
		ShieldCheck,
		Users
	} from 'lucide-svelte';
	import logoLight from '$lib/assets/brand/logos/logo_ferretti_03.svg';
	import logoMark from '$lib/assets/brand/logos/logo_ferretti_05.svg';
	import Footer from '$lib/components/Footer.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import PartnerPortrait from '$lib/components/PartnerPortrait.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import ResponsiveNav from '$lib/components/ResponsiveNav.svelte';
	import {
		contact,
		differentiators,
		home,
		office,
		partners,
		partnersIntro,
		practiceAreas
	} from '$lib/content/site';

	const areaIcons = [Users, BriefcaseBusiness];
	const diffIcons = [Users, ShieldCheck, Scale, FileCheck];
</script>

<MetaTags title="Ferretti Advogados | Proposta 7 - Escuro Técnico" />

<main id="top" class="v7">
	<ResponsiveNav logo={logoLight} tone="dark" />

	<section class="hero">
		<Reveal>
			<p class="kicker">Advocacia e consultoria jurídica</p>
			<h1>Estratégia trabalhista com presença dos sócios.</h1>
			<p>{home.paragraphs[2]}</p>
			<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
				<MessageCircle size={18} /> Falar com o escritório
			</a>
		</Reveal>

		<Reveal delay={120}>
			<div class="brand-board">
				<img src={logoMark} alt="" aria-hidden="true" />
				<div>
					<span>Atuação</span>
					<strong>Direito do Trabalho</strong>
				</div>
				<div>
					<span>Formato</span>
					<strong>São Paulo e online</strong>
				</div>
			</div>
		</Reveal>
	</section>

	<section id="escritorio" class="section office">
		<Reveal>
			<p class="kicker">{office.kicker}</p>
			<h2>Técnica, contexto e responsabilidade.</h2>
		</Reveal>
		<div class="office-copy">
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 70}>
					<p>{paragraph}</p>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="section">
		<Reveal class="heading">
			<p class="kicker">Área de atuação</p>
			<h2>Duas frentes de atuação trabalhista.</h2>
		</Reveal>
		<div class="case-grid">
			{#each practiceAreas as area, index (area.audience)}
				<Reveal>
					{@const Icon = areaIcons[index]}
					<article>
						<Icon size={24} strokeWidth={1.8} />
						<p class="kicker">{area.audience}</p>
						<h3>{area.title}</h3>
						<p>{area.description}</p>
						<ul>
							{#each area.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="diferenciais" class="section proof">
		<Reveal class="heading">
			<p class="kicker">Diferenciais</p>
			<h2>Clareza para cada etapa.</h2>
		</Reveal>
		<div class="proof-list">
			{#each differentiators as item, index (item.title)}
				<Reveal delay={index * 60}>
					{@const Icon = diffIcons[index]}
					<article>
						<Icon size={22} strokeWidth={1.8} />
						<div>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="socios" class="section partners">
		<Reveal class="heading">
			<p class="kicker">Sócios</p>
			<h2>Atuação próxima e especializada.</h2>
			<p>{partnersIntro}</p>
		</Reveal>
		<div class="partner-grid">
			{#each partners as partner (partner.name)}
				<Reveal>
					<article>
						<PartnerPortrait name={partner.name} initials={partner.initials} variant="editorial" />
						<div>
							<span>{partner.role}</span>
							<h3>{partner.name}</h3>
							<p>{partner.summary}</p>
							<p>{partner.description}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="contato" class="section contact">
		<Reveal>
			<p class="kicker">Contato</p>
			<h2>Converse diretamente com o escritório.</h2>
		</Reveal>
		<Reveal>
			<div class="contact-panel">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={18} /> Abrir WhatsApp
				</a>
				<a href={contact.emailHref}><Mail size={18} /> {contact.email}</a>
				<span><MapPin size={18} /> {contact.service}</span>
			</div>
		</Reveal>
	</section>
</main>

<Footer tone="dark" />

<style>
	:global(.v7) {
		background:
			linear-gradient(
				120deg,
				transparent 0 44%,
				rgba(155, 141, 130, 0.12) 44% 45%,
				transparent 45%
			),
			linear-gradient(90deg, rgba(236, 227, 217, 0.06) 1px, transparent 1px),
			linear-gradient(rgba(236, 227, 217, 0.04) 1px, transparent 1px),
			radial-gradient(circle at 78% 12%, rgba(155, 141, 130, 0.28), transparent 26rem), #25211e;
		background-size:
			100% 100%,
			5rem 5rem,
			5rem 5rem,
			auto,
			auto;
		color: var(--ferretti-porcelain);
		min-height: 100vh;
	}

	:global(.v7 .hero),
	:global(.v7 .section) {
		margin-inline: auto;
		max-width: 1180px;
		padding: clamp(1rem, 4vw, 3rem);
	}

	:global(.v7 .hero) {
		align-items: center;
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.62fr);
		min-height: 78vh;
		padding-block: clamp(3rem, 8vw, 6rem);
	}

	:global(.v7 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		margin: 0 0 0.85rem;
		text-transform: uppercase;
	}

	:global(.v7 h1),
	:global(.v7 h2) {
		font-size: clamp(2.3rem, 5.4vw, 4.7rem);
		font-weight: 800;
		line-height: 1.04;
		margin: 0;
		max-width: 15ch;
		text-wrap: balance;
	}

	:global(.v7 h2) {
		font-size: clamp(1.85rem, 3.6vw, 3.1rem);
	}

	:global(.v7 p) {
		line-height: 1.68;
	}

	:global(.v7 .hero p:not(.kicker)),
	:global(.v7 .office-copy p),
	:global(.v7 article p),
	:global(.v7 .heading > p),
	:global(.v7 .contact-panel span) {
		color: rgba(251, 246, 241, 0.72);
	}

	:global(.v7 .hero p:not(.kicker)) {
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		margin-bottom: 1.8rem;
		max-width: 39rem;
	}

	:global(.v7 .primary) {
		align-items: center;
		background: var(--ferretti-linen);
		border-radius: 999px;
		color: var(--ferretti-ink);
		display: inline-flex;
		font-weight: 800;
		gap: 0.55rem;
		justify-content: center;
		padding: 0.85rem 1rem;
	}

	:global(.v7 .brand-board) {
		background:
			linear-gradient(135deg, rgba(68, 63, 60, 0.76), rgba(49, 45, 42, 0.86)),
			repeating-linear-gradient(
				135deg,
				transparent 0 1.2rem,
				rgba(236, 227, 217, 0.06) 1.25rem 1.32rem
			);
		border: 1px solid rgba(236, 227, 217, 0.16);
		display: grid;
		gap: 1.2rem;
		padding: clamp(1.4rem, 4vw, 2.4rem);
	}

	:global(.v7 .brand-board img) {
		margin-bottom: 2rem;
		opacity: 0.68;
		width: min(8rem, 44%);
	}

	:global(.v7 .brand-board div) {
		border-top: 1px solid rgba(236, 227, 217, 0.14);
		display: grid;
		gap: 0.3rem;
		padding-top: 1rem;
	}

	:global(.v7 .brand-board span),
	:global(.v7 .partner-grid span) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.v7 .office),
	:global(.v7 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.76fr) 1fr;
	}

	:global(.v7 .office-copy) {
		display: grid;
		gap: 1rem;
	}

	:global(.v7 .heading) {
		display: grid;
		gap: 0.85rem;
		margin-bottom: 2rem;
		max-width: 760px;
	}

	:global(.v7 .case-grid),
	:global(.v7 .partner-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v7 .case-grid article),
	:global(.v7 .partner-grid article),
	:global(.v7 .contact-panel) {
		background: rgba(49, 45, 42, 0.72);
		border: 1px solid rgba(236, 227, 217, 0.14);
		padding: clamp(1.2rem, 3vw, 2rem);
	}

	:global(.v7 .proof-list) {
		display: grid;
		gap: 0;
	}

	:global(.v7 .proof-list article) {
		align-items: start;
		border-top: 1px solid rgba(236, 227, 217, 0.14);
		display: grid;
		gap: 1rem;
		grid-template-columns: 3rem 1fr;
		padding-block: 1.15rem;
	}

	:global(.v7 article svg),
	:global(.v7 .proof-list svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 0.9rem;
	}

	:global(.v7 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.16;
		margin: 0 0 0.75rem;
	}

	:global(.v7 ul) {
		display: grid;
		gap: 0.55rem;
		list-style: none;
		margin: 1rem 0 0;
		padding: 0;
	}

	:global(.v7 li) {
		border-top: 1px solid rgba(236, 227, 217, 0.14);
		color: rgba(251, 246, 241, 0.82);
		padding-top: 0.55rem;
	}

	:global(.v7 .partner-grid article) {
		display: grid;
		gap: 1rem;
	}

	:global(.v7 .contact-panel) {
		display: grid;
		gap: 1rem;
	}

	:global(.v7 .contact-panel a:not(.primary)),
	:global(.v7 .contact-panel span) {
		align-items: center;
		border-bottom: 1px solid rgba(236, 227, 217, 0.14);
		display: flex;
		gap: 0.65rem;
		padding-bottom: 0.85rem;
	}

	@media (max-width: 860px) {
		:global(.v7 .hero),
		:global(.v7 .office),
		:global(.v7 .contact),
		:global(.v7 .case-grid),
		:global(.v7 .partner-grid),
		:global(.v7 .proof-list article) {
			grid-template-columns: 1fr;
		}
	}
</style>
