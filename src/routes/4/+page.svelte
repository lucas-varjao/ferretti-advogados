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

<MetaTags title="Ferretti Advogados | Proposta 4 - Boutique Acolhedora" />

<main id="top" class="v4">
	<section class="hero">
		<ResponsiveNav logo={logoDark} tone="light" />

		<div class="hero-card">
			<Reveal>
				<p class="kicker">Advocacia trabalhista</p>
				<h1>Trabalho jurídico com calma e precisão.</h1>
				<p>{home.description}</p>
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={18} /> Atendimento pelo WhatsApp
				</a>
			</Reveal>
			<Reveal delay={120}>
				<div class="mark-tile">
					<img src={logoMark} alt="" aria-hidden="true" />
					<span>{home.emotional[1]}</span>
				</div>
			</Reveal>
		</div>
	</section>

	<section id="escritorio" class="section essay">
		<Reveal>
			<p class="kicker">O escritório</p>
			<h2>Próximo, técnico e responsável.</h2>
		</Reveal>
		<div class="essay-copy">
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 80}>
					<p>{paragraph}</p>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="section areas">
		<Reveal class="heading">
			<p class="kicker">Área de atuação</p>
			<h2>Atuação especializada e sem ruído.</h2>
		</Reveal>
		<div class="area-ledger">
			{#each practiceAreas as area, index (area.audience)}
				<Reveal>
					{@const Icon = areaIcons[index]}
					<article>
						<div>
							<Icon size={24} strokeWidth={1.8} />
							<p class="kicker">{area.audience}</p>
							<h3>{area.title}</h3>
							<p>{area.description}</p>
						</div>
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

	<section id="diferenciais" class="section qualities">
		<Reveal class="heading">
			<p class="kicker">Diferenciais</p>
			<h2>Clareza no próximo passo.</h2>
		</Reveal>
		<div class="quality-grid">
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
		<Reveal class="heading">
			<p class="kicker">Sócios</p>
			<h2>Sócios presentes na estratégia.</h2>
			<p>{partnersIntro}</p>
		</Reveal>
		<div class="partner-rows">
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
			<h2>O primeiro passo pode ser uma conversa simples.</h2>
		</Reveal>
		<Reveal>
			<div class="contact-panel">
				<a class="primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={18} /> Chamar no WhatsApp
				</a>
				<a href={contact.emailHref}><Mail size={18} /> {contact.email}</a>
				<span><MapPin size={18} /> {contact.service}</span>
			</div>
		</Reveal>
	</section>
</main>

<Footer tone="light" />

<style>
	:global(.v4) {
		background: #fbf6f1;
		color: var(--ferretti-ink);
		min-height: 100vh;
	}

	:global(.v4 .hero),
	:global(.v4 .section) {
		margin-inline: auto;
		max-width: 1160px;
		padding: clamp(1rem, 4vw, 3rem);
	}

	:global(.v4 .utility) {
		align-items: center;
		display: grid;
		gap: 1.2rem;
		grid-template-columns: auto 1fr auto;
		padding-block: 1rem;
	}

	:global(.v4 .utility img) {
		display: block;
		width: clamp(9rem, 17vw, 12rem);
	}

	:global(.v4 nav) {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 1rem;
		justify-content: center;
	}

	:global(.v4 nav a) {
		color: rgba(49, 45, 42, 0.76);
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		padding: 0.45rem 0;
		text-transform: uppercase;
	}

	:global(.v4 .nav-whatsapp) {
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

	:global(.v4 .hero-card) {
		align-items: stretch;
		background: #ece3d9;
		border-radius: 2.5rem;
		display: grid;
		gap: clamp(1.5rem, 5vw, 4rem);
		grid-template-columns: minmax(0, 1fr) minmax(17rem, 0.45fr);
		margin-top: 2rem;
		min-height: 62vh;
		padding: clamp(1.4rem, 5vw, 4rem);
	}

	:global(.v4 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		margin: 0 0 0.8rem;
		text-transform: uppercase;
	}

	:global(.v4 h1),
	:global(.v4 h2) {
		font-size: clamp(2.25rem, 5.2vw, 4.45rem);
		font-weight: 700;
		line-height: 1.05;
		margin: 0;
		max-width: 15ch;
		text-wrap: balance;
	}

	:global(.v4 h2) {
		font-size: clamp(1.8rem, 3.4vw, 3rem);
	}

	:global(.v4 .hero-card p:not(.kicker)),
	:global(.v4 .essay-copy p),
	:global(.v4 article p),
	:global(.v4 .heading > p),
	:global(.v4 .contact-panel span) {
		color: rgba(49, 45, 42, 0.72);
		line-height: 1.72;
	}

	:global(.v4 .hero-card p:not(.kicker)) {
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		margin: 1.2rem 0 2rem;
		max-width: 38rem;
	}

	:global(.v4 .primary) {
		align-items: center;
		background: var(--ferretti-ink);
		border-radius: 999px;
		color: var(--ferretti-porcelain);
		display: inline-flex;
		font-weight: 800;
		gap: 0.55rem;
		justify-content: center;
		padding: 0.9rem 1rem;
	}

	:global(.v4 .mark-tile) {
		align-items: center;
		background: var(--ferretti-porcelain);
		border-radius: 0 2rem 2rem 2rem;
		display: grid;
		justify-items: center;
		padding: 2rem;
		text-align: center;
	}

	:global(.v4 .mark-tile img) {
		opacity: 0.7;
		width: min(8rem, 48%);
	}

	:global(.v4 .mark-tile span) {
		font-family: 'Noto Serif Display', Georgia, serif;
		font-size: clamp(1.35rem, 3vw, 2.25rem);
		font-style: italic;
		line-height: 1.05;
		margin-top: 1.6rem;
	}

	:global(.v4 .essay),
	:global(.v4 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.78fr) 1fr;
	}

	:global(.v4 .essay-copy) {
		display: grid;
		gap: 1rem;
	}

	:global(.v4 .heading) {
		display: grid;
		gap: 0.8rem;
		margin-bottom: 2rem;
		max-width: 760px;
	}

	:global(.v4 .area-ledger) {
		display: grid;
		gap: 0;
	}

	:global(.v4 .area-ledger article) {
		border-top: 1px solid rgba(49, 45, 42, 0.14);
		display: grid;
		gap: 2rem;
		grid-template-columns: minmax(15rem, 0.46fr) 1fr;
		padding-block: 1.4rem;
	}

	:global(.v4 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.16;
		margin: 0 0 0.75rem;
	}

	:global(.v4 ul) {
		display: grid;
		gap: 0.55rem 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		list-style: none;
		margin: 0;
		padding: 0;
	}

	:global(.v4 li) {
		color: rgba(49, 45, 42, 0.78);
	}

	:global(.v4 .quality-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	:global(.v4 .quality-grid article) {
		background: #ece3d9;
		border-radius: 1.2rem;
		min-height: 12.5rem;
		padding: 1.2rem;
	}

	:global(.v4 .area-ledger svg),
	:global(.v4 .quality-grid svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 0.9rem;
	}

	:global(.v4 .partner-rows) {
		display: grid;
		gap: 1rem;
	}

	:global(.v4 .partner-rows article) {
		align-items: center;
		background: #ece3d9;
		border-radius: 1.5rem;
		display: grid;
		gap: 1.2rem;
		grid-template-columns: minmax(12rem, 0.28fr) 1fr;
		padding: 1rem;
	}

	:global(.v4 .partner-rows span) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.v4 .contact-panel) {
		background: #ece3d9;
		border-radius: 1.5rem;
		display: grid;
		gap: 1rem;
		padding: 1.2rem;
	}

	:global(.v4 .contact-panel a:not(.primary)),
	:global(.v4 .contact-panel span) {
		align-items: center;
		border-bottom: 1px solid rgba(49, 45, 42, 0.14);
		display: flex;
		gap: 0.65rem;
		padding-bottom: 0.85rem;
	}

	@media (max-width: 900px) {
		:global(.v4 .utility) {
			grid-template-columns: 1fr;
			justify-items: start;
		}

		:global(.v4 nav) {
			justify-content: flex-start;
		}

		:global(.v4 .hero-card),
		:global(.v4 .essay),
		:global(.v4 .contact),
		:global(.v4 .area-ledger article),
		:global(.v4 .quality-grid),
		:global(.v4 .partner-rows article),
		:global(.v4 ul) {
			grid-template-columns: 1fr;
		}
	}
</style>
