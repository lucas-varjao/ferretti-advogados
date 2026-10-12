# Ferretti Advogados

Landing page do escritório **Ferretti Advogados**, especializado em advocacia trabalhista estratégica para trabalhadores e empresas.

🔗 [advocaciaferretti.com.br](https://advocaciaferretti.com.br)

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) + Svelte 5 (runes)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Lucide](https://lucide.dev) para ícones
- Deploy em [Cloudflare Pages](https://pages.cloudflare.com) via `@sveltejs/adapter-cloudflare`

## Estrutura

```
src/
├── lib/
│   ├── assets/brand/   # logos, fontes e fotos dos sócios
│   ├── components/     # componentes da landing page
│   ├── content/site.ts # textos, contatos e dados editáveis
│   └── styles/         # tokens e estilos da marca
└── routes/
    ├── +page.svelte    # página principal
    └── sitemap.xml/    # sitemap gerado no servidor
```

O conteúdo editável (textos, contatos e dados dos sócios) fica centralizado em `src/lib/content/site.ts`.

## Desenvolvimento

Requer Node.js e [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

## Validação

```sh
pnpm check   # svelte-check + TypeScript
pnpm lint    # Prettier + ESLint
pnpm build   # build de produção
```

## Deploy

```sh
pnpm preview # build + servidor local do Wrangler
pnpm deploy  # build + deploy no Cloudflare Pages
```

## Licença

O **código-fonte** deste repositório está licenciado sob a [licença MIT](LICENSE).

A licença **não** cobre a identidade visual nem o conteúdo do escritório: nome, logos, fotos dos sócios e textos institucionais pertencem à Ferretti Advogados e não podem ser reutilizados sem autorização.

As fontes [Sora](https://fonts.google.com/specimen/Sora) e [Noto Serif Display](https://fonts.google.com/noto/specimen/Noto+Serif+Display) são distribuídas sob a [SIL Open Font License 1.1](https://openfontlicense.org).
