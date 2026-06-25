<script lang="ts">
	import logoHorizontal from '$lib/assets/brand/logos/logo_ferretti_03.svg';
	import MetaTags from '$lib/components/MetaTags.svelte';
</script>

<MetaTags title="Ferretti Advogados | Propostas de landing page" />

<main class="selector-page">
	<section class="selector-card" aria-labelledby="page-title">
		<img src={logoHorizontal} alt="Ferretti Advogados" />
		<p class="eyebrow">Propostas de landing page</p>
		<h1 id="page-title" class="brand-serif">Escolha uma direção visual para analisar.</h1>
		<p>
			Sete versões completas foram preparadas com a identidade Ferretti, conteúdo institucional,
			animações no scroll e CTA para WhatsApp.
		</p>
		<nav aria-label="Propostas">
			{#each [1, 2, 3, 4, 5, 6, 7] as variant (variant)}
				<a href={`/${variant}`}>Proposta {variant}</a>
			{/each}
		</nav>
	</section>
</main>

<style>
	.selector-page {
		align-items: center;
		background:
			linear-gradient(rgba(49, 45, 42, 0.88), rgba(49, 45, 42, 0.94)),
			radial-gradient(circle at 72% 10%, rgba(155, 141, 130, 0.3), transparent 36rem);
		display: grid;
		min-height: 100vh;
		padding: clamp(1rem, 4vw, 3rem);
	}

	.selector-card {
		border: 1px solid var(--ferretti-border);
		margin-inline: auto;
		max-width: 760px;
		padding: clamp(2rem, 8vw, 5rem);
		width: 100%;
	}

	img {
		margin-bottom: 2.5rem;
		max-width: 18rem;
		width: 100%;
	}

	h1 {
		font-size: clamp(2.8rem, 8vw, 6.5rem);
		font-style: italic;
		font-weight: 500;
		line-height: 0.94;
		margin: 1rem 0 1.4rem;
	}

	p:not(.eyebrow) {
		color: rgba(251, 246, 241, 0.72);
		line-height: 1.75;
		margin: 0;
		max-width: 42rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}

	a {
		background: var(--ferretti-linen);
		border-radius: 999px;
		color: var(--ferretti-ink);
		font-weight: 800;
		padding: 0.85rem 1.1rem;
	}
</style>
