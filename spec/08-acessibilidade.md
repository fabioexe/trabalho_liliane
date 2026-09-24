# 08 — Acessibilidade

## Objetivo

Acessibilidade é requisito funcional do projeto.

## Teclado

Garantir:

- todos os controles acessíveis por Tab;
- foco sempre visível;
- ordem de foco lógica;
- Enter/Space para controles apropriados;
- Escape para fechar modal/menu;
- skip link para conteúdo principal.

## Leitor de tela

Utilizar:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Evitar `div` como substituto de elementos semânticos.

Imagens informativas devem ter `alt`.

Imagens decorativas devem ter `alt=""`.

## Contraste

O sistema deve ser testado para contraste suficiente entre:

- texto/fundo;
- botões;
- links;
- estados de foco;
- estados desabilitados.

## Controle de fonte

Implementar estado global:

```ts
fontScale: 1 | 1.1 | 1.25 | 1.5
```

Aplicar por CSS custom property.

## Alto contraste

Criar modo visual alternativo usando classe no elemento raiz:

```text
html.high-contrast
```

## Redução de movimento

Respeitar:

```css
@media (prefers-reduced-motion: reduce) {
  ...
}
```

Também considerar um controle manual.

## Linguagem simples

O recurso "Linguagem simples" deve ser modelado como conteúdo alternativo, e não como uma tentativa automática de simplificação por JavaScript.

Exemplo:

```ts
interface Article {
  content: string
  accessibleVersion?: string
}
```

## Libras

A integração com vídeos ou intérpretes deve ser definida com o responsável pelo projeto.

Não criar um falso tradutor automático.

## QR Code

O QR Code precisa possuir:

- texto alternativo;
- link equivalente;
- instrução clara;
- destino funcional.

## Checklist

```gherkin
Scenario: Navegar sem mouse
  Given que estou na Home
  When utilizo somente o teclado
  Then devo conseguir alcançar todos os controles importantes
```
