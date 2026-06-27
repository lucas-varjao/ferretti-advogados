<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import WhatsAppIcon from '$lib/components/WhatsAppIcon.svelte';
	import { contact, navItems } from '$lib/content/site';

	let {
		logo,
		tone = 'light'
	}: {
		logo: string;
		tone?: 'light' | 'dark';
	} = $props();

	let open = $state(false);

	function closeMenu() {
		open = false;
	}
</script>

<header class={`site-nav ${tone}`}>
	<a class="brand-link" href="#top" aria-label="Ferretti Advogados" onclick={closeMenu}>
		<img src={logo} alt="Ferretti Advogados" />
	</a>

	<nav class="desktop-links" aria-label="Navegação principal">
		{#each navItems as item (item.href)}
			<a class="menu-link" href={item.href}>{item.label}</a>
		{/each}
	</nav>

	<a class="desktop-whatsapp" href={contact.whatsappHref} target="_blank" rel="noreferrer">
		<WhatsAppIcon size={17} />
		<span>WhatsApp</span>
	</a>

	<button
		class="menu-toggle"
		type="button"
		aria-label={open ? 'Fechar menu' : 'Abrir menu'}
		aria-expanded={open}
		onclick={() => (open = !open)}
	>
		{#if open}
			<X size={22} />
		{:else}
			<Menu size={22} />
		{/if}
	</button>

	{#if open}
		<div class="mobile-panel">
			<nav aria-label="Navegação principal mobile">
				{#each navItems as item (item.href)}
					<a class="menu-link" href={item.href} onclick={closeMenu}>{item.label}</a>
				{/each}
			</nav>
			<a class="mobile-whatsapp" href={contact.whatsappHref} target="_blank" rel="noreferrer">
				<WhatsAppIcon size={17} />
				<span>WhatsApp</span>
			</a>
		</div>
	{/if}
</header>

<style>
	.site-nav {
		--nav-text: var(--ferretti-ink);
		--nav-muted: rgba(49, 45, 42, 0.66);
		--nav-button-bg: var(--ferretti-ink);
		--nav-button-text: var(--ferretti-porcelain);
		--nav-panel-bg: rgba(251, 246, 241, 0.96);
		align-items: center;
		color: var(--nav-text);
		display: grid;
		gap: 1rem;
		grid-template-columns: auto 1fr auto;
		margin-inline: auto;
		max-width: 1120px;
		padding: 0.85rem clamp(1rem, 4vw, 2rem);
		position: relative;
		width: 100%;
		z-index: 20;
	}

	.site-nav.dark {
		--nav-text: var(--ferretti-porcelain);
		--nav-muted: rgba(251, 246, 241, 0.72);
		--nav-button-bg: var(--ferretti-linen);
		--nav-button-text: var(--ferretti-ink);
		--nav-panel-bg: rgba(49, 45, 42, 0.97);
	}

	.brand-link {
		display: inline-flex;
	}

	.brand-link img {
		display: block;
		width: clamp(8.2rem, 14vw, 11.5rem);
	}

	.desktop-links {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 1rem;
		justify-content: center;
	}

	.menu-link {
		color: var(--nav-muted);
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		padding: 0.45rem 0;
		text-transform: uppercase;
	}

	.menu-link:hover {
		color: var(--nav-text);
	}

	.desktop-whatsapp,
	.mobile-whatsapp {
		align-items: center;
		background: var(--nav-button-bg);
		border-radius: 999px;
		color: var(--nav-button-text);
		display: inline-flex;
		font-weight: 800;
		gap: 0.55rem;
		justify-content: center;
		padding: 0.8rem 1rem;
		white-space: nowrap;
	}

	.menu-toggle {
		align-items: center;
		background: transparent;
		border: 1px solid color-mix(in srgb, var(--nav-text) 28%, transparent);
		border-radius: 999px;
		color: var(--nav-text);
		display: none;
		height: 2.75rem;
		justify-content: center;
		width: 2.75rem;
	}

	.mobile-panel {
		background: var(--nav-panel-bg);
		border: 1px solid color-mix(in srgb, var(--nav-text) 14%, transparent);
		display: grid;
		gap: 1rem;
		grid-column: 1 / -1;
		margin-top: 0.5rem;
		padding: 1rem;
	}

	.mobile-panel nav {
		display: grid;
		gap: 0.5rem;
	}

	.mobile-panel .menu-link {
		border-bottom: 1px solid color-mix(in srgb, var(--nav-text) 12%, transparent);
		padding-block: 0.7rem;
	}

	.mobile-whatsapp {
		justify-self: start;
	}

	@media (max-width: 820px) {
		.site-nav {
			grid-template-columns: 1fr auto;
		}

		.desktop-links,
		.desktop-whatsapp {
			display: none;
		}

		.menu-toggle {
			display: inline-flex;
		}
	}
</style>
