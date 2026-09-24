# 03 — Home em Gherkin

## Feature: Página inicial da revista

```gherkin
Feature: Página inicial da Diabetes Sem Barreiras
  Como visitante
  Quero acessar uma revista digital sobre diabetes
  Para encontrar informações educativas de forma simples e acessível

  Background:
    Given que estou na página inicial
    And a aplicação está carregada
```

## Cenário 01 — Cabeçalho

```gherkin
Scenario: Visualizar o cabeçalho
  Then devo visualizar o logotipo "Diabetes Sem Barreiras"
  And devo visualizar a navegação principal
  And devo visualizar os controles de acessibilidade
  And devo visualizar o botão "Acesso Rápido"
```

## Cenário 02 — Navegação

```gherkin
Scenario: Navegar pelo menu principal
  When clico em "Revista Digital"
  Then devo ser direcionado para "/revista"

  When clico em "Sobre o Projeto"
  Then devo ser direcionado para "/sobre-o-projeto"

  When clico em "Acessibilidade"
  Then devo ser direcionado para "/acessibilidade"

  When clico em "Vídeos"
  Then devo ser direcionado para "/videos"

  When clico em "Recursos"
  Then devo ser direcionado para "/recursos"

  When clico em "Contato"
  Then devo ser direcionado para "/contato"
```

## Cenário 03 — Hero

```gherkin
Scenario: Visualizar o hero
  Then devo visualizar o título principal
  And devo visualizar um subtítulo explicativo
  And devo visualizar o botão "Ler a Revista Digital"
  And devo visualizar o botão "Saiba Mais"
  And devo visualizar a imagem principal
  And devo visualizar os destaques de informação confiável
  And devo visualizar os destaques de acessibilidade
  And devo visualizar o destaque de cuidado integral
```

## Cenário 04 — Recursos de acessibilidade

```gherkin
Scenario: Visualizar recursos de acessibilidade
  Then devo visualizar:
    | recurso |
    | Áudio para leitura |
    | Libras |
    | Alto contraste |
    | Letra maior |
    | Linguagem simples |
    | Navegação fácil |
    | QR Code |
```

## Cenário 05 — Categorias

```gherkin
Scenario: Explorar conteúdos
  Then devo visualizar a seção "Explore os conteúdos da revista"
  And devo visualizar um card para cada categoria
  And cada card deve possuir imagem
  And cada card deve possuir título
  And cada card deve possuir descrição
  And cada card deve possuir ação para acessar os conteúdos
```

## Cenário 06 — Chamada institucional

```gherkin
Scenario: Visualizar chamada do projeto
  Then devo visualizar uma seção destacando a inclusão
  And devo visualizar uma chamada para conhecer o projeto
```

## Cenário 07 — Vídeo

```gherkin
Scenario: Visualizar apresentação
  Then devo visualizar uma chamada para o vídeo de apresentação
  And devo visualizar uma miniatura
  And devo visualizar um botão para assistir
```

## Cenário 08 — QR Code

```gherkin
Scenario: Acessar a revista pelo celular
  Then devo visualizar uma seção de QR Code
  And devo visualizar uma explicação
  And devo visualizar o QR Code
```

## Cenário 09 — Rodapé

```gherkin
Scenario: Visualizar rodapé
  Then devo visualizar o logotipo
  And devo visualizar links de navegação
  And devo visualizar links de redes sociais
  And devo visualizar referências institucionais
  And devo visualizar informações de realização
  And devo visualizar direitos autorais
```

## Cenário 10 — Responsividade

```gherkin
Scenario: Acessar a Home em celular
  Given que a viewport possui largura menor que 768px
  Then o menu deve se adaptar para navegação mobile
  And os cards devem formar uma coluna ou carrossel acessível
  And o hero deve reorganizar seu conteúdo
  And nenhum conteúdo importante deve desaparecer
  And não deve existir rolagem horizontal involuntária
```
