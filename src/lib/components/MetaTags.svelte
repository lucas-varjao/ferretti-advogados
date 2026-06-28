<script lang="ts">
	import { brand, contact, partners, practiceAreas, seo } from '$lib/content/site';

	type Props = {
		title?: string;
		description?: string;
		path?: string;
		image?: string;
	};

	let {
		title = seo.title,
		description = seo.description,
		path = '/',
		image = seo.image
	}: Props = $props();

	function absoluteUrl(pathOrUrl: string) {
		return new URL(pathOrUrl, brand.siteUrl).toString();
	}

	let canonicalUrl = $derived(absoluteUrl(path));
	let imageUrl = $derived(absoluteUrl(image));
	let structuredData = $derived({
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		'@id': `${brand.siteUrl}/#legalservice`,
		name: brand.name,
		url: canonicalUrl,
		description,
		image: imageUrl,
		telephone: contact.whatsappNumber,
		email: contact.email,
		sameAs: [contact.instagramHref],
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'São Paulo' },
			{ '@type': 'Country', name: 'Brasil' }
		],
		founder: partners.map((partner) => ({
			'@type': 'Person',
			name: partner.name,
			jobTitle: partner.role,
			identifier: partner.oab
		})),
		knowsAbout: practiceAreas.flatMap((area) => area.items)
	});
	let structuredDataJson = $derived(JSON.stringify(structuredData).replace(/</g, '\\u003c'));
	let structuredDataTag = $derived(
		'<script type="application/ld+json">' + structuredDataJson + '<' + '/script>'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" hreflang="pt-BR" href={canonicalUrl} />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta name="description" content={description} />
	<meta name="author" content={brand.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={brand.name} />
	<meta property="og:locale" content={seo.locale} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={seo.imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={seo.imageAlt} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html structuredDataTag}
</svelte:head>
