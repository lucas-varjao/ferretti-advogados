<script lang="ts">
	import { ArrowUp, MessageCircle } from 'lucide-svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
	import { contact } from '$lib/content/site';
</script>

<div class="floating-actions" aria-label="Ações rápidas">
	<a
		class="float-button"
		href={contact.whatsappHref}
		target="_blank"
		rel="noreferrer"
		aria-label="Abrir WhatsApp"
	>
		<MessageCircle size={20} />
	</a>
	<a
		class="float-button"
		href={contact.instagramHref}
		target="_blank"
		rel="noreferrer"
		aria-label="Abrir Instagram"
	>
		<InstagramIcon size={20} />
	</a>
	<a class="float-button" href="#top" aria-label="Voltar ao topo">
		<ArrowUp size={20} />
	</a>
</div>

<style>
	.floating-actions {
		bottom: 1rem;
		display: grid;
		gap: 0.7rem;
		position: fixed;
		right: 1rem;
		z-index: 60;
	}

	.float-button {
		align-items: center;
		background: var(--ferretti-ink);
		border: 1px solid rgba(251, 246, 241, 0.18);
		border-radius: 999px;
		box-shadow: 0 0.8rem 2.2rem rgba(0, 0, 0, 0.22);
		color: var(--ferretti-porcelain);
		display: inline-flex;
		height: 3rem;
		justify-content: center;
		width: 3rem;
	}

	.float-button:hover {
		background: var(--ferretti-brown);
	}

	@media (max-width: 640px) {
		.floating-actions {
			bottom: 0.75rem;
			right: 0.75rem;
		}
	}
</style>
