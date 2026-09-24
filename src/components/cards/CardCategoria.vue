<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Categoria } from '@/types/categoria'

defineProps<{
  categoria: Categoria
}>()
</script>

<template>
  <div class="card-categoria">
    <div class="card-image-wrapper">
      <img
        :src="categoria.imagem"
        :alt="`Capa de ${categoria.titulo}`"
        class="card-image"
        loading="lazy"
      />
    </div>

    <div class="card-body">
      <h3 class="card-title">{{ categoria.titulo }}</h3>
      <p class="card-description">{{ categoria.descricao }}</p>

      <div class="card-action">
        <RouterLink
          :to="{ path: '/revista', query: { categoria: categoria.id } }"
          class="btn-ler-agora"
          :aria-label="`Ler agora matérias de ${categoria.titulo}`"
        >
          Ler agora
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-categoria {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(14, 50, 107, 0.05);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  height: 100%;
}

.card-categoria:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(14, 50, 107, 0.1);
}

.card-image-wrapper {
  width: 100%;
  height: 145px;
  overflow: hidden;
  background-color: var(--color-surface-hover);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.card-categoria:hover .card-image {
  transform: scale(1.05);
}

.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.9rem;
  text-align: left;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.35rem;
  line-height: 1.25;
}

.card-description {
  font-size: 0.775rem;
  color: var(--color-text-secondary);
  line-height: 1.35;
  margin-bottom: 0.85rem;
  flex: 1;
}

.card-action {
  margin-top: auto;
}

.btn-ler-agora {
  display: inline-block;
  background-color: var(--color-purple);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 4px rgba(104, 44, 145, 0.2);
}

.btn-ler-agora:hover {
  background-color: var(--color-purple-hover);
  text-decoration: none;
  transform: translateY(-1px);
}

html.high-contrast .card-categoria {
  background-color: #000000;
  border: 2px solid #ffffff;
}

html.high-contrast .card-title {
  color: #ffff00;
}

html.high-contrast .card-description {
  color: #ffffff;
}

html.high-contrast .btn-ler-agora {
  background-color: #000000;
  color: #ffff00;
  border: 1px solid #ffff00;
}
</style>
