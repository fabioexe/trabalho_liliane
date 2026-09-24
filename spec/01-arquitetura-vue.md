# 01 — Arquitetura Vue

## Stack

```text
Vue 3
TypeScript
Vite
Vue Router
Pinia
Vitest
Vue Test Utils
ESLint
Prettier
```

## Estrutura de pastas

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── components/
│   ├── accessibility/
│   ├── cards/
│   ├── content/
│   ├── layout/
│   ├── media/
│   └── ui/
│
├── composables/
│   ├── useAccessibility.ts
│   └── useContent.ts
│
├── layouts/
│   ├── PublicLayout.vue
│   └── AdminLayout.vue
│
├── pages/
│   ├── HomePage.vue
│   ├── RevistaPage.vue
│   ├── ArticlePage.vue
│   ├── SobreProjetoPage.vue
│   ├── AcessibilidadePage.vue
│   ├── VideosPage.vue
│   ├── RecursosPage.vue
│   ├── ContatoPage.vue
│   └── admin/
│       ├── DashboardPage.vue
│       ├── ArticlesPage.vue
│       ├── ArticleCreatePage.vue
│       └── ArticleEditPage.vue
│
├── router/
│   └── index.ts
│
├── stores/
│   ├── accessibility.ts
│   └── articles.ts
│
├── types/
│   ├── article.ts
│   ├── category.ts
│   └── accessibility.ts
│
├── services/
│   ├── api.ts
│   └── articles.service.ts
│
├── mocks/
│   └── articles.ts
│
├── utils/
│   ├── date.ts
│   └── slug.ts
│
├── App.vue
└── main.ts
```

## Regra arquitetural

A página não deve conhecer detalhes de persistência.

Exemplo:

```text
ArticlePage
   ↓
useContent / store
   ↓
articles.service
   ↓
API futura
```

Durante o desenvolvimento inicial:

```text
ArticlePage
   ↓
store/service
   ↓
mock data
```

Depois:

```text
ArticlePage
   ↓
store/service
   ↓
HTTP API
```

A interface não deve precisar ser reescrita.

## Rotas públicas

```text
/
/revista
/revista/:slug
/sobre-o-projeto
/acessibilidade
/videos
/recursos
/contato
```

## Rotas administrativas

```text
/admin
/admin/materias
/admin/materias/nova
/admin/materias/:id/editar
```

A autenticação pode ser simulada inicialmente.

Não implementar backend apenas para criar a primeira versão visual.
