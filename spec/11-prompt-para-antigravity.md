# 11 — Prompt Mestre para Antigravity / IA da IDE

Você é o desenvolvedor responsável por implementar o projeto **Diabetes Sem Barreiras**.

Leia todos os arquivos dentro de `docs/` antes de começar.

A imagem `docs/reference/home-reference.jpeg` é a referência visual da Home.

## Stack obrigatória

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Vitest
- Vue Test Utils

## Regras

1. Não implemente tudo em um único componente.
2. Não coloque dados editoriais diretamente em templates quando eles puderem ser modelados como objetos.
3. Não crie backend neste primeiro momento.
4. Use mocks e services para simular persistência.
5. Mantenha a arquitetura preparada para uma API futura.
6. Use componentes reutilizáveis.
7. Use HTML semântico.
8. Considere acessibilidade desde o primeiro componente.
9. Não invente informações médicas.
10. Conteúdo clínico deve ficar como placeholder claramente identificado até receber conteúdo validado.
11. Não utilize imagens protegidas sem autorização. Use placeholders ou assets fornecidos pelo projeto.
12. Não introduza bibliotecas desnecessárias.
13. Antes de criar uma abstração nova, verifique se já existe um componente equivalente.
14. Não altere a arquitetura definida nos documentos sem explicar o motivo.
15. Depois de cada etapa, execute testes e build.

## Ordem obrigatória

### Etapa 1

Inicialize o projeto.

### Etapa 2

Crie a estrutura de pastas.

### Etapa 3

Configure:

- TypeScript;
- ESLint;
- Vitest;
- Router;
- Pinia.

### Etapa 4

Crie o Design System.

### Etapa 5

Crie o layout público.

### Etapa 6

Crie o sistema de acessibilidade.

### Etapa 7

Implemente a Home.

### Etapa 8

Implemente Revista Digital.

### Etapa 9

Implemente página de matéria.

### Etapa 10

Implemente área administrativa.

### Etapa 11

Adicione testes.

### Etapa 12

Execute build e corrija problemas.

## Comportamento esperado da IA

Não gere centenas de arquivos de uma vez.

Trabalhe em pequenas etapas.

Antes de cada etapa:

1. diga quais arquivos serão criados/modificados;
2. explique rapidamente a responsabilidade deles;
3. implemente;
4. execute testes;
5. execute build quando aplicável;
6. informe eventuais decisões técnicas.

## Regra especial para a Home

A Home deve ser construída por seções independentes.

Não criar:

```text
HomePage.vue com 1000 linhas
```

Preferir:

```text
HomePage.vue
HeroSection.vue
AccessibilityFeaturesSection.vue
ContentCategoriesSection.vue
ProjectCalloutSection.vue
VideoCalloutSection.vue
QrCodeSection.vue
```

## Regra especial para conteúdo

Use inicialmente:

```text
src/mocks/articles.ts
```

A UI deve consumir:

```text
articles.service.ts
```

e não importar diretamente o mock dentro dos componentes.

## Resultado esperado

Ao finalizar a primeira versão:

- `npm run dev` deve funcionar;
- `npm run test` deve funcionar;
- `npm run build` deve funcionar;
- Home deve ser responsiva;
- navegação deve funcionar;
- acessibilidade básica deve funcionar;
- Revista Digital deve funcionar com dados mockados;
- página de matéria deve funcionar;
- CRUD administrativo deve funcionar com persistência simulada;
- arquitetura deve estar pronta para API futura.
