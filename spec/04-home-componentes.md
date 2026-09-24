# 04 — Decomposição da Home

## Ordem da página

```text
PublicLayout
│
├── SiteHeader
│   ├── Brand
│   ├── MainNavigation
│   ├── AccessibilityControls
│   └── QuickAccessButton
│
├── Main
│   ├── HeroSection
│   │   ├── HeroCopy
│   │   ├── HeroActions
│   │   ├── HeroImage
│   │   └── HeroHighlights
│   │
│   ├── AccessibilityFeaturesSection
│   │   └── AccessibilityFeatureCard[]
│   │
│   ├── ContentCategoriesSection
│   │   └── CategoryCard[]
│   │
│   ├── ProjectCalloutSection
│   │
│   ├── VideoCalloutSection
│   │
│   └── QrCodeSection
│
└── SiteFooter
```

## Hero

A referência possui o texto:

```text
DIABETES
SEM BARREIRAS

INFORMAÇÃO, CUIDADO E ACESSIBILIDADE
PARA TODOS!
```

Não hardcodar todo esse conteúdo diretamente no template. Centralizar textos e dados editoriais.

## Destaques

Criar uma lista configurável:

```ts
const highlights = [
  {
    icon: 'shield',
    title: 'Informação confiável',
    description: 'Conteúdo baseado em evidências científicas.'
  },
  {
    icon: 'accessibility',
    title: 'Acessível para todos',
    description: 'Recursos de acessibilidade para inclusão.'
  },
  {
    icon: 'heart',
    title: 'Cuidado integral',
    description: 'Saúde física, mental e emocional.'
  }
]
```

O conteúdo acima é exemplo de interface. Validar textos finais com o responsável pelo projeto.

## Categorias

Criar dados:

```ts
type Category = {
  id: string
  slug: string
  title: string
  description: string
  image: string
}
```

Categorias iniciais:

```text
diabetes
alimentacao
atividade-fisica
saude-mental
tratamentos-cuidados
inclusao-acessibilidade
```

## Regra de responsividade

Desktop:

```text
[card][card][card][card][card][card]
```

Tablet:

```text
[card][card][card]
[card][card][card]
```

Mobile:

```text
[card]
[card]
[card]
...
```

Pode ser utilizado carrossel no mobile, mas deve existir alternativa acessível para teclado e leitores de tela.
