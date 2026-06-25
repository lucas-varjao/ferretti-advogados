<script lang="ts">
	import { BriefcaseBusiness, FileCheck, Mail, MapPin, MessageCircle, Users } from 'lucide-svelte';
	import logoDark from '$lib/assets/brand/logos/logo_ferretti_02.svg';
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
	const diffIcons = [Users, FileCheck, BriefcaseBusiness, MessageCircle];
</script>

<MetaTags title="Ferretti Advogados | Proposta 3 - Consultivo Claro" />

<main id="top" class="v3">
	<section class="hero">
		<ResponsiveNav logo={logoDark} tone="light" />

		<div class="hero-layout">
			<Reveal>
				<p class="kicker">Consultivo e contencioso trabalhista</p>
				<h1>Estratégia trabalhista para decisões seguras.</h1>
				<p>{home.paragraphs[2]}</p>
			</Reveal>
		</div>
	</section>

	<section id="escritorio" class="section intro">
		<Reveal>
			<p class="kicker">O escritório</p>
			<h2>Método, contexto e clareza.</h2>
		</Reveal>
		<div>
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 80}>
					<p>{paragraph}</p>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="section service-board">
		<Reveal class="board-title">
			<p class="kicker">Área de atuação</p>
			<h2>O que o escritório atende.</h2>
		</Reveal>
		<div class="service-grid">
			{#each practiceAreas as area, index (area.audience)}
				<Reveal>
					{@const Icon = areaIcons[index]}
					<article>
						<div class="service-head">
							<Icon size={22} />
							<div>
								<p class="kicker">{area.audience}</p>
								<h3>{area.title}</h3>
							</div>
						</div>
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

	<section id="diferenciais" class="section diff">
		<Reveal class="board-title">
			<p class="kicker">Diferenciais</p>
			<h2>Processo claro para decidir.</h2>
		</Reveal>
		<div class="diff-list">
			{#each differentiators as item, index (item.title)}
				<Reveal delay={index * 70}>
					{@const Icon = diffIcons[index]}
					<article>
						<Icon size={22} />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="socios" class="section team">
		<Reveal class="board-title">
			<p class="kicker">Sócios</p>
			<h2>Atuação trabalhista pelos sócios.</h2>
			<p>{partnersIntro}</p>
		</Reveal>
		<div class="team-grid">
			{#each partners as partner (partner.name)}
				<Reveal>
					<article>
						<PartnerPortrait name={partner.name} initials={partner.initials} variant="editorial" />
						<h3>{partner.name}</h3>
						<span>{partner.role}</span>
						<p>{partner.summary}</p>
						<p>{partner.description}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="contato" class="section contact">
		<Reveal>
			<p class="kicker">Contato</p>
			<h2>São Paulo e online para todo o Brasil.</h2>
		</Reveal>
		<Reveal>
			<div class="contact-card">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer"
					><MessageCircle size={18} /> Falar no WhatsApp</a
				>
				<a href={contact.emailHref}><Mail size={18} /> {contact.email}</a>
				<span><MapPin size={18} /> {contact.service}</span>
			</div>
		</Reveal>
	</section>
</main>

<Footer tone="light" />

<style>
	:global(.v3) {
		background: #ece3d9;
		color: var(--ferretti-ink);
		min-height: 100vh;
	}

	:global(.v3 .hero),
	:global(.v3 .section) {
		margin-inline: auto;
		max-width: 1180px;
		padding: clamp(1rem, 4vw, 3rem);
	}

	:global(.v3 .hero) {
		min-height: 76vh;
	}

	:global(.v3 .primary) {
		align-items: center;
		background: var(--ferretti-brown);
		border-radius: 999px;
		color: var(--ferretti-porcelain);
		display: inline-flex;
		font-weight: 800;
		gap: 0.55rem;
		justify-content: center;
		padding: 0.85rem 1rem;
	}

	:global(.v3 .hero-layout) {
		align-items: end;
		display: block;
		padding-top: clamp(3rem, 8vw, 6rem);
	}

	:global(.v3 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		margin: 0 0 0.8rem;
		text-transform: uppercase;
	}

	:global(.v3 h1),
	:global(.v3 h2) {
		font-size: clamp(2.45rem, 5.8vw, 5rem);
		font-weight: 700;
		line-height: 1.04;
		margin: 0;
		max-width: 14ch;
		text-wrap: balance;
	}

	:global(.v3 h2) {
		font-size: clamp(1.85rem, 3.7vw, 3.2rem);
	}

	:global(.v3 .hero p:not(.kicker)),
	:global(.v3 .intro p),
	:global(.v3 article p),
	:global(.v3 .board-title > p),
	:global(.v3 .contact-card span) {
		color: rgba(49, 45, 42, 0.72);
		line-height: 1.7;
	}

	:global(.v3 .hero p:not(.kicker)) {
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		max-width: 38rem;
	}

	:global(.v3 .intro),
	:global(.v3 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.75fr) 1fr;
	}

	:global(.v3 .intro > div:last-child) {
		display: grid;
		gap: 1rem;
	}

	:global(.v3 .board-title) {
		display: grid;
		gap: 0.8rem;
		margin-bottom: 2rem;
		max-width: 780px;
	}

	:global(.v3 .service-grid),
	:global(.v3 .team-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v3 .service-grid article),
	:global(.v3 .team-grid article),
	:global(.v3 .contact-card) {
		background: #fbf6f1;
		border: 1px solid rgba(49, 45, 42, 0.1);
		padding: clamp(1.2rem, 3vw, 2rem);
	}

	:global(.v3 .service-head) {
		align-items: flex-start;
		display: flex;
		gap: 0.9rem;
	}

	:global(.v3 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.16;
		margin: 0 0 0.75rem;
	}

	:global(.v3 ul) {
		display: grid;
		gap: 0.55rem;
		list-style: none;
		margin: 1.2rem 0 0;
		padding: 0;
	}

	:global(.v3 li) {
		border-top: 1px solid rgba(49, 45, 42, 0.12);
		padding-top: 0.55rem;
	}

	:global(.v3 .diff) {
		background: #fbf6f1;
		margin-block: 3rem;
	}

	:global(.v3 .diff-list) {
		display: grid;
		gap: 0;
	}

	:global(.v3 .diff-list article) {
		align-items: baseline;
		border-top: 1px solid rgba(49, 45, 42, 0.12);
		display: grid;
		gap: 1rem;
		grid-template-columns: 3rem minmax(12rem, 0.45fr) 1fr;
		padding-block: 1rem;
	}

	:global(.v3 .service-head svg),
	:global(.v3 .diff-list svg) {
		color: var(--ferretti-taupe);
	}

	:global(.v3 .diff-list span),
	:global(.v3 .team-grid span) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.v3 .contact-card) {
		display: grid;
		gap: 1rem;
	}

	:global(.v3 .contact-card a:not(.primary)),
	:global(.v3 .contact-card span) {
		align-items: center;
		border-bottom: 1px solid rgba(49, 45, 42, 0.12);
		display: flex;
		gap: 0.65rem;
		padding-bottom: 0.85rem;
	}

	@media (max-width: 840px) {
		:global(.v3 .hero-layout),
		:global(.v3 .intro),
		:global(.v3 .contact),
		:global(.v3 .service-grid),
		:global(.v3 .team-grid),
		:global(.v3 .diff-list article) {
			grid-template-columns: 1fr;
		}
	}
</style>
