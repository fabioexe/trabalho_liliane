# 06 — Modelo de Conteúdo

## Article

```ts
export interface Article {
  id: string
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  content: string
  coverImage: string
  categoryId: string
  author: string
  publishedAt?: string
  updatedAt?: string
  readingTimeMinutes: number
  tags: string[]
  references: Reference[]
  status: 'draft' | 'published'
  featured: boolean
  accessibleVersion?: string
}
```

## Reference

```ts
export interface Reference {
  id: string
  title: string
  source: string
  url?: string
  accessedAt?: string
}
```

## Regra importante

A matéria deve separar:

```text
metadados
conteúdo
referências
status
```

Isso permitirá futuramente usar CMS ou API sem mudar o componente de apresentação.

## Editor futuro

O administrador poderá escrever:

- título;
- subtítulo;
- resumo;
- conteúdo;
- categoria;
- tags;
- imagem;
- referências;
- versão em linguagem simples;
- versão acessível;
- status.

O editor pode começar com textarea/Markdown e posteriormente ser substituído por um rich text editor.

## Slug

Exemplo:

```text
entendendo-o-diabetes
alimentacao-saudavel-e-diabetes
atividade-fisica-e-controle-glicemico
```

Gerar slug automaticamente a partir do título, permitindo edição manual.
