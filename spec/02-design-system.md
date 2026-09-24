# 02 — Design System

## Objetivo visual

Criar uma identidade inspirada na referência fornecida, mas transformar a imagem em um sistema consistente de componentes.

## Direção visual

Características:

- institucional;
- acolhedor;
- acessível;
- educativo;
- contemporâneo;
- alto contraste;
- bastante espaço em branco;
- azul como cor institucional;
- roxo como cor secundária;
- cards com bordas suaves;
- sombras discretas;
- tipografia altamente legível.

## Tokens

Criar variáveis CSS.

```css
:root {
  --color-primary: ...;
  --color-primary-dark: ...;
  --color-secondary: ...;
  --color-accent: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-border: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --shadow-sm: ...;
  --shadow-md: ...;

  --container-max-width: ...;

  --space-1: ...;
  --space-2: ...;
  --space-3: ...;
  --space-4: ...;
  --space-5: ...;
  --space-6: ...;
}
```

Os valores exatos devem ser definidos durante a implementação a partir da referência visual e testados em diferentes resoluções.

## Componentes UI

Criar componentes reutilizáveis:

- BaseButton;
- BaseIcon;
- BaseBadge;
- BaseCard;
- BaseInput;
- BaseTextarea;
- BaseSelect;
- BaseModal;
- BasePagination;
- BaseEmptyState;
- BaseLoading;
- BaseToast.

## Componentes editoriais

- ArticleCard;
- ArticleGrid;
- ArticleHero;
- ArticleMeta;
- CategoryCard;
- CategoryBadge;
- FeaturedArticle;
- ArticleList;
- ReferenceList.

## Componentes de layout

- SiteHeader;
- MainNavigation;
- SiteFooter;
- SectionContainer;
- SectionHeading;
- Breadcrumbs.

## Componentes de acessibilidade

- AccessibilityToolbar;
- FontSizeControl;
- ContrastControl;
- SkipLink;
- SimpleLanguageToggle;
- AccessibilityShortcut.

## Regra

Se um componente aparecer em dois ou mais lugares, avaliar sua transformação em componente reutilizável.
