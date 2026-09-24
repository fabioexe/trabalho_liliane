# 07 — Área Administrativa em Gherkin

## Feature: Gerenciamento de matérias

```gherkin
Feature: Gerenciar matérias
  Como administrador
  Quero criar e editar matérias
  Para manter a revista atualizada
```

## Listagem

```gherkin
Scenario: Visualizar matérias
  Given que estou autenticado
  When acesso "/admin/materias"
  Then devo visualizar uma tabela ou lista de matérias
  And devo visualizar título
  And devo visualizar categoria
  And devo visualizar status
  And devo visualizar data
  And devo visualizar ações
```

## Busca

```gherkin
Scenario: Pesquisar matéria
  When digito um termo na busca
  Then a lista deve ser filtrada
```

## Filtro

```gherkin
Scenario: Filtrar por status
  When seleciono "Rascunho"
  Then devo visualizar apenas matérias em rascunho
```

## Criar

```gherkin
Scenario: Criar matéria
  Given que estou em "/admin/materias/nova"
  When preencho os campos obrigatórios
  And clico em "Salvar rascunho"
  Then a matéria deve ser criada como rascunho
```

## Publicar

```gherkin
Scenario: Publicar matéria
  Given que existe uma matéria em rascunho
  When clico em "Publicar"
  Then o status deve mudar para "published"
  And a matéria deve aparecer na Revista Digital
```

## Editar

```gherkin
Scenario: Editar matéria
  Given que existe uma matéria
  When acesso a edição
  Then devo visualizar os dados atuais
  When altero o conteúdo
  And salvo
  Then as alterações devem ser persistidas
```

## Validação

```gherkin
Scenario: Impedir publicação incompleta
  Given que uma matéria não possui título
  When tento publicar
  Then a publicação deve ser bloqueada
  And devo visualizar uma mensagem de erro
```

## Exclusão

```gherkin
Scenario: Excluir matéria
  Given que existe uma matéria
  When solicito exclusão
  Then devo visualizar uma confirmação
  When confirmo
  Then a matéria deve ser removida
```

## Observação

Na primeira versão, persistência pode ser feita com mock/localStorage.

A arquitetura deve permitir trocar por API posteriormente.
