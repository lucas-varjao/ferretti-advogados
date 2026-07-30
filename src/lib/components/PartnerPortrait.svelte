<script lang="ts">
	let {
		name,
		initials,
		src = '',
		variant = 'framed',
		objectPosition = 'center'
	}: {
		name: string;
		initials: string;
		src?: string;
		variant?: 'framed' | 'editorial';
		objectPosition?: string;
	} = $props();
</script>

<div class={`portrait ${variant}`} aria-label={`Retrato de ${name}`}>
	{#if src}
		<img
			{src}
			alt={`Retrato de ${name}`}
			loading="lazy"
			decoding="async"
			style:object-position={objectPosition}
		/>
	{:else}
		<span>{initials}</span>
	{/if}
</div>

<style>
	.portrait {
		align-items: center;
		aspect-ratio: 4 / 5;
		background:
			linear-gradient(135deg, rgba(251, 246, 241, 0.08), rgba(155, 141, 130, 0.26)),
			var(--ferretti-brown);
		border: 1px solid var(--ferretti-border);
		display: grid;
		justify-items: center;
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.portrait::after {
		border: 1px solid rgba(236, 227, 217, 0.18);
		content: '';
		inset: 1rem;
		position: absolute;
	}

	.portrait img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	.portrait span {
		color: rgba(251, 246, 241, 0.82);
		font-family: 'Noto Serif Display', Georgia, serif;
		font-size: clamp(3rem, 9vw, 7rem);
		font-style: italic;
		line-height: 1;
	}

	.editorial {
		aspect-ratio: 1 / 1.12;
		border-radius: 0;
	}
</style>
