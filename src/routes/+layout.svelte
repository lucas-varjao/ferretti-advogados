<script lang="ts">
	import '$lib/styles/brand.css';
	import './layout.css';
	import FloatingActions from '$lib/components/FloatingActions.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
<FloatingActions />
