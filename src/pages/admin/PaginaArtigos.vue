<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useArtigosStore } from '@/stores/artigos'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { formatarDataCurta } from '@/utils/data'

const store = useArtigosStore()
const { artigos, carregando } = storeToRefs(store)

onMounted(async () => {
  await store.carregarArtigos()
})

async function remover(id: string, titulo: string) {
  if (confirm(`Tem certeza que deseja excluir a matéria "${titulo}"?`)) {
    await store.excluirArtigo(id)
  }
}
</script>

<template>
  <div class="pagina-admin-artigos">
    <div class="header-with-action">
      <SectionHeading
        title="Gerenciamento de Matérias"
        subtitle="Crie, edite e configure as publicações da revista digital."
        eyebrow="Conteúdo Editorial"
      />
      <BaseButton to="/admin/materias/nova" variant="primary" size="md">
        + Nova Matéria
      </BaseButton>
    </div>

    <!-- Tabela Acessível de Matérias -->
    <div class="table-container">
      <table class="admin-table">
        <caption class="sr-only">Lista de matérias cadastradas</caption>
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Status</th>
            <th scope="col">Destaque</th>
            <th scope="col">Autor</th>
            <th scope="col">Atualizado em</th>
            <th scope="col" class="text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="carregando">
            <td colspan="6" class="loading-cell">Carregando dados...</td>
          </tr>
          <tr v-else-if="artigos.length === 0">
            <td colspan="6" class="empty-cell">Nenhuma matéria cadastrada.</td>
          </tr>
          <tr v-for="artigo in artigos" :key="artigo.id">
            <td class="title-cell">
              <strong>{{ artigo.titulo }}</strong>
              <span class="slug-info">/revista/{{ artigo.slug }}</span>
            </td>
            <td>
              <BaseBadge
                :variant="artigo.status === 'publicado' ? 'success' : 'warning'"
                size="sm"
              >
                {{ artigo.status }}
              </BaseBadge>
            </td>
            <td>
              <span v-if="artigo.destaque" class="badge-destaque">★ Sim</span>
              <span v-else class="text-muted">Não</span>
            </td>
            <td>{{ artigo.autor }}</td>
            <td>{{ formatarDataCurta(artigo.atualizadoEm) }}</td>
            <td class="text-right actions-cell">
              <RouterLink
                :to="`/admin/materias/${artigo.id}/editar`"
                class="action-link edit-link"
              >
                Editar
              </RouterLink>
              <button
                type="button"
                class="action-link delete-link"
                @click="remover(artigo.id, artigo.titulo)"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.pagina-admin-artigos {
  display: flex;
  flex-direction: column;
}

.header-with-action {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-6);
}

.table-container {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  box-shadow: var(--shadow-sm);
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.admin-table th {
  background-color: var(--color-surface-subtle);
  padding: var(--space-4);
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  border-bottom: 2px solid var(--color-border);
}

.admin-table td {
  padding: var(--space-4);
  font-size: 0.9375rem;
  border-bottom: 1px solid var(--color-border);
  vertical-align: middle;
}

.title-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.slug-info {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.badge-destaque {
  color: #b45309;
  font-weight: 700;
  font-size: 0.8125rem;
}

.actions-cell {
  white-space: nowrap;
}

.action-link {
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: var(--space-3);
  cursor: pointer;
}

.edit-link {
  color: var(--color-primary);
}

.delete-link {
  color: var(--color-danger);
}

.text-right {
  text-align: right;
}

.text-muted {
  color: var(--color-text-muted);
}

.loading-cell,
.empty-cell {
  text-align: center;
  padding: var(--space-8);
  color: var(--color-text-muted);
}
</style>
