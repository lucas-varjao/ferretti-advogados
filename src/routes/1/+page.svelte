<script lang="ts">
	import { BriefcaseBusiness, FileCheck, Mail, MapPin, MessageCircle, Users } from 'lucide-svelte';
	import logoDark from '$lib/assets/brand/logos/logo_ferretti_02.svg';
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
	const diffIcons = [Users, FileCheck, BriefcaseBusiness, MessageCircle];
</script>

<MetaTags title="Ferretti Advogados | Proposta 1 - Editorial Claro" />

<main id="top" class="v1">
	<section class="hero">
		<ResponsiveNav logo={logoDark} tone="light" />

		<div class="hero-grid">
			<Reveal>
				<p class="kicker">Direito do Trabalho</p>
				<h1>Advocacia trabalhista clara e próxima.</h1>
				<p class="lead">{home.description}</p>
				<div class="hero-actions">
					<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer"
						>Falar com o escritório</a
					>
					<a class="text-link" href="#atuacao">Ver áreas de atuação</a>
				</div>
			</Reveal>

			<Reveal delay={140}>
				<aside class="intro-card">
					<img src={logoMark} alt="" aria-hidden="true" />
					<p>{home.paragraphs[1]}</p>
				</aside>
			</Reveal>
		</div>
	</section>

	<section id="escritorio" class="section two-column">
		<Reveal>
			<p class="kicker">{office.kicker}</p>
			<h2>Atuação técnica, transparente e próxima.</h2>
		</Reveal>
		<div class="copy-stack">
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 80}>
					<p>{paragraph}</p>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="section">
		<Reveal class="section-head">
			<p class="kicker">Área de atuação</p>
			<h2>Direito do Trabalho para pessoas e empresas.</h2>
		</Reveal>
		<div class="area-grid">
			{#each practiceAreas as area, index (area.audience)}
				<Reveal>
					{@const Icon = areaIcons[index]}
					<article class="area-card">
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

	<section id="diferenciais" class="section soft-panel">
		<Reveal class="section-head">
			<p class="kicker">Diferenciais</p>
			<h2>Técnica, clareza e presença.</h2>
		</Reveal>
		<div class="diff-grid">
			{#each differentiators as item, index (item.title)}
				<Reveal>
					{@const Icon = diffIcons[index]}
					<article>
						<Icon size={22} strokeWidth={1.8} />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="socios" class="section partners">
		<Reveal class="section-head">
			<p class="kicker">Sócios</p>
			<h2>Casos conduzidos pelos sócios.</h2>
			<p>{partnersIntro}</p>
		</Reveal>
		<div class="partner-grid">
			{#each partners as partner (partner.name)}
				<Reveal>
					<article class="partner-card">
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
			<h2>Converse com nossa equipe.</h2>
			<p>Cada situação merece atenção e solução individual.</p>
		</Reveal>
		<Reveal>
			<div class="contact-box">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={18} /> Iniciar pelo WhatsApp
				</a>
				<a href={contact.emailHref}><Mail size={18} /> {contact.email}</a>
				<span><MapPin size={18} /> {contact.service}</span>
			</div>
		</Reveal>
	</section>
</main>

<Footer tone="light" />

<style>
	:global(.v1) {
		background: var(--ferretti-porcelain);
		color: var(--ferretti-ink);
		min-height: 100vh;
	}

	:global(.v1 .hero),
	:global(.v1 .section) {
		margin-inline: auto;
		max-width: 1180px;
		padding: clamp(1.1rem, 3vw, 2rem);
	}

	:global(.v1 .hero) {
		min-height: 78vh;
		padding-top: clamp(1.1rem, 3vw, 2rem);
	}

	:global(.v1 .topline) {
		align-items: center;
		display: grid;
		gap: 1rem;
		grid-template-columns: auto 1fr auto;
		padding-block: 0.8rem;
	}

	:global(.v1 .brand img) {
		display: block;
		width: clamp(9rem, 18vw, 13rem);
	}

	:global(.v1 nav) {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 1.1rem;
		justify-content: center;
	}

	:global(.v1 nav a) {
		color: rgba(49, 45, 42, 0.66);
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	:global(.v1 .whatsapp),
	:global(.v1 .primary) {
		align-items: center;
		background: var(--ferretti-ink);
		border-radius: 999px;
		color: var(--ferretti-porcelain);
		display: inline-flex;
		font-weight: 800;
		gap: 0.55rem;
		justify-content: center;
		padding: 0.85rem 1rem;
	}

	:global(.v1 .hero-grid) {
		align-items: end;
		display: grid;
		gap: clamp(1.5rem, 5vw, 4rem);
		grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.72fr);
		padding-block: clamp(3rem, 8vw, 6rem) 2rem;
	}

	:global(.v1 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		margin: 0 0 0.9rem;
		text-transform: uppercase;
	}

	:global(.v1 h1),
	:global(.v1 h2) {
		font-family: 'Sora', system-ui, sans-serif;
		font-size: clamp(2.35rem, 5.6vw, 4.75rem);
		font-weight: 700;
		letter-spacing: 0;
		line-height: 1.04;
		margin: 0;
		max-width: 14ch;
		text-wrap: balance;
	}

	:global(.v1 h2) {
		font-size: clamp(1.85rem, 3.6vw, 3.1rem);
		max-width: 15ch;
	}

	:global(.v1 .lead) {
		color: rgba(49, 45, 42, 0.72);
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		line-height: 1.58;
		margin: 1.3rem 0 0;
		max-width: 38rem;
	}

	:global(.v1 .hero-actions) {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
	}

	:global(.v1 .text-link) {
		border-bottom: 1px solid rgba(49, 45, 42, 0.32);
		font-weight: 800;
	}

	:global(.v1 .intro-card) {
		background: #ece3d9;
		border-radius: 0 5rem 0 0;
		display: grid;
		gap: 2rem;
		padding: clamp(1.4rem, 4vw, 3rem);
	}

	:global(.v1 .intro-card img) {
		opacity: 0.74;
		width: min(8rem, 42%);
	}

	:global(.v1 p) {
		line-height: 1.72;
	}

	:global(.v1 .two-column),
	:global(.v1 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 1fr);
	}

	:global(.v1 .copy-stack) {
		display: grid;
		gap: 1rem;
	}

	:global(.v1 .copy-stack p),
	:global(.v1 .section-head > p),
	:global(.v1 .area-card p),
	:global(.v1 .diff-grid p),
	:global(.v1 .partner-card p),
	:global(.v1 .contact p) {
		color: rgba(49, 45, 42, 0.7);
	}

	:global(.v1 .section-head) {
		display: grid;
		gap: 0.9rem;
		margin-bottom: 2rem;
		max-width: 780px;
	}

	:global(.v1 .section-head h2) {
		max-width: 17ch;
	}

	:global(.v1 .area-grid),
	:global(.v1 .partner-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v1 .area-card) {
		background: #fffaf5;
		border: 1px solid rgba(49, 45, 42, 0.12);
		min-height: 100%;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	:global(.v1 .area-card svg),
	:global(.v1 .diff-grid svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 1rem;
	}

	:global(.v1 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.15;
		margin: 0 0 0.8rem;
	}

	:global(.v1 ul) {
		display: grid;
		gap: 0.55rem;
		list-style: none;
		margin: 1.25rem 0 0;
		padding: 0;
	}

	:global(.v1 li) {
		border-top: 1px solid rgba(49, 45, 42, 0.12);
		padding-top: 0.55rem;
	}

	:global(.v1 .soft-panel) {
		background: #ece3d9;
		margin-block: 3rem;
	}

	:global(.v1 .diff-grid) {
		display: grid;
		gap: 1px;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	:global(.v1 .diff-grid article) {
		background: rgba(251, 246, 241, 0.62);
		min-height: 13rem;
		padding: 1.25rem;
	}

	:global(.v1 .partner-card) {
		background: #ece3d9;
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}

	:global(.v1 .partner-card span) {
		color: var(--ferretti-taupe);
		display: block;
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		margin-top: 0.3rem;
		text-transform: uppercase;
	}

	:global(.v1 .contact-box) {
		align-content: start;
		display: grid;
		gap: 1rem;
	}

	:global(.v1 .contact-box a:not(.primary)),
	:global(.v1 .contact-box span) {
		align-items: center;
		border-bottom: 1px solid rgba(49, 45, 42, 0.14);
		color: rgba(49, 45, 42, 0.72);
		display: flex;
		gap: 0.65rem;
		padding-bottom: 0.9rem;
	}

	@media (max-width: 860px) {
		:global(.v1 .topline),
		:global(.v1 .hero-grid),
		:global(.v1 .two-column),
		:global(.v1 .contact),
		:global(.v1 .area-grid),
		:global(.v1 .partner-grid),
		:global(.v1 .diff-grid) {
			grid-template-columns: 1fr;
		}

		:global(.v1 nav) {
			justify-content: flex-start;
		}

		:global(.v1 .whatsapp) {
			justify-self: start;
		}
	}
</style>
