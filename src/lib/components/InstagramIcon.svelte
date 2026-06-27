<script lang="ts">
	let {
		size = 20,
		strokeWidth = 1.9
	}: {
		size?: number;
		strokeWidth?: number;
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<rect x="3" y="3" width="18" height="18" rx="5" />
	<circle cx="12" cy="12" r="4" />
	<circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
</svg>
