<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<p class="section-label">{label}</p>

<style>
	.section-label {
		align-items: center;
		color: var(--ferretti-taupe);
		display: inline-flex;
		font-size: 0.72rem;
		font-weight: 800;
		gap: 0.7rem;
		letter-spacing: 0.18em;
		margin: 0;
		text-transform: uppercase;
	}

	.section-label::before {
		background: currentColor;
		content: '';
		height: 1px;
		width: 2.3rem;
	}
</style>
