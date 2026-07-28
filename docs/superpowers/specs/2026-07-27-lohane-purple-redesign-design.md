# Redesign Portfólio Gabriel — Estilo Lohane (Roxo + Branco)

**Data:** 2026-07-27  
**Status:** Aguardando aprovação do usuário  
**Referência visual:** https://llohs.github.io/llohs-dev/  
**Repositório:** `project/` (Vite + React + TypeScript + Tailwind)

---

## 1. Objetivo

Adaptar o portfólio do Gabriel para a **estrutura e linguagem visual** do site da Lohane (layout editorial, tipografia pesada, blocos de cor, labels estilo código), com paleta **roxo + branco**, mantendo conteúdo e elementos próprios do portfólio atual.

Não é um clone pixel-perfect nem cópia de assets/textos dela — é uma **adaptação inspirada**, com identidade Gabriel Dev Wak.

---

## 2. Decisões confirmadas

| Decisão | Escolha |
|---------|---------|
| Escopo | Rebuild visual completo (abordagem 1) |
| Hero | Estilo Lohane (texto + visual), com **boneco** do Gabriel |
| Cores | Roxo + branco (substitui azul/amarelo e o verde limão da referência) |
| Manter | GIFs/fumaça Digital, ícones tech do Sobre, área de projetos, FAQ |
| Remover | Cards flutuantes estilo Johan, tipografia mega-central atual, paleta azul/amarelo |

---

## 3. Identidade visual

### 3.1 Tokens de cor

**Modo claro (base branca)**
- `--bg`: off-white / branco
- `--surface`: branco com leve tint roxo
- `--text`: roxo quase preto / charcoal
- `--muted`: cinza-roxo
- `--accent`: roxo vibrante (ex.: `#7C3AED` / `#8B5CF6`)
- `--accent-soft`: roxo com alpha baixo
- Seções “bloco accent”: fundo accent + texto escuro (equivalente ao verde limão da referência)

**Modo escuro (base roxa escura)**
- `--bg`: roxo muito escuro / near-black com undertone roxo (não preto puro genérico)
- `--text`: branco / off-white
- `--accent`: lilás/roxo claro para contraste
- Blocos accent: mesmo roxo vibrante, texto branco ou escuro conforme legibilidade

### 3.2 Tipografia

- **Display:** fonte sans pesada/condensada (ex.: Archivo Black, Bebas Neue ou similar via `next/font`/`@fontsource` / Google Fonts) — headlines em uppercase
- **Body:** sans limpa atual (Poppins) ou manter Poppins para corpo
- **Mono:** JetBrains Mono / Fira Code para labels `/* seção */`, tags e detalhes “terminal”

### 3.3 Motivos visuais (inspirados, não copiados)

- Labels estilo comentário: `/* sobre mim */`
- Pills/tags com borda fina
- Alternância de seções: fundo claro ↔ bloco accent ↔ fundo escuro
- Detalhe terminal leve (prompt `>_` ou janela simples) — opcional no hero/contato, sem exagerar
- Partículas/dots sutis no fundo escuro (CSS), sem canvas pesado

---

## 4. Arquitetura de páginas e seções

### 4.1 Navegação

Manter rotas atuais:
- `/` — Home (landing com as seções principais)
- `/sobre` — página Sobre (alinhada ao novo visual)
- `/projetos` — listagem completa
- `/contato` — formulário + links

Nav estilo Lohane: logo `GABRIEL.DEV` / logo PNG atual + links + theme toggle.  
Badge “OPEN TO WORK” — **opcional**; incluir só se Gabriel confirmar.

### 4.2 Home — ordem das seções

1. **Hero** (estilo Lohane + boneco)
2. **Sobre** (textos Gabriel + ícones tech de fundo — `TechFloatBg` / marquee)
3. **Projetos** (cards atuais com imagens — `ProjectShowcase` / dados de `projects.ts`)
4. **Serviços** (pode virar “stack/serviços” no visual novo, conteúdo de `services`)
5. **FAQ** (`FAQSection` — conteúdo e comportamento atuais)
6. **CTA / Contato teaser** (bloco accent + link para `/contato`)
7. **Footer** redesenhado no mesmo sistema visual

### 4.3 Hero (detalhe)

- Layout 2 colunas (desktop): texto à esquerda, boneco à direita
- Eyebrow: ex. `FULL STACK • REACT • NODE • TYPESCRIPT`
- Headline pesada (não necessariamente as 3 linhas “Experiência / Digital / Excepcional” centradas)
- Incluir palavra **Digital** com efeito GIF/fumaça em **roxo** (reusar lógica de `DigitalText`, recolorir tokens)
- CTAs: “Ver projetos” + “Contato” (ou currículo se existir PDF)
- Boneco: `/boneco.png` (já transparente), sem cards flutuantes por cima
- Mobile: stack vertical, boneco abaixo ou lateral reduzida

### 4.4 Sobre

- Label `/* um pouco sobre mim */`
- Headline display + bio atual
- Tags de stack (pills)
- **Manter ícones/gifs de tech no fundo** (`TechFloatBg` e/ou ícones do marquee)
- Stats opcionais (anos, projetos, stacks) — números reais do Gabriel

### 4.5 Projetos

- Seção em **bloco accent** (roxo) ou grid com regras finas estilo Lohane
- **Manter imagens/cards atuais** (`ProjectShowcase`, imagens CodePit, Grand'Oro, etc.)
- Filtros por tag — **fase 2** se quiser; v1 sem filtro, só grid
- Links GitHub / demo preservados

### 4.6 FAQ

- **Manter componente e conteúdo** (`FAQSection` + `faqs`)
- Só restyle visual (bordas, tipografia, cores) para casar com o sistema novo

### 4.7 Contato

- Bloco accent + formulário atual (`ContactPage` + Supabase opcional)
- Links: telefone `(15) 98830-8477`, LinkedIn, GitHub

---

## 5. O que reutilizar vs reescrever

| Manter / adaptar | Remover ou substituir |
|------------------|------------------------|
| `projects.ts` (dados) | `FloatingProjects` no hero |
| `FAQSection` (lógica + copy) | Paleta azul/amarelo |
| `DigitalText` (efeito, cores novas) | Hero tipografia central Johan |
| `TechFloatBg` / ícones tech | `HeroBackground` orbs se conflitar |
| `ProjectShowcase` (cards) | |
| `boneco.png`, logos, preview | |
| ThemeContext (claro/escuro) | |
| Rotas e Layout base | |

---

## 6. Implementação (alto nível)

1. Novos tokens CSS (`:root` / `.dark`) roxo + branco  
2. Fontes display + mono no `index.html` / CSS  
3. Redesign `Navigation` + `Footer`  
4. Novo `Hero` (componente) + integração boneco + Digital roxo  
5. Restyle seções Home (Sobre, Projetos, Serviços, FAQ, CTA)  
6. Alinhar `/sobre`, `/projetos`, `/contato` ao mesmo sistema  
7. Remover/desligar floating cards do hero  
8. QA mobile + tema claro/escuro  
9. Deploy Vercel  

**Stack permanece:** Vite + React + TS + Tailwind + react-router. Sem novo framework.

---

## 7. Fora de escopo (v1)

- Idioma EN/PT toggle  
- Seção “segurança/cyber” da Lohane (não é o foco do Gabriel)  
- Clone pixel-perfect / assets dela  
- Filtros avançados de projetos (pode ser v2)  
- Troca de stack (Next.js, etc.)

---

## 8. Critérios de sucesso

- [ ] Primeira dobra lembra Lohane (layout + tipografia + contraste), com boneco Gabriel  
- [ ] Paleta claramente roxo + branco nos dois temas  
- [ ] Projetos, FAQ, ícones do Sobre e efeito Digital preservados  
- [ ] Sem tela preta / crash de env (Supabase continua opcional)  
- [ ] Responsivo mobile legível  
- [ ] Deploy em `portifoliowak.vercel.app`

---

## 9. Riscos

- **Copiar demais a referência:** mitigar com copy/estrutura Gabriel e cores próprias  
- **Regressão do flicker do boneco:** manter mascote fora de filtros SVG animados  
- **Contraste roxo em light/dark:** validar WCAG aproximado nos botões e texto

---

## Aprovação

Por favor revise este arquivo e confirme se pode seguir para o **plano de implementação** e o código.

- [ ] Aprovado como está  
- [ ] Aprovado com ajustes: _______________  
