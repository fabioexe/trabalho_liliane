# 13 — Evolução para Backend

A primeira versão deve funcionar sem backend.

Quando houver backend, manter o contrato do frontend.

## Endpoints sugeridos

```text
GET    /api/articles
GET    /api/articles/:slug
POST   /api/articles
PUT    /api/articles/:id
DELETE /api/articles/:id
PATCH  /api/articles/:id/status

GET    /api/categories
POST   /api/categories
PUT    /api/categories/:id
DELETE /api/categories/:id
```

## Query parameters

```text
GET /api/articles?category=alimentacao
GET /api/articles?status=published
GET /api/articles?search=diabetes
GET /api/articles?page=1&limit=12
```

## Resposta

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 0
  }
}
```

## Importante

O frontend não deve depender do formato final da API antes de a API existir.

Criar um service/repository para encapsular acesso aos dados.
