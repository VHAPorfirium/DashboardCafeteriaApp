# ☕ Café Aroma — Sistema de Pedidos

Aplicação web de cardápio interativo para uma cafeteria, desenvolvida com **React + Vite + TypeScript** e **Bootstrap 5 via CDN**.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

## 🗂️ Estrutura de Pastas

```
src/
├── types/          # Interfaces TypeScript (contratos de dados)
├── data/           # Dados mockados do cardápio
├── styles/         # CSS externo com variáveis de cor
└── components/
    ├── layout/     # Header e Footer (estrutura da página)
    ├── dashboard/  # Contadores dinâmicos
    ├── cardapio/   # Cards, filtros e lista do cardápio
    ├── pedido/     # Sidebar com resumo do pedido
    └── ui/         # Componentes reutilizáveis (Badge, etc.)
```

## 🧱 Justificativa da Arquitetura

A divisão dos componentes seguiu o princípio de **separação de responsabilidades**:

- **`types/`** centraliza todos os contratos TypeScript (`IItemCardapio`, `IItemPedido`, `IDashboardCafeteria`), garantindo tipagem consistente em toda a aplicação sem duplicação.

- **`App.tsx`** é o único detentor do estado global (`useState`). Ele calcula o dashboard via `useMemo` de forma derivada — sem estado redundante — e distribui handlers para os filhos via props, mantendo um fluxo de dados unidirecional claro.

- **`components/layout/`** contém `HeaderCafeteria` e `FooterCafeteria`, isolados pois são puramente estruturais e nunca precisam de estado.

- **`components/dashboard/`** recebe o objeto `IDashboardCafeteria` já calculado e apenas renderiza — sem lógica interna, facilitando testes e reuso.

- **`components/cardapio/`** agrupa `CardItem`, `FiltroCategorias` e `ListaCardapio`, que formam um subdomínio coeso. `CardItem` é deliberadamente "burro" (dumb component): recebe dados e dispara o callback `aoAlternarSelecao`, sem saber como o estado é gerenciado.

- **`components/pedido/SidebarPedido`** é isolado em sua própria pasta porque representa um contexto de negócio diferente (resumo do pedido), não o catálogo em si.

- **`components/ui/`** guarda componentes atômicos reutilizáveis (`BadgeStatus`) sem dependência de domínio.

Essa estrutura garante que adicionar uma nova funcionalidade (ex: quantidade de itens) exige mudança em apenas um lugar — o tipo e o estado em `App.tsx` — sem quebrar os demais componentes.

## ✅ Requisitos Atendidos

| Requisito | Implementação |
|-----------|--------------|
| React + Vite + TypeScript | Configurado com `tsconfig` strict |
| Bootstrap via CDN | `index.html` com link do Bootstrap 5.3 |
| Interfaces TypeScript | `src/types/cafeteria.types.ts` |
| Layout responsivo assimétrico | `col-md-3` / `col-md-9`, empilha no mobile |
| Tags semânticas HTML5 | `<header>`, `<main>`, `<section>`, `<aside>`, `<address>` |
| Dashboard com contadores dinâmicos | `DashboardCafeteria` + `useMemo` |
| Status visual ao interagir | Toggle de seleção nos cards com classe CSS |
| CSS externo customizado | `src/styles/cafeteria.css` com variáveis de cor |
| Rodapé com identificação | `FooterCafeteria` com `<address>` |

## 👤 Identificação

**Victor Hugo Aguiar Porfiro**  
Desenvolvimento de Software WEB — Prof. Alexandre Cláudio de Almeida  
Escola Politécnica — Análise e Desenvolvimento de Sistemas
