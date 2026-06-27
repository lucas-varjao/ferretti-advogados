<script lang="ts">
	import {
		ArrowRight,
		BriefcaseBusiness,
		FileCheck,
		Mail,
		MapPin,
		MessageCircle,
		Users
	} from 'lucide-svelte';
	import logoDark from '$lib/assets/brand/logos/logo_ferretti_02.svg';
	import logoMark from '$lib/assets/brand/logos/logo_ferretti_05.svg';
	import Footer from '$lib/components/Footer.svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
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
	const officeTopics = ['Atuação direta', 'Análise individualizada', 'Soluções responsáveis'];
</script>

<MetaTags title="Ferretti Advogados | Advocacia Trabalhista" />

<main id="top" class="v1">
	<section class="hero">
		<ResponsiveNav logo={logoDark} tone="light" />

		<div class="hero-grid">
			<Reveal>
				<p class="kicker">Direito do Trabalho</p>
				<h1>Advocacia trabalhista estratégica para trabalhadores e empresas.</h1>
				<p class="lead">{home.description}</p>
				<div class="hero-actions">
					<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer"
						>Falar com o escritório</a
					>
					<a class="text-link" href="#atuacao">Ver áreas de atuação <ArrowRight size={16} /></a>
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

	<section id="escritorio" class="section two-column office-section">
		<Reveal class="office-heading">
			<p class="kicker">{office.kicker}</p>
			<h2>Atuação técnica, transparente e próxima.</h2>
		</Reveal>
		<div class="copy-stack">
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 80}>
					<article class="office-note">
						<span>{String(index + 1).padStart(2, '0')}</span>
						<div>
							<h3>{officeTopics[index]}</h3>
							<p>{paragraph}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="section">
		<Reveal class="section-head area-head">
			<p class="kicker">Área de atuação</p>
			<h2>Direito do Trabalho para trabalhadores e empresas.</h2>
		</Reveal>
		<div class="area-grid">
			{#each practiceAreas as area, index (area.audience)}
				<Reveal>
					{@const Icon = areaIcons[index]}
					<article class={`area-card ${index === 1 ? 'wide-list' : ''}`}>
						<div class="area-eyebrow">
							<Icon size={28} strokeWidth={1.65} />
							<p class="kicker">{area.audience}</p>
						</div>
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
						<div class="diff-icon">
							<Icon size={34} strokeWidth={1.55} />
						</div>
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
		<Reveal class="section-head">
			<p class="kicker">Sócios</p>
			<h2>Casos conduzidos pelos sócios.</h2>
			<p>{partnersIntro}</p>
		</Reveal>
		<div class="partner-grid">
			{#each partners as partner (partner.name)}
				<Reveal>
					<article class="partner-card">
						<PartnerPortrait
							name={partner.name}
							initials={partner.initials}
							src={partner.src}
							variant="editorial"
						/>
						<div class="partner-copy">
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
			<h2>Fale com o escritório.</h2>
			<p>Cada situação merece atenção e solução individual.</p>
		</Reveal>
		<Reveal>
			<div class="contact-box">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={18} /> Iniciar pelo WhatsApp
				</a>
				{#each contact.emails as email (email.href)}
					<a href={email.href}><Mail size={18} /> {email.label}</a>
				{/each}
				<a href={contact.instagramHref} target="_blank" rel="noreferrer">
					<InstagramIcon size={18} />
					{contact.instagram}
				</a>
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
		min-height: 74vh;
		padding-top: clamp(1.1rem, 3vw, 2rem);
		padding-bottom: clamp(0.6rem, 1.5vw, 1rem);
	}

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
		gap: clamp(1.5rem, 3.2vw, 2.7rem);
		grid-template-columns: minmax(0, 1.08fr) minmax(17rem, 0.64fr);
		padding-block: clamp(2.2rem, 6.4vw, 4.8rem) 1rem;
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
		font-weight: 700;
		letter-spacing: 0;
		line-height: 1.04;
		margin: 0;
		text-wrap: balance;
	}

	:global(.v1 h1) {
		font-size: clamp(2.2rem, 4.35vw, 3.85rem);
		max-width: 18ch;
		overflow-wrap: anywhere;
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
		align-items: center;
		border-bottom: 1px solid rgba(49, 45, 42, 0.32);
		display: inline-flex;
		gap: 0.35rem;
		font-weight: 800;
	}

	:global(.v1 .intro-card) {
		background: #ece3d9;
		border-radius: 0 4.25rem 0 0;
		display: grid;
		gap: 1.55rem;
		justify-self: end;
		max-width: 27rem;
		padding: clamp(1.35rem, 3.2vw, 2.45rem);
	}

	:global(.v1 .intro-card img) {
		opacity: 0.74;
		width: min(6.8rem, 36%);
	}

	:global(.v1 .intro-card p) {
		margin: 0;
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
		gap: 1.15rem;
	}

	:global(.v1 .copy-stack p),
	:global(.v1 .section-head > p),
	:global(.v1 .area-card p),
	:global(.v1 .diff-grid p),
	:global(.v1 .partner-card p),
	:global(.v1 .contact p) {
		color: rgba(49, 45, 42, 0.7);
	}

	:global(.v1 .office-section) {
		align-items: start;
	}

	:global(.v1 .office-heading h2) {
		font-size: clamp(1.72rem, 3vw, 2.62rem);
		max-width: 16ch;
	}

	:global(.v1 .office-note) {
		display: grid;
		gap: 0.9rem;
		grid-template-columns: 2.5rem 1fr;
		padding-block: 0.25rem;
	}

	:global(.v1 .office-note span) {
		align-items: center;
		background: rgba(155, 141, 130, 0.13);
		border-radius: 999px;
		color: var(--ferretti-taupe);
		display: inline-flex;
		font-size: 0.74rem;
		font-weight: 800;
		height: 2rem;
		justify-content: center;
		letter-spacing: 0.12em;
		width: 2rem;
	}

	:global(.v1 .office-note h3) {
		font-size: clamp(1.1rem, 1.6vw, 1.28rem);
		font-weight: 700;
		margin: 0 0 0.45rem;
	}

	:global(.v1 .office-note p) {
		color: rgba(49, 45, 42, 0.68);
		line-height: 1.66;
		margin: 0;
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

	:global(.v1 .area-head) {
		margin-bottom: 1.45rem;
	}

	:global(.v1 .area-head h2) {
		font-size: clamp(1.75rem, 3.1vw, 2.72rem);
		max-width: 18ch;
	}

	:global(.v1 .area-grid),
	:global(.v1 .partner-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v1 .partner-grid > .reveal) {
		display: grid;
		height: 100%;
	}

	:global(.v1 .area-card) {
		background: #fffaf5;
		border: 1px solid rgba(49, 45, 42, 0.12);
		display: grid;
		grid-template-rows: auto auto auto 1fr;
		min-height: 100%;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	:global(.v1 .area-eyebrow) {
		align-items: center;
		display: flex;
		gap: 0.75rem;
		margin-bottom: 1.2rem;
	}

	:global(.v1 .area-eyebrow .kicker) {
		margin: 0;
	}

	:global(.v1 .area-card svg) {
		color: var(--ferretti-taupe);
		flex: 0 0 auto;
	}

	:global(.v1 .diff-grid svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 1rem;
	}

	:global(.v1 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.15;
		margin: 0 0 0.8rem;
	}

	:global(.v1 .area-card ul) {
		display: grid;
		gap: 0.65rem 1rem;
		list-style: none;
		margin: 1.45rem 0 0;
		padding: 0;
	}

	:global(.v1 .area-card.wide-list ul) {
		grid-template-columns: 1fr;
	}

	:global(.v1 .area-card li) {
		align-items: baseline;
		display: grid;
		font-size: 0.98rem;
		gap: 0.55rem;
		grid-template-columns: auto 1fr;
		line-height: 1.45;
	}

	:global(.v1 .area-card li::before) {
		background: var(--ferretti-taupe);
		border-radius: 999px;
		content: '';
		height: 0.34rem;
		opacity: 0.72;
		transform: translateY(-0.1rem);
		width: 0.34rem;
	}

	:global(.v1 .soft-panel) {
		background: #ece3d9;
		margin-block: 3rem;
	}

	:global(.v1 .diff-grid) {
		display: grid;
		gap: 0.9rem;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	:global(.v1 .diff-grid > .reveal) {
		display: grid;
		height: 100%;
	}

	:global(.v1 .diff-grid article) {
		background: rgba(251, 246, 241, 0.72);
		border: 1px solid rgba(49, 45, 42, 0.08);
		display: grid;
		gap: 0.9rem;
		grid-template-rows: auto 1fr;
		height: 100%;
		min-height: 12.5rem;
		padding: clamp(1.15rem, 2.4vw, 1.55rem);
	}

	:global(.v1 .diff-icon) {
		align-items: center;
		color: var(--ferretti-taupe);
		display: inline-flex;
		justify-content: center;
		justify-self: center;
		min-height: 2.5rem;
	}

	:global(.v1 .diff-grid h3) {
		font-size: clamp(1.08rem, 1.7vw, 1.32rem);
		margin: 0 auto 0.75rem;
		max-width: 14ch;
		text-align: center;
	}

	:global(.v1 .diff-grid p) {
		font-size: 0.98rem;
		line-height: 1.62;
		margin: 0 auto;
		max-width: 17rem;
		text-align: center;
	}

	:global(.v1 .partner-card) {
		background: #ece3d9;
		display: grid;
		gap: 1.25rem;
		grid-template-rows: auto 1fr;
		height: 100%;
		padding: clamp(0.9rem, 2vw, 1.05rem) clamp(0.9rem, 2vw, 1.05rem) clamp(1.2rem, 2.6vw, 1.5rem);
	}

	:global(.v1 .partner-card .portrait) {
		aspect-ratio: 4 / 3.45;
		justify-self: center;
		max-width: 30rem;
		width: 92%;
	}

	:global(.v1 .partner-copy) {
		align-content: start;
		display: grid;
		gap: 0.72rem;
	}

	:global(.v1 .partner-copy h3),
	:global(.v1 .partner-copy p) {
		margin: 0;
	}

	:global(.v1 .partner-card span) {
		color: var(--ferretti-taupe);
		display: block;
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		margin: 0 0 -0.18rem;
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
		:global(.v1 .hero-grid),
		:global(.v1 .two-column),
		:global(.v1 .contact),
		:global(.v1 .area-grid),
		:global(.v1 .partner-grid),
		:global(.v1 .diff-grid) {
			grid-template-columns: 1fr;
		}

		:global(.v1 .area-card.wide-list ul) {
			grid-template-columns: 1fr;
		}
	}
</style>
