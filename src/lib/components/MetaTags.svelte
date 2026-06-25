<script lang="ts">
	import { seo } from '$lib/content/site';

	let {
		title,
		description = seo.description
	}: {
		title: string;
		description?: string;
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
</svelte:head>
