<script lang="ts">
	import { BriefcaseBusiness, FileCheck, Mail, MapPin, MessageCircle, Users } from 'lucide-svelte';
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
	const diffIcons = [Users, FileCheck, BriefcaseBusiness, MessageCircle];
</script>

<MetaTags title="Ferretti Advogados | Proposta 2 - Portal Seguro" />

<main id="top" class="v2">
	<ResponsiveNav logo={logoLight} tone="dark" />

	<section class="hero">
		<Reveal>
			<p class="kicker">Direito do Trabalho</p>
			<h1>Atendimento trabalhista com escuta e técnica.</h1>
			<p>{home.paragraphs[0]}</p>
			<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer"
				>Conversar pelo WhatsApp</a
			>
		</Reveal>
		<Reveal delay={120}>
			<div class="portal-card">
				<img src={logoMark} alt="" aria-hidden="true" />
				<strong>Direito do Trabalho</strong>
				<span>Atendimento em São Paulo e online</span>
			</div>
		</Reveal>
	</section>

	<section id="escritorio" class="section story">
		<Reveal>
			<p class="kicker">O escritório</p>
			<h2>Escuta, técnica e condução próxima.</h2>
		</Reveal>
		<div class="story-list">
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 80}>
					<article>
						<span>0{index + 1}</span>
						<p>{paragraph}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="section practice">
		<Reveal class="heading">
			<p class="kicker">Área de atuação</p>
			<h2>Atuação trabalhista objetiva.</h2>
		</Reveal>
		<div class="practice-stack">
			{#each practiceAreas as area, index (area.audience)}
				<Reveal>
					{@const Icon = areaIcons[index]}
					<article>
						<header>
							<Icon size={24} strokeWidth={1.8} />
							<p class="kicker">{area.audience}</p>
							<h3>{area.title}</h3>
							<p>{area.description}</p>
						</header>
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

	<section id="diferenciais" class="section method">
		<Reveal class="heading">
			<p class="kicker">Diferenciais</p>
			<h2>Confiança sem excesso.</h2>
		</Reveal>
		<div class="method-grid">
			{#each differentiators as item, index (item.title)}
				<Reveal delay={index * 70}>
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
			<h2>Sócios à frente da estratégia.</h2>
			<p>{partnersIntro}</p>
		</Reveal>
		<div class="partners-strip">
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
			<h2>Fale diretamente com o escritório.</h2>
		</Reveal>
		<Reveal>
			<div class="contact-list">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer"
					><MessageCircle size={18} /> Falar no WhatsApp</a
				>
				<a href={contact.emailHref}><Mail size={18} /> {contact.email}</a>
				<span><MapPin size={18} /> {contact.service}</span>
			</div>
		</Reveal>
	</section>
</main>

<Footer tone="dark" />

<style>
	:global(.v2) {
		background: linear-gradient(90deg, rgba(236, 227, 217, 0.08) 1px, transparent 1px), #312d2a;
		background-size: 5rem 5rem;
		color: var(--ferretti-porcelain);
		min-height: 100vh;
	}

	:global(.v2 .primary) {
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

	:global(.v2 .hero),
	:global(.v2 .section) {
		margin-inline: auto;
		max-width: 1120px;
		padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 4vw, 3rem);
	}

	:global(.v2 .hero) {
		align-items: center;
		display: grid;
		gap: clamp(1.5rem, 5vw, 4rem);
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.72fr);
		min-height: 82vh;
	}

	:global(.v2 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		margin: 0 0 0.9rem;
		text-transform: uppercase;
	}

	:global(.v2 h1),
	:global(.v2 h2) {
		font-family: 'Sora', system-ui, sans-serif;
		font-size: clamp(2.45rem, 5.8vw, 5rem);
		font-weight: 700;
		line-height: 1.04;
		margin: 0;
		max-width: 14ch;
		text-wrap: balance;
	}

	:global(.v2 h2) {
		font-size: clamp(1.85rem, 3.7vw, 3.2rem);
	}

	:global(.v2 .hero p:not(.kicker)),
	:global(.v2 .heading > p),
	:global(.v2 article p),
	:global(.v2 .contact-list span) {
		color: rgba(251, 246, 241, 0.72);
		line-height: 1.72;
	}

	:global(.v2 .hero p:not(.kicker)) {
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		margin: 1.2rem 0 2rem;
		max-width: 36rem;
	}

	:global(.v2 .portal-card) {
		align-items: center;
		aspect-ratio: 0.9;
		background: rgba(236, 227, 217, 0.07);
		border: 1px solid rgba(236, 227, 217, 0.2);
		display: grid;
		justify-items: center;
		padding: clamp(1.5rem, 4vw, 3rem);
		text-align: center;
	}

	:global(.v2 .portal-card img) {
		opacity: 0.68;
		width: min(9rem, 45%);
	}

	:global(.v2 .portal-card strong) {
		font-size: clamp(1.35rem, 3vw, 2.25rem);
		line-height: 1.05;
		max-width: 10ch;
	}

	:global(.v2 .portal-card span) {
		color: var(--ferretti-taupe);
		font-family: 'Noto Serif Display', Georgia, serif;
		font-size: clamp(1.2rem, 2.5vw, 1.8rem);
		font-style: italic;
	}

	:global(.v2 .story),
	:global(.v2 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
	}

	:global(.v2 .story-list) {
		display: grid;
		gap: 1rem;
	}

	:global(.v2 .story-list article) {
		border-top: 1px solid rgba(236, 227, 217, 0.14);
		display: grid;
		gap: 1rem;
		grid-template-columns: 3rem 1fr;
		padding-top: 1rem;
	}

	:global(.v2 .story-list span),
	:global(.v2 .method-grid span),
	:global(.v2 .partners-strip span) {
		color: var(--ferretti-taupe);
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.v2 .heading) {
		display: grid;
		gap: 0.85rem;
		margin-bottom: 2rem;
		max-width: 760px;
	}

	:global(.v2 .practice-stack) {
		display: grid;
		gap: 1rem;
	}

	:global(.v2 .practice-stack article) {
		background: rgba(68, 63, 60, 0.72);
		display: grid;
		gap: 2rem;
		grid-template-columns: minmax(14rem, 0.5fr) 1fr;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	:global(.v2 .practice-stack svg),
	:global(.v2 .method-grid svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 1rem;
	}

	:global(.v2 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.14;
		margin: 0 0 0.75rem;
	}

	:global(.v2 ul) {
		columns: 2;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	:global(.v2 li) {
		break-inside: avoid;
		color: rgba(251, 246, 241, 0.84);
		margin-bottom: 0.65rem;
	}

	:global(.v2 .method-grid),
	:global(.v2 .partners-strip) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v2 .method-grid article) {
		border: 1px solid rgba(236, 227, 217, 0.16);
		min-height: 13rem;
		padding: 1.25rem;
	}

	:global(.v2 .partners-strip article) {
		align-items: center;
		background: rgba(251, 246, 241, 0.06);
		display: grid;
		gap: 1.2rem;
		grid-template-columns: minmax(8rem, 0.32fr) 1fr;
		padding: 1rem;
	}

	:global(.v2 .contact-list) {
		display: grid;
		gap: 1rem;
	}

	:global(.v2 .contact-list a:not(.primary)),
	:global(.v2 .contact-list span) {
		align-items: center;
		border-bottom: 1px solid rgba(236, 227, 217, 0.16);
		display: flex;
		gap: 0.7rem;
		padding-bottom: 1rem;
	}

	@media (max-width: 820px) {
		:global(.v2 .hero),
		:global(.v2 .story),
		:global(.v2 .contact),
		:global(.v2 .practice-stack article),
		:global(.v2 .method-grid),
		:global(.v2 .partners-strip),
		:global(.v2 .partners-strip article) {
			grid-template-columns: 1fr;
		}

		:global(.v2 ul) {
			columns: 1;
		}
	}
</style>
