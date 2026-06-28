# AGENTS.md - Advocacia Ferretti

## Projeto

Landing page em SvelteKit/Svelte 5, TypeScript e Tailwind, com deploy em Cloudflare Pages.

O objetivo atual é manter a versão definitiva da landing page em `/`.

A proposta escolhida tem direção editorial clara, navegação horizontal minimalista e foco em advocacia trabalhista estratégica para trabalhadores e empresas.

## Comandos

- Use `rtk` como prefixo para comandos de shell.
- Validação mínima antes de finalizar mudanças:
  - `rtk pnpm check`
  - `rtk pnpm lint`
  - `rtk pnpm build`

## Stack e Código

- Use Svelte 5.
- Não use APIs legadas de Svelte:
  - sem `export let`
  - sem `$:`
  - sem `on:` directives
  - sem `<svelte:component>` em runes mode
- Prefira `$props`, `$state`, `$derived` e eventos por props/callbacks quando necessário.
- Use `apply_patch` para edições manuais.
- Mantenha os dados editáveis em `src/lib/content/site.ts`.
- Não dependa de arquivos em `material-visual` em runtime; assets usados pelo app devem estar em `src/lib/assets/brand`.

## Identidade Visual

Paleta base:

- `#443F3C`
- `#312D2A`
- `#9B8D82`
- `#ECE3D9`
- `#FBF6F1`

Essas cores devem orientar a marca. A versão definitiva atual usa tema claro com contraste em tons escuros da marca.

Fontes:

- `Sora` para navegação, corpo, botões e títulos mais objetivos.
- `Noto Serif Display` apenas como detalhe editorial pontual. Não usar em textos grandes de baixa legibilidade.

## Logos

- Não usar versões de logo que já possuem fundo embutido.
- Evitar `logo_ferretti_01.svg` e `logo_ferretti_04.svg` nas páginas.
- Para fundos claros, preferir `logo_ferretti_02.svg`.
- Para fundos escuros, preferir `logo_ferretti_03.svg`.
- Para símbolo isolado, usar `logo_ferretti_05.svg`.

## Navbar

Regra obrigatória:

- A navbar deve ser horizontal em desktop.
- Não criar menu vertical, painel lateral, dock inferior ou navegação em coluna.
- A navbar não deve ter fundo próprio em desktop.
- A navbar não deve ser fixa ou sticky em desktop.
- Ela deve se integrar visualmente ao fundo da própria página/seção.
- A navbar deve seguir o estilo da versão definitiva:
  - logo à esquerda
  - links de navegação ao centro
  - botão WhatsApp à direita
  - visual minimalista e integrado à página
- Em mobile, a navbar deve colapsar e abrir ao clicar no ícone de três linhas.
- Não usar navegação mobile sempre visível ocupando várias linhas.
- Links obrigatórios:
  - `#escritorio`
  - `#atuacao`
  - `#diferenciais`
  - `#socios`
  - `#contato`

## Conteúdo e Tom

- Evitar páginas textualmente carregadas.
- Preferir chamadas curtas, escaneáveis e objetivas.
- Não usar frases de efeito rejeitadas:
  - "Toda causa merece ser ouvida"
  - "Ser ouvido e acolhido"
  - "Sentir que faz parte"
  - "Porta aberta"
  - "Nossa porta estará sempre aberta"
- Não usar o título "Boutique trabalhista".
- Manter foco em:
  - Direito do Trabalho
  - atendimento presencial em São Paulo
  - atendimento online para todo o Brasil
  - condução direta pelos sócios
  - técnica, transparência e responsabilidade

## Layout e Tipografia

- Não usar títulos gigantes que invadam colunas, cards ou seções vizinhas.
- Evitar blocos longos de texto em tela.
- Usar `max-width`, grids responsivos e `clamp` com limites moderados.
- Testar mentalmente e por build que textos longos não sobrepõem elementos.
- Usar ícones para reduzir carga textual, principalmente em:
  - áreas de atuação
  - diferenciais
  - contato
- Cards devem ter respiro, hierarquia clara e texto curto.

## Sócios

- Cards dos sócios devem ser quadrados ou retangulares.
- Não usar fotos/retratos redondos ou aparência de perfil de rede social.
- Fallback com iniciais deve continuar em bloco retangular ou quadrado.
- Se fotos reais forem adicionadas depois, manter `object-fit: cover` e formato retangular/quadrado.

## Mobile

Mobile é essencial.

- Toda seção deve funcionar bem em telas pequenas.
- Não pode haver texto invadindo outras seções.
- Grids devem virar uma coluna quando necessário.
- Navbar deve colapsar em menu acionado por ícone de três linhas.
- CTAs devem ter área de toque confortável.
- Não esconder conteúdo essencial em desktop-only.

## Ações Flutuantes

- O site deve ter botão flutuante para WhatsApp.
- O site deve ter botão flutuante para voltar ao topo.
- Esses botões devem aparecer de forma discreta, sem competir com o conteúdo principal.

## Acessibilidade

- Manter HTML semântico:
  - `header`
  - `main`
  - `section`
  - `nav`
  - `footer`
- Usar um único `h1` por página.
- Links e botões devem ter texto claro.
- Manter contraste adequado em temas claros e escuros.
- Respeitar `prefers-reduced-motion` nas animações.

## Antes de Finalizar

Verificar:

- `/` carrega a versão definitiva.
- A navbar desktop é horizontal, sem fundo próprio e sem fixação.
- A navbar mobile colapsa atrás de ícone de três linhas.
- Existem botões flutuantes de WhatsApp e voltar ao topo.
- Não há frases proibidas no código.
- Não há uso de logo com fundo.
- Cards de sócios não são redondos.
- Layout mobile não sobrepõe texto.
- `rtk pnpm check`, `rtk pnpm lint` e `rtk pnpm build` passam.
