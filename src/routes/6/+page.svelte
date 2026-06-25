<script lang="ts">
	import {
		BadgeCheck,
		BriefcaseBusiness,
		FileCheck,
		Mail,
		MapPin,
		MessageCircle,
		Scale,
		Users
	} from 'lucide-svelte';
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
	const diffIcons = [Users, BadgeCheck, Scale, FileCheck];
</script>

<MetaTags title="Ferretti Advogados | Proposta 6 - Claro Textural" />

<main id="top" class="v6">
	<section class="hero">
		<ResponsiveNav logo={logoDark} tone="light" />

		<div class="hero-layout">
			<Reveal>
				<p class="kicker">Direito do Trabalho</p>
				<h1>Orientação trabalhista com método e proximidade.</h1>
				<p>{home.description}</p>
				<div class="actions">
					<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
						<MessageCircle size={18} /> Falar no WhatsApp
					</a>
					<a class="quiet-link" href="#atuacao">Ver atuação</a>
				</div>
			</Reveal>

			<Reveal delay={120}>
				<aside class="document-panel">
					<img src={logoMark} alt="" aria-hidden="true" />
					<div>
						<span>01</span>
						<strong>Análise individual</strong>
					</div>
					<div>
						<span>02</span>
						<strong>Estratégia clara</strong>
					</div>
					<div>
						<span>03</span>
						<strong>Condução pelos sócios</strong>
					</div>
				</aside>
			</Reveal>
		</div>
	</section>

	<section id="escritorio" class="section split">
		<Reveal>
			<p class="kicker">{office.kicker}</p>
			<h2>Atuação próxima, técnica e responsável.</h2>
		</Reveal>
		<div class="copy-block">
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
			<h2>Trabalho consultivo e contencioso.</h2>
		</Reveal>
		<div class="area-grid">
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

	<section id="diferenciais" class="section differentials">
		<Reveal class="heading">
			<p class="kicker">Diferenciais</p>
			<h2>O essencial sem excesso.</h2>
		</Reveal>
		<div class="diff-grid">
			{#each differentiators as item, index (item.title)}
				<Reveal delay={index * 60}>
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
		<Reveal class="heading">
			<p class="kicker">Sócios</p>
			<h2>Experiência direta na condução dos casos.</h2>
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
			<h2>Atendimento em São Paulo e online para todo o Brasil.</h2>
		</Reveal>
		<Reveal>
			<div class="contact-card">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={18} /> Iniciar conversa
				</a>
				<a href={contact.emailHref}><Mail size={18} /> {contact.email}</a>
				<span><MapPin size={18} /> {contact.service}</span>
			</div>
		</Reveal>
	</section>
</main>

<Footer tone="light" />

<style>
	:global(.v6) {
		background:
			linear-gradient(90deg, rgba(68, 63, 60, 0.08) 1px, transparent 1px),
			linear-gradient(rgba(68, 63, 60, 0.045) 1px, transparent 1px),
			radial-gradient(circle at 82% 14%, rgba(155, 141, 130, 0.28), transparent 22rem),
			linear-gradient(135deg, rgba(236, 227, 217, 0.92), rgba(251, 246, 241, 0.98));
		background-size:
			4.5rem 4.5rem,
			4.5rem 4.5rem,
			auto,
			auto;
		color: var(--ferretti-ink);
		min-height: 100vh;
	}

	:global(.v6 .hero),
	:global(.v6 .section) {
		margin-inline: auto;
		max-width: 1180px;
		padding: clamp(1rem, 4vw, 3rem);
	}

	:global(.v6 .hero-layout) {
		align-items: center;
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.65fr);
		min-height: 74vh;
		padding-block: clamp(3rem, 8vw, 6rem);
	}

	:global(.v6 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		margin: 0 0 0.85rem;
		text-transform: uppercase;
	}

	:global(.v6 h1),
	:global(.v6 h2) {
		font-size: clamp(2.3rem, 5.2vw, 4.5rem);
		font-weight: 800;
		line-height: 1.04;
		margin: 0;
		max-width: 15ch;
		text-wrap: balance;
	}

	:global(.v6 h2) {
		font-size: clamp(1.85rem, 3.5vw, 3rem);
	}

	:global(.v6 p) {
		line-height: 1.68;
	}

	:global(.v6 .hero p:not(.kicker)),
	:global(.v6 .copy-block p),
	:global(.v6 article p),
	:global(.v6 .heading > p),
	:global(.v6 .contact-card span) {
		color: rgba(49, 45, 42, 0.72);
	}

	:global(.v6 .hero p:not(.kicker)) {
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		max-width: 39rem;
	}

	:global(.v6 .actions) {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1.8rem;
	}

	:global(.v6 .primary) {
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

	:global(.v6 .quiet-link) {
		border-bottom: 1px solid rgba(49, 45, 42, 0.34);
		font-weight: 800;
	}

	:global(.v6 .document-panel) {
		background:
			linear-gradient(135deg, rgba(251, 246, 241, 0.9), rgba(236, 227, 217, 0.84)),
			repeating-linear-gradient(0deg, transparent 0 2.4rem, rgba(49, 45, 42, 0.08) 2.45rem);
		border: 1px solid rgba(49, 45, 42, 0.14);
		display: grid;
		gap: 0.9rem;
		padding: clamp(1.2rem, 4vw, 2rem);
	}

	:global(.v6 .document-panel img) {
		margin-bottom: 1rem;
		opacity: 0.55;
		width: min(7rem, 42%);
	}

	:global(.v6 .document-panel div) {
		align-items: center;
		border-top: 1px solid rgba(49, 45, 42, 0.12);
		display: grid;
		gap: 1rem;
		grid-template-columns: 2.5rem 1fr;
		padding-top: 0.9rem;
	}

	:global(.v6 .document-panel span),
	:global(.v6 .partner-grid span) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.v6 .split),
	:global(.v6 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.75fr) 1fr;
	}

	:global(.v6 .copy-block) {
		display: grid;
		gap: 1rem;
	}

	:global(.v6 .heading) {
		display: grid;
		gap: 0.85rem;
		margin-bottom: 2rem;
		max-width: 760px;
	}

	:global(.v6 .area-grid),
	:global(.v6 .partner-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v6 .area-grid article),
	:global(.v6 .partner-grid article),
	:global(.v6 .contact-card) {
		background: rgba(251, 246, 241, 0.72);
		border: 1px solid rgba(49, 45, 42, 0.12);
		padding: clamp(1.2rem, 3vw, 2rem);
	}

	:global(.v6 .diff-grid) {
		display: grid;
		gap: 1px;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	:global(.v6 .diff-grid article) {
		background: rgba(236, 227, 217, 0.72);
		min-height: 13rem;
		padding: 1.2rem;
	}

	:global(.v6 article svg),
	:global(.v6 .area-grid svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 0.9rem;
	}

	:global(.v6 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.16;
		margin: 0 0 0.75rem;
	}

	:global(.v6 ul) {
		display: grid;
		gap: 0.55rem;
		list-style: none;
		margin: 1rem 0 0;
		padding: 0;
	}

	:global(.v6 li) {
		border-top: 1px solid rgba(49, 45, 42, 0.12);
		padding-top: 0.55rem;
	}

	:global(.v6 .partner-grid article) {
		display: grid;
		gap: 1rem;
	}

	:global(.v6 .contact-card) {
		display: grid;
		gap: 1rem;
	}

	:global(.v6 .contact-card a:not(.primary)),
	:global(.v6 .contact-card span) {
		align-items: center;
		border-bottom: 1px solid rgba(49, 45, 42, 0.12);
		display: flex;
		gap: 0.65rem;
		padding-bottom: 0.85rem;
	}

	@media (max-width: 860px) {
		:global(.v6 .hero-layout),
		:global(.v6 .split),
		:global(.v6 .contact),
		:global(.v6 .area-grid),
		:global(.v6 .diff-grid),
		:global(.v6 .partner-grid) {
			grid-template-columns: 1fr;
		}
	}
</style>
