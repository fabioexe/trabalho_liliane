# 05 — Páginas Públicas

## Revista Digital

Rota:

```text
/revista
```

Funções:

- listar matérias;
- filtrar por categoria;
- pesquisar;
- ordenar;
- destacar matérias;
- paginação ou carregamento progressivo.

Gherkin:

```gherkin
Feature: Revista Digital

Scenario: Listar matérias
  Given que existem matérias publicadas
  When acesso "/revista"
  Then devo visualizar as matérias disponíveis
  And devo visualizar suas categorias
  And devo conseguir abrir uma matéria

Scenario: Filtrar por categoria
  Given que estou na Revista Digital
  When seleciono uma categoria
  Then devo visualizar somente matérias daquela categoria
```

## Página de matéria

Rota:

```text
/revista/:slug
```

Estrutura:

```text
Breadcrumb
ArticleHero
ArticleMeta
ArticleContent
ArticleReferences
RelatedArticles
```

## Sobre o Projeto

Rota:

```text
/sobre-o-projeto
```

Deve explicar:

- propósito;
- público;
- motivação;
- equipe;
- instituições envolvidas;
- metodologia;
- referências;
- compromisso com acessibilidade.

## Acessibilidade

Rota:

```text
/acessibilidade
```

Deve explicar os recursos disponíveis e como utilizá-los.

## Vídeos

Rota:

```text
/videos
```

Deve possuir:

- grid de vídeos;
- filtros;
- thumbnail;
- título;
- descrição;
- duração;
- categoria.

## Recursos

Rota:

```text
/recursos
```

Pode conter:

- materiais para download;
- links úteis;
- glossário;
- ferramentas;
- conteúdos acessíveis.

## Contato

Rota:

```text
/contato
```

Deve conter formulário preparado para integração posterior com backend.

Campos:

- nome;
- e-mail;
- assunto;
- mensagem.

Validar:

- campos obrigatórios;
- e-mail;
- tamanho mínimo/máximo;
- mensagens de erro acessíveis.
