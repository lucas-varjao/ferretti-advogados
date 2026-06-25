<script lang="ts">
	import { MessageCircle } from 'lucide-svelte';
	import { contact } from '$lib/content/site';

	let {
		label = 'Falar no WhatsApp',
		variant = 'solid',
		class: className = ''
	}: {
		label?: string;
		variant?: 'solid' | 'outline' | 'ghost';
		class?: string;
	} = $props();
</script>

<a
	class={`whatsapp-button ${variant} ${className}`}
	href={contact.whatsappHref}
	target="_blank"
	rel="noreferrer"
>
	<MessageCircle size={18} strokeWidth={2.2} />
	<span>{label}</span>
</a>

<style>
	.whatsapp-button {
		align-items: center;
		border-radius: 999px;
		display: inline-flex;
		font-size: 0.9rem;
		font-weight: 700;
		gap: 0.55rem;
		justify-content: center;
		min-height: 2.9rem;
		padding: 0.82rem 1.05rem;
		transition:
			background 180ms ease,
			border-color 180ms ease,
			color 180ms ease,
			transform 180ms ease;
		white-space: nowrap;
	}

	.whatsapp-button:hover {
		transform: translateY(-1px);
	}

	.solid {
		background: var(--ferretti-linen);
		color: var(--ferretti-ink);
	}

	.solid:hover {
		background: var(--ferretti-porcelain);
	}

	.outline {
		background: rgba(251, 246, 241, 0.04);
		border: 1px solid var(--ferretti-border-strong);
		color: var(--ferretti-porcelain);
	}

	.outline:hover {
		border-color: var(--ferretti-linen);
	}

	.ghost {
		background: rgba(155, 141, 130, 0.16);
		color: var(--ferretti-porcelain);
	}
</style>
