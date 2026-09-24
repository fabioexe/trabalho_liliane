# 00 — Contexto e Requisitos

## Contexto

O projeto é uma revista digital educativa chamada **Diabetes Sem Barreiras**.

A referência visual apresenta uma homepage institucional/editorial com:

- identidade visual azul, roxa e branca;
- navegação horizontal;
- hero com pessoas de diferentes idades;
- destaque para acessibilidade;
- cards de categorias;
- chamadas para projeto, vídeo e acesso por QR Code;
- rodapé institucional.

## Requisitos funcionais

### RF01 — Home

O usuário deve conseguir visualizar a página principal sem autenticação.

### RF02 — Navegação

A navegação deve permitir acessar:

- Início;
- Revista Digital;
- Sobre o Projeto;
- Acessibilidade;
- Vídeos;
- Recursos;
- Contato.

### RF03 — Conteúdo editorial

A aplicação deve permitir listar matérias por categoria.

Categorias iniciais:

- Entendendo o Diabetes;
- Alimentação Saudável;
- Atividade Física;
- Saúde Mental;
- Tratamentos e Cuidados;
- Inclusão e Acessibilidade.

### RF04 — Matéria

Cada matéria deve possuir:

- título;
- subtítulo;
- imagem de capa;
- categoria;
- autor;
- data;
- tempo estimado de leitura;
- resumo;
- conteúdo;
- referências;
- tags;
- status de publicação.

### RF05 — Área administrativa

Deve existir uma área preparada para:

- listar matérias;
- pesquisar;
- filtrar;
- criar;
- editar;
- visualizar;
- publicar/despublicar;
- excluir.

### RF06 — Acessibilidade

A interface deve prever:

- aumento/redução de fonte;
- alto contraste;
- foco visível;
- navegação por teclado;
- linguagem simples;
- textos alternativos;
- semântica HTML;
- suporte a leitores de tela;
- controle de animações;
- atalhos de navegação.

### RF07 — Responsividade

A interface deve funcionar em:

- desktop;
- notebook;
- tablet;
- celular.

### RF08 — Conteúdo médico

O site é educativo e não deve apresentar conteúdo médico inventado.

Informações clínicas devem ser alimentadas por fontes verificáveis, com referências registradas no conteúdo.

O sistema não deve transformar textos editoriais em diagnóstico ou prescrição individual.

## Requisitos não funcionais

- componentes reutilizáveis;
- baixo acoplamento;
- TypeScript estrito;
- testes unitários para regras e componentes importantes;
- acessibilidade como requisito de desenvolvimento, não como etapa final;
- SEO básico;
- carregamento eficiente de imagens;
- arquitetura preparada para API;
- código legível para manutenção por outro desenvolvedor.
