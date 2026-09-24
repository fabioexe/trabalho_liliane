# 10 — Ordem de Implementação

## Fase 1 — Bootstrap

```gherkin
Given que o projeto ainda não existe
When inicializo Vue + TypeScript + Vite
Then o projeto deve executar localmente
And ESLint deve funcionar
And Vitest deve funcionar
```

Entregáveis:

- projeto criado;
- scripts funcionando;
- estrutura de pastas;
- router;
- Pinia;
- testes.

## Fase 2 — Design System

Criar:

- tokens;
- tipografia;
- botões;
- cards;
- containers;
- inputs;
- badges.

Não construir a Home ainda.

## Fase 3 — Layout

Criar:

- PublicLayout;
- SiteHeader;
- MainNavigation;
- SiteFooter;
- responsividade.

## Fase 4 — Acessibilidade

Criar:

- SkipLink;
- AccessibilityToolbar;
- fonte maior;
- alto contraste;
- foco;
- reduced motion.

## Fase 5 — Home

Implementar exatamente nesta ordem:

1. Hero;
2. destaques;
3. recursos de acessibilidade;
4. categorias;
5. chamada institucional;
6. vídeo;
7. QR Code;
8. footer.

Depois comparar visualmente com a referência.

## Fase 6 — Revista

Implementar:

- listagem;
- busca;
- filtro;
- categoria;
- página de matéria;
- matérias relacionadas.

## Fase 7 — Administração

Implementar:

- dashboard;
- lista;
- busca;
- filtros;
- formulário;
- edição;
- publicação;
- exclusão.

## Fase 8 — Conteúdo

Substituir textos provisórios por conteúdo validado.

Inserir referências reais.

## Fase 9 — Qualidade

Executar:

```bash
npm run lint
npm run test
npm run build
```

Corrigir todos os erros.

## Fase 10 — Refinamento visual

Somente depois do funcionamento:

- espaçamentos;
- tipografia;
- imagens;
- sombras;
- bordas;
- microinterações;
- responsividade;
- acessibilidade.

Não gastar tempo polindo uma tela cuja arquitetura ainda está mudando.
