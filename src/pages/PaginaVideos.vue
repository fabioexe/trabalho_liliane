<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

interface VideoItem {
  id: string
  titulo: string
  descricao: string
  duracao: string
  categoria: string
  imagem: string
  urlVideo: string
  acessibilidade: string[]
}

const videos: VideoItem[] = [
  {
    id: 'vid-1',
    titulo: 'Apresentação do Projeto Diabetes Sem Barreiras',
    descricao: 'Conheça o objetivo da revista e como usar as ferramentas de acessibilidade disponíveis.',
    duracao: '4:30',
    categoria: 'Institucional',
    imagem: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    urlVideo: '#',
    acessibilidade: ['Libras', 'Legendas', 'Audiodescrição'],
  },
  {
    id: 'vid-2',
    titulo: 'Manejo Inicial do Diabetes Tipo 2',
    descricao: 'Explicação detalhada sobre hábitos alimentares, glicemia e consultas de acompanhamento.',
    duracao: '8:15',
    categoria: 'Tratamentos',
    imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    urlVideo: '#',
    acessibilidade: ['Libras', 'Legendas'],
  },
  {
    id: 'vid-3',
    titulo: 'Contagem de Carboidratos na Prática',
    descricao: 'Uma aula passo a passo de nutrição para facilitar as escolhas alimentares diárias.',
    duracao: '6:45',
    categoria: 'Nutrição',
    imagem: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    urlVideo: '#',
    acessibilidade: ['Legendas', 'Versão em Linguagem Simples'],
  },
  {
    id: 'vid-4',
    titulo: 'Exercício Físico e Prevenção de Hipoglicemia',
    descricao: 'Orientações práticas de segurança para quem pratica caminhada, corrida ou musculação.',
    duracao: '5:20',
    categoria: 'Exercícios',
    imagem: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    urlVideo: '#',
    acessibilidade: ['Libras', 'Legendas'],
  },
]

const categoriaSelecionada = ref<string>('')

const videosFiltrados = computed(() => {
  if (!categoriaSelecionada.value) return videos
  return videos.filter((v) => v.categoria === categoriaSelecionada.value)
})
</script>

<template>
  <div class="pagina-videos">
    <BaseContainer>
      <SectionHeading
        title="Vídeos e Videoaulas Acessíveis"
        subtitle="Conteúdos audiovisuais produzidos com intérprete de Libras, legendas e linguagem acessível."
        eyebrow="Acervo Multimídia"
      />

      <!-- Filtro de Categorias -->
      <div class="videos-filtros" role="group" aria-label="Filtrar vídeos por tema">
        <button
          type="button"
          class="filtro-btn"
          :class="{ 'is-active': categoriaSelecionada === '' }"
          @click="categoriaSelecionada = ''"
        >
          Todos os Vídeos
        </button>
        <button
          v-for="cat in ['Institucional', 'Tratamentos', 'Nutrição', 'Exercícios']"
          :key="cat"
          type="button"
          class="filtro-btn"
          :class="{ 'is-active': categoriaSelecionada === cat }"
          @click="categoriaSelecionada = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid de Vídeos -->
      <div class="videos-grid" role="list">
        <BaseCard
          v-for="video in videosFiltrados"
          :key="video.id"
          padding="none"
          :interactive="true"
          class="video-card"
          role="listitem"
        >
          <div class="video-thumb-wrapper">
            <img :src="video.imagem" :alt="`Thumbnail do vídeo: ${video.titulo}`" class="video-thumb" />
            <span class="video-duration" aria-label="Duração: {{ video.duracao }}">{{ video.duracao }}</span>
          </div>

          <div class="video-content">
            <div class="video-header">
              <BaseBadge variant="secondary" size="sm">{{ video.categoria }}</BaseBadge>
            </div>
            <h3 class="video-card-title">{{ video.titulo }}</h3>
            <p class="video-card-desc">{{ video.descricao }}</p>

            <div class="video-badges" aria-label="Recursos de acessibilidade deste vídeo">
              <span v-for="tag in video.acessibilidade" :key="tag" class="acess-tag">
                ✓ {{ tag }}
              </span>
            </div>
          </div>
        </BaseCard>
      </div>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-videos {
  padding: var(--space-12) 0 var(--space-16);
  background-color: var(--color-background);
}

.videos-filtros {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
}

.filtro-btn {
  padding: 0.45rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.filtro-btn:hover {
  background-color: var(--color-surface-hover);
  color: var(--color-primary);
}

.filtro-btn.is-active {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-primary);
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-8);
}

.video-thumb-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: #0f172a;
}

.video-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-duration {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background-color: rgba(15, 23, 42, 0.85);
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 700;
}

.video-content {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.video-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: var(--space-2) 0;
}

.video-card-desc {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: var(--font-line-height-normal);
  margin-bottom: var(--space-4);
  flex: 1;
}

.video-badges {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.acess-tag {
  font-size: 0.75rem;
  background-color: var(--color-success-light);
  color: var(--color-success);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}
</style>
