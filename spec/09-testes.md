# 09 — Testes

## Ferramentas

```text
Vitest
Vue Test Utils
```

## Testes unitários

Testar:

- geração de slug;
- filtros;
- validação de formulário;
- store de artigos;
- store de acessibilidade;
- composables.

## Testes de componentes

Componentes prioritários:

```text
SiteHeader
MainNavigation
AccessibilityToolbar
ArticleCard
ArticleGrid
ArticleForm
ArticleList
SiteFooter
```

## Exemplo de critérios

```gherkin
Feature: ArticleCard

Scenario: Exibir dados da matéria
  Given que recebo uma matéria válida
  When o componente é renderizado
  Then devo visualizar o título
  And devo visualizar a categoria
  And devo visualizar o tempo de leitura
```

## Acessibilidade em testes

Adicionar testes para:

- existência de nome acessível;
- labels;
- botões;
- links;
- imagens;
- foco.

## Critério de qualidade

Não buscar 100% de cobertura artificialmente.

Priorizar cobertura das regras de negócio e componentes que controlam comportamento importante.
