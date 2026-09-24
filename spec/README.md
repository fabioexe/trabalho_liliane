# Diabetes Sem Barreiras — Especificação do Projeto

## Objetivo

Construir uma revista digital educativa sobre diabetes, com foco em:

- informação clara e baseada em fontes confiáveis;
- acessibilidade;
- navegação simples;
- conteúdo editorial organizado por categorias;
- vídeos e recursos multimídia;
- responsividade;
- estrutura preparada para crescimento;
- área administrativa para gerenciamento de matérias.

A imagem em `docs/reference/home-reference.jpeg` é a referência visual inicial da página principal.

## Stack proposta

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Vitest
- Vue Test Utils
- HTML semântico
- CSS moderno / CSS Modules ou arquitetura de estilos por componentes
- ESLint + Prettier

A primeira versão pode funcionar 100% com dados mockados. O projeto deve ser estruturado para substituir os mocks por uma API posteriormente sem refatoração estrutural da interface.

## Princípio de implementação

Não tentar criar tudo em um único componente.

A Home deve ser composta por seções independentes, cada uma com responsabilidade clara. Conteúdo editorial deve ser tratado como dados, e não como HTML hardcoded.

## Critério de conclusão da primeira etapa

A Home deve reproduzir a hierarquia visual da referência:

1. cabeçalho;
2. navegação;
3. controles de acessibilidade;
4. hero;
5. atalhos de recursos;
6. exploração de conteúdos;
7. chamadas institucionais;
8. vídeo;
9. QR Code;
10. rodapé.

Depois disso, devem existir as páginas de conteúdo e a área administrativa.
