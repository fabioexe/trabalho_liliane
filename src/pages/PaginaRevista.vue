<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useConteudo } from '@/composables/useConteudo'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { formatarData } from '@/utils/data'

const route = useRoute()
const { artigos, categorias, carregando, buscarArtigos, buscarCategorias } = useConteudo()

const busca = ref('')
const categoriaSelecionada = ref<string>('')

onMounted(async () => {
  await buscarCategorias()
  if (route.query.categoria) {
    categoriaSelecionada.value = String(route.query.categoria)
  }
  await buscarArtigos({ apenasPublicados: true })
})

watch(
  () => route.query.categoria,
  (novoVal) => {
    categoriaSelecionada.value = novoVal ? String(novoVal) : ''
  },
)

const artigosFiltrados = computed(() => {
  return artigos.value.filter((artigo) => {
    const atendeCategoria = categoriaSelecionada.value
      ? artigo.categoriaId === categoriaSelecionada.value
      : true

    const termo = busca.value.toLowerCase().trim()
    const atendeBusca = termo
      ? artigo.titulo.toLowerCase().includes(termo) ||
        artigo.resumo.toLowerCase().includes(termo) ||
        artigo.tags.some((tag) => tag.toLowerCase().includes(termo))
      : true

    return atendeCategoria && atendeBusca
  })
})

function obterNomeCategoria(categoriaId: string): string {
  const cat = categorias.value.find((c) => c.id === categoriaId)
  return cat ? cat.titulo : 'Geral'
}
</script>

<template>
  <div class="pagina-revista">
    <BaseContainer>
      <div class="revista-header">
        <SectionHeading
          title="Revista Digital Diabetes Sem Barreiras"
          subtitle="Explore matérias educativas, reportagens com especialistas e conteúdos para o seu bem-estar."
          eyebrow="Edição Digital"
        />

        <!-- Filtros e Busca -->
        <div class="revista-filtros" role="search" aria-label="Filtrar e pesquisar matérias">
          <div class="search-box">
            <label for="search-input" class="sr-only">Pesquisar matérias</label>
            <input
              id="search-input"
              v-model="busca"
              type="search"
              placeholder="Pesquisar por assunto, título ou palavra-chave..."
              class="search-input"
            />
          </div>

          <!-- Filtro de Categorias -->
          <div class="categoria-chips" role="group" aria-label="Filtrar por categoria">
            <button
              type="button"
              class="chip-button"
              :class="{ 'is-active': categoriaSelecionada === '' }"
              @click="categoriaSelecionada = ''"
            >
              Todas as Matérias
            </button>
            <button
              v-for="cat in categorias"
              :key="cat.id"
              type="button"
              class="chip-button"
              :class="{ 'is-active': categoriaSelecionada === cat.id }"
              @click="categoriaSelecionada = cat.id"
            >
              {{ cat.titulo }}
            </button>
          </div>
        </div>
      </div>

      <!-- Estado Carregando -->
      <div v-if="carregando" class="loading-state" role="status">
        <p>Carregando matérias da revista...</p>
      </div>

      <!-- Lista de Matérias -->
      <div v-else-if="artigosFiltrados.length > 0" class="artigos-grid" role="list">
        <BaseCard
          v-for="artigo in artigosFiltrados"
          :key="artigo.id"
          padding="none"
          :interactive="true"
          class="artigo-card"
          role="listitem"
        >
          <div class="artigo-cover-wrapper">
            <img
              :src="artigo.imagemCapa"
              :alt="`Capa da matéria: ${artigo.titulo}`"
              class="artigo-cover"
              loading="lazy"
            />
            <div class="badge-overlay">
              <BaseBadge variant="primary" size="sm">
                {{ obterNomeCategoria(artigo.categoriaId) }}
              </BaseBadge>
            </div>
          </div>

          <div class="artigo-info">
            <div class="artigo-meta">
              <span>{{ formatarData(artigo.publicadoEm) }}</span>
              <span>•</span>
              <span>{{ artigo.tempoLeituraMinutos }} min de leitura</span>
            </div>

            <h3 class="artigo-title">
              <RouterLink :to="`/revista/${artigo.slug}`" class="artigo-title-link">
                {{ artigo.titulo }}
              </RouterLink>
            </h3>

            <p class="artigo-resumo">{{ artigo.resumo }}</p>

            <div class="artigo-tags">
              <span v-for="tag in artigo.tags" :key="tag" class="tag-item">
                #{{ tag }}
              </span>
            </div>

            <div class="artigo-action">
              <RouterLink :to="`/revista/${artigo.slug}`" class="ler-materia-link">
                <span>Continuar lendo</span>
                <svg
                  aria-hidden="true"
                  class="link-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </BaseCard>
      </div>

      <!-- Estado Vazio -->
      <div v-else class="empty-state" role="status">
        <h3>Nenhuma matéria encontrada</h3>
        <p>Tente ajustar a sua busca ou selecione outra categoria.</p>
        <button
          type="button"
          class="chip-button is-active reset-btn"
          @click="busca = ''; categoriaSelecionada = ''"
        >
          Limpar filtros
        </button>
      </div>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-revista {
  padding: var(--space-12) 0 var(--space-16);
  background-color: var(--color-background);
}

.revista-header {
  margin-bottom: var(--space-10);
}

.revista-filtros {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background-color: var(--color-surface);
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  background-color: var(--color-surface-subtle);
  transition: border-color var(--transition-fast);
}

.search-input:focus {
  border-color: var(--color-primary);
  background-color: var(--color-surface);
  outline: none;
}

.categoria-chips {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.chip-button {
  padding: 0.4rem 0.95rem;
  font-size: 0.8125rem;
  font-weight: 700;
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.chip-button:hover {
  background-color: var(--color-purple-light);
  color: var(--color-purple);
  border-color: var(--color-purple);
}

.chip-button.is-active {
  background-color: var(--color-purple);
  color: var(--color-text-inverse);
  border-color: var(--color-purple);
}

.artigos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

.artigo-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(14, 50, 107, 0.05);
}

.artigo-cover-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.artigo-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.artigo-card:hover .artigo-cover {
  transform: scale(1.05);
}

.badge-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.artigo-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--space-6);
}

.artigo-meta {
  display: flex;
  gap: var(--space-2);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.artigo-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: var(--space-3);
}

.artigo-title-link {
  color: var(--color-text);
  text-decoration: none;
}

.artigo-title-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.artigo-resumo {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: var(--font-line-height-normal);
  margin-bottom: var(--space-4);
  flex: 1;
}

.artigo-tags {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-bottom: var(--space-4);
}

.tag-item {
  font-size: 0.75rem;
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

.artigo-action {
  margin-top: auto;
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.ler-materia-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 700;
  color: var(--color-primary);
}

.link-arrow {
  width: 16px;
  height: 16px;
}

.empty-state,
.loading-state {
  text-align: center;
  padding: var(--space-16) 0;
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.reset-btn {
  margin-top: var(--space-4);
}
</style>
