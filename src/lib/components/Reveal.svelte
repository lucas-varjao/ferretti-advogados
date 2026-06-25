<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	type Direction = 'up' | 'left' | 'right' | 'scale';

	let {
		children,
		class: className = '',
		delay = 0,
		direction = 'up'
	}: {
		children: Snippet;
		class?: string;
		delay?: number;
		direction?: Direction;
	} = $props();

	let node: HTMLDivElement;
	let visible = $state(false);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			visible = true;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				}
			},
			{ rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
		);

		observer.observe(node);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={node}
	class={`reveal ${visible ? 'is-visible' : ''} ${className}`}
	data-direction={direction}
	style={`--reveal-delay: ${delay}ms`}
>
	{@render children()}
</div>
