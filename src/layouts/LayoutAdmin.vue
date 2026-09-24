<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div class="layout-admin">
    <!-- Header Admin -->
    <header class="admin-header">
      <div class="admin-header-container">
        <div class="admin-brand">
          <RouterLink to="/admin" class="admin-title">
            DSB <span class="admin-badge">Admin</span>
          </RouterLink>
        </div>
        <nav class="admin-nav">
          <RouterLink to="/admin" class="nav-item" active-class="is-active" exact>
            Painel Geral
          </RouterLink>
          <RouterLink to="/admin/materias" class="nav-item" active-class="is-active">
            Matérias
          </RouterLink>
          <RouterLink to="/admin/materias/nova" class="nav-item" active-class="is-active">
            Nova Matéria
          </RouterLink>
        </nav>
        <div class="admin-actions">
          <BaseButton to="/" variant="ghost" size="sm">
            Ver Site Público
          </BaseButton>
        </div>
      </div>
    </header>

    <!-- Conteúdo Admin -->
    <main class="admin-main">
      <div class="admin-container">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout-admin {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
}

.admin-header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 0;
}

.admin-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.admin-title {
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.admin-badge {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

.admin-nav {
  display: flex;
  gap: var(--space-2);
}

.admin-nav .nav-item {
  padding: 0.45rem 0.85rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.admin-nav .nav-item:hover {
  background-color: var(--color-surface-hover);
  color: var(--color-primary);
}

.admin-nav .nav-item.is-active {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
}

.admin-main {
  flex: 1;
  padding: var(--space-8) 0;
}

.admin-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
</style>
