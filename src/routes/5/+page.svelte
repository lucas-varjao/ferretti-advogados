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

<MetaTags title="Ferretti Advogados | Proposta 5 - Imersiva Moderna" />

<main id="top" class="v5">
	<ResponsiveNav logo={logoLight} tone="dark" />

	<section class="hero">
		<Reveal>
			<p class="kicker">Advocacia e consultoria jurídica</p>
			<h1>Presença jurídica para decisões trabalhistas.</h1>
			<p>{home.description}</p>
		</Reveal>
		<Reveal delay={120}>
			<div class="signal">
				<img src={logoMark} alt="" aria-hidden="true" />
				<p>{home.paragraphs[2]}</p>
			</div>
		</Reveal>
	</section>

	<section id="escritorio" class="band office">
		<Reveal>
			<p class="kicker">O escritório</p>
			<h2>Atendimento direto e responsável.</h2>
		</Reveal>
		<div class="office-copy">
			{#each office.paragraphs as paragraph, index (index)}
				<Reveal delay={index * 80}>
					<p>{paragraph}</p>
				</Reveal>
			{/each}
		</div>
	</section>

	<section id="atuacao" class="band">
		<Reveal class="heading">
			<p class="kicker">Área de atuação</p>
			<h2>Atuação trabalhista.</h2>
		</Reveal>
		<div class="area-panels">
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

	<section id="diferenciais" class="band timeline-band">
		<Reveal class="heading">
			<p class="kicker">Diferenciais</p>
			<h2>Do contato à estratégia.</h2>
		</Reveal>
		<div class="timeline">
			{#each differentiators as item, index (item.title)}
				<Reveal delay={index * 70}>
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

	<section id="socios" class="band partners">
		<Reveal class="heading">
			<p class="kicker">Sócios</p>
			<h2>Sócios na condução dos casos.</h2>
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

	<section id="contato" class="band contact">
		<Reveal>
			<p class="kicker">Contato</p>
			<h2>Fale diretamente com o escritório.</h2>
			<p>Cada situação merece atenção individual para definir o melhor caminho.</p>
		</Reveal>
		<Reveal>
			<div class="contact-actions">
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
	:global(.v5) {
		background: #25211e;
		color: var(--ferretti-porcelain);
		min-height: 100vh;
	}

	:global(.v5 .primary) {
		align-items: center;
		background: var(--ferretti-linen);
		border-radius: 999px;
		color: var(--ferretti-ink);
		display: inline-flex;
		font-weight: 800;
		gap: 0.55rem;
		justify-content: center;
		padding: 0.8rem 1rem;
	}

	:global(.v5 .hero),
	:global(.v5 .band) {
		margin-inline: auto;
		max-width: 1180px;
		padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 4vw, 3rem);
	}

	:global(.v5 .hero) {
		align-items: center;
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.65fr);
		min-height: 82vh;
	}

	:global(.v5 .kicker) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		margin: 0 0 0.85rem;
		text-transform: uppercase;
	}

	:global(.v5 h1),
	:global(.v5 h2) {
		font-size: clamp(2.35rem, 5.5vw, 4.75rem);
		font-weight: 700;
		line-height: 1.04;
		margin: 0;
		max-width: 15ch;
		text-wrap: balance;
	}

	:global(.v5 h2) {
		font-size: clamp(1.85rem, 3.6vw, 3.1rem);
	}

	:global(.v5 .hero p:not(.kicker)),
	:global(.v5 .signal p),
	:global(.v5 .office-copy p),
	:global(.v5 article p),
	:global(.v5 .heading > p),
	:global(.v5 .contact p),
	:global(.v5 .contact-actions span) {
		color: rgba(251, 246, 241, 0.7);
		line-height: 1.72;
	}

	:global(.v5 .hero p:not(.kicker)) {
		font-size: clamp(1rem, 1.4vw, 1.14rem);
		max-width: 38rem;
	}

	:global(.v5 .signal) {
		background: linear-gradient(145deg, rgba(155, 141, 130, 0.22), rgba(236, 227, 217, 0.06));
		border: 1px solid rgba(236, 227, 217, 0.16);
		display: grid;
		gap: 2rem;
		min-height: 20rem;
		padding: clamp(1.4rem, 4vw, 2.5rem);
	}

	:global(.v5 .signal img) {
		opacity: 0.72;
		width: min(8rem, 44%);
	}

	:global(.v5 .office),
	:global(.v5 .contact) {
		display: grid;
		gap: clamp(2rem, 6vw, 5rem);
		grid-template-columns: minmax(0, 0.78fr) 1fr;
	}

	:global(.v5 .office-copy) {
		display: grid;
		gap: 1rem;
	}

	:global(.v5 .heading) {
		display: grid;
		gap: 0.85rem;
		margin-bottom: 2rem;
		max-width: 780px;
	}

	:global(.v5 .area-panels),
	:global(.v5 .partner-grid) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.v5 .area-panels article),
	:global(.v5 .partner-grid article) {
		background: rgba(236, 227, 217, 0.07);
		border: 1px solid rgba(236, 227, 217, 0.14);
		min-height: 100%;
		padding: clamp(1.2rem, 3vw, 2rem);
	}

	:global(.v5 h3) {
		font-size: clamp(1.18rem, 2vw, 1.55rem);
		line-height: 1.16;
		margin: 0 0 0.75rem;
	}

	:global(.v5 ul) {
		display: grid;
		gap: 0.55rem;
		list-style: none;
		margin: 1.25rem 0 0;
		padding: 0;
	}

	:global(.v5 li) {
		border-top: 1px solid rgba(236, 227, 217, 0.14);
		color: rgba(251, 246, 241, 0.82);
		padding-top: 0.55rem;
	}

	:global(.v5 .timeline-band) {
		background: #312d2a;
		max-width: none;
	}

	:global(.v5 .timeline-band > *) {
		margin-inline: auto;
		max-width: 1180px;
	}

	:global(.v5 .timeline) {
		display: grid;
		gap: 0;
	}

	:global(.v5 .timeline article) {
		align-items: baseline;
		border-top: 1px solid rgba(236, 227, 217, 0.14);
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 3rem 1fr;
		padding-block: 1.2rem;
	}

	:global(.v5 .area-panels svg),
	:global(.v5 .timeline svg) {
		color: var(--ferretti-taupe);
		margin-bottom: 1rem;
	}

	:global(.v5 .timeline span),
	:global(.v5 .partner-grid span) {
		color: var(--ferretti-taupe);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.v5 .partner-grid article) {
		display: grid;
		gap: 1.2rem;
	}

	:global(.v5 .contact-actions) {
		display: grid;
		gap: 1rem;
	}

	:global(.v5 .contact-actions a:not(.primary)),
	:global(.v5 .contact-actions span) {
		align-items: center;
		border-bottom: 1px solid rgba(236, 227, 217, 0.16);
		display: flex;
		gap: 0.65rem;
		padding-bottom: 0.85rem;
	}

	@media (max-width: 920px) {
		:global(.v5 .hero),
		:global(.v5 .office),
		:global(.v5 .contact),
		:global(.v5 .area-panels),
		:global(.v5 .partner-grid),
		:global(.v5 .timeline article) {
			grid-template-columns: 1fr;
		}
	}
</style>
