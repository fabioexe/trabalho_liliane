<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useArtigosStore } from '@/stores/artigos'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const store = useArtigosStore()
const { artigos, categorias } = storeToRefs(store)

onMounted(async () => {
  await store.carregarCategorias()
  await store.carregarArtigos()
})
</script>

<template>
  <div class="pagina-admin-painel">
    <SectionHeading
      title="Painel Administrativo da Revista"
      subtitle="Gerencie publicações, visualize métricas editoriais e configure acessibilidade das matérias."
      eyebrow="Administração"
    />

    <!-- Grade de Métricas -->
    <div class="stats-grid">
      <BaseCard padding="md" class="stat-card">
        <span class="stat-label">Total de Matérias</span>
        <span class="stat-value">{{ artigos.length }}</span>
      </BaseCard>

      <BaseCard padding="md" class="stat-card">
        <span class="stat-label">Matérias Publicadas</span>
        <span class="stat-value">
          {{ artigos.filter((a) => a.status === 'publicado').length }}
        </span>
      </BaseCard>

      <BaseCard padding="md" class="stat-card">
        <span class="stat-label">Em Rascunho</span>
        <span class="stat-value">
          {{ artigos.filter((a) => a.status === 'rascunho').length }}
        </span>
      </BaseCard>

      <BaseCard padding="md" class="stat-card">
        <span class="stat-label">Categorias Ativas</span>
        <span class="stat-value">{{ categorias.length }}</span>
      </BaseCard>
    </div>

    <!-- Ações Rápidas -->
    <div class="admin-quick-actions">
      <h3>Ações Rápidas</h3>
      <div class="actions-buttons">
        <BaseButton to="/admin/materias/nova" variant="primary" size="md">
          + Criar Nova Matéria
        </BaseButton>
        <BaseButton to="/admin/materias" variant="secondary" size="md">
          Gerenciar Todas as Matérias
        </BaseButton>
        <BaseButton to="/revista" variant="outline" size="md">
          Visualizar Revista Pública
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina-admin-painel {
  display: flex;
  flex-direction: column;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-primary);
}

.admin-quick-actions {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
}

.admin-quick-actions h3 {
  font-size: 1.25rem;
  margin-bottom: var(--space-4);
}

.actions-buttons {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}
</style>
