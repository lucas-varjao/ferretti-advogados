<script lang="ts">
	import { Clock, Mail, MapPin } from 'lucide-svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
	import WhatsAppIcon from '$lib/components/WhatsAppIcon.svelte';
	import logoDark from '$lib/assets/brand/logos/logo_ferretti_02.svg';
	import logoLight from '$lib/assets/brand/logos/logo_ferretti_03.svg';
	import { contact, navItems } from '$lib/content/site';

	let { tone = 'dark' }: { tone?: 'light' | 'dark' } = $props();
	const logo = $derived(tone === 'light' ? logoDark : logoLight);
</script>

<footer class={`variant-footer ${tone}`}>
	<div class="footer-inner">
		<div class="brand-block">
			<img src={logo} alt="Ferretti Advogados" />
			<p>Advocacia e consultoria jurídica especializada em Direito do Trabalho.</p>
		</div>

		<nav aria-label="Navegação do rodapé">
			{#each navItems as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>

		<div class="contact-block">
			<a href={contact.whatsappHref} target="_blank" rel="noreferrer">
				<WhatsAppIcon size={17} />
				{contact.whatsappLabel} · {contact.whatsappNumber}
			</a>
			{#each contact.emails as email (email.href)}
				<a href={email.href}><Mail size={17} /> {email.label}</a>
			{/each}
			<a href={contact.instagramHref} target="_blank" rel="noreferrer">
				<InstagramIcon size={17} />
				{contact.instagram}
			</a>
			<span><MapPin size={17} /> {contact.service}</span>
			<span><Clock size={17} /> {contact.hours}</span>
		</div>
	</div>
</footer>

<style>
	.variant-footer {
		border-top: 1px solid currentColor;
		padding: clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 3rem);
	}

	.variant-footer.dark {
		background: #201d1a;
		border-color: rgba(236, 227, 217, 0.14);
		color: var(--ferretti-porcelain);
	}

	.variant-footer.light {
		background: #ece3d9;
		border-color: rgba(49, 45, 42, 0.12);
		color: var(--ferretti-ink);
	}

	.footer-inner {
		display: grid;
		gap: 2rem;
		grid-template-columns: minmax(0, 1.2fr) minmax(10rem, 0.55fr) minmax(16rem, 0.85fr);
		margin-inline: auto;
		max-width: 1180px;
	}

	.brand-block img {
		display: block;
		margin-bottom: 1.2rem;
		width: min(12.5rem, 100%);
	}

	p,
	a,
	span {
		color: color-mix(in srgb, currentColor 72%, transparent);
		line-height: 1.58;
	}

	p {
		margin: 0;
		max-width: 28rem;
	}

	nav,
	.contact-block {
		display: grid;
		gap: 0.75rem;
	}

	nav a {
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.contact-block a,
	.contact-block span {
		align-items: start;
		display: grid;
		gap: 0.65rem;
		grid-template-columns: 1.1rem minmax(0, 1fr);
	}

	.contact-block :global(svg) {
		display: block;
		justify-self: center;
		margin-top: 0.25em;
	}

	a:hover {
		color: currentColor;
	}

	@media (max-width: 820px) {
		.footer-inner {
			grid-template-columns: 1fr;
		}
	}
</style>
