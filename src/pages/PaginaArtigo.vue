<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useConteudo } from '@/composables/useConteudo'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { formatarData } from '@/utils/data'

const route = useRoute()
const { artigoAtual, carregando, erro, buscarArtigoPorSlug, obterCategoriaPorId, buscarCategorias } =
  useConteudo()

const modoLinguagemSimples = ref(false)

async function carregar() {
  await buscarCategorias()
  const slug = String(route.params.slug)
  await buscarArtigoPorSlug(slug)
}

onMounted(carregar)

watch(
  () => route.params.slug,
  () => {
    modoLinguagemSimples.value = false
    carregar()
  },
)

const categoria = computed(() => {
  if (!artigoAtual.value) return null
  return obterCategoriaPorId(artigoAtual.value.categoriaId)
})
</script>

<template>
  <div class="pagina-artigo">
    <BaseContainer :narrow="true">
      <!-- Breadcrumb -->
      <nav class="breadcrumb-nav" aria-label="Trilha de navegação">
        <ol class="breadcrumb-list">
          <li><RouterLink to="/">Início</RouterLink></li>
          <li aria-hidden="true">/</li>
          <li><RouterLink to="/revista">Revista Digital</RouterLink></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" class="current-item">
            {{ artigoAtual?.titulo || 'Carregando...' }}
          </li>
        </ol>
      </nav>

      <!-- Estado Carregando -->
      <div v-if="carregando" class="loading-state" role="status">
        <p>Carregando matéria completa...</p>
      </div>

      <!-- Erro ou Não Encontrado -->
      <div v-else-if="erro || !artigoAtual" class="error-state" role="alert">
        <h2>Matéria não encontrada</h2>
        <p>Não foi possível carregar a matéria solicitada.</p>
        <BaseButton to="/revista" variant="primary" size="md">
          Voltar para a Revista
        </BaseButton>
      </div>

      <!-- Conteúdo da Matéria -->
      <article v-else class="artigo-container">
        <!-- Cabeçalho do Artigo -->
        <header class="artigo-header">
          <div v-if="categoria" class="artigo-category">
            <BaseBadge variant="primary" size="md">
              {{ categoria.titulo }}
            </BaseBadge>
          </div>

          <h1 class="artigo-title">{{ artigoAtual.titulo }}</h1>

          <p v-if="artigoAtual.subtitulo" class="artigo-subtitle">
            {{ artigoAtual.subtitulo }}
          </p>

          <div class="artigo-meta-bar">
            <div class="author-info">
              <span class="meta-label">Por:</span>
              <strong class="author-name">{{ artigoAtual.autor }}</strong>
            </div>
            <div class="meta-details">
              <span>Publicado em {{ formatarData(artigoAtual.publicadoEm) }}</span>
              <span>•</span>
              <span>{{ artigoAtual.tempoLeituraMinutos }} min de leitura</span>
            </div>
          </div>
        </header>

        <!-- Imagem de Capa -->
        <div class="artigo-cover-container">
          <img
            :src="artigoAtual.imagemCapa"
            :alt="`Imagem de destaque da matéria: ${artigoAtual.titulo}`"
            class="artigo-cover-img"
          />
        </div>

        <!-- Barra de Modos de Acessibilidade da Matéria -->
        <div
          v-if="artigoAtual.versaoLinguagemSimples"
          class="accessible-version-bar"
          role="region"
          aria-label="Opções de acessibilidade da matéria"
        >
          <div class="bar-info">
            <strong>Recurso de Linguagem Simples disponível</strong>
            <p class="bar-sub">
              Texto adaptado com palavras diretas e parágrafos curtos para leitura rápida e acessível.
            </p>
          </div>
          <BaseButton
            variant="secondary"
            size="sm"
            :aria-pressed="modoLinguagemSimples ? 'true' : 'false'"
            @click="modoLinguagemSimples = !modoLinguagemSimples"
          >
            {{ modoLinguagemSimples ? 'Ver Versão Padrão' : 'Ativar Linguagem Simples' }}
          </BaseButton>
        </div>

        <!-- Versão em Linguagem Simples -->
        <div
          v-if="modoLinguagemSimples && artigoAtual.versaoLinguagemSimples"
          class="simple-language-box"
          aria-live="polite"
        >
          <div class="simple-banner">
            <span class="badge-simple">Versão em Linguagem Simples</span>
          </div>
          <div class="simple-content">
            <p
              v-for="(paragrafo, index) in artigoAtual.versaoLinguagemSimples.split('\n')"
              :key="index"
            >
              {{ paragrafo }}
            </p>
          </div>
        </div>

        <!-- Conteúdo Completo Padrão -->
        <div v-else class="artigo-content-body">
          <div
            v-for="(secao, index) in artigoAtual.conteudo.split('\n\n')"
            :key="index"
            class="content-block"
          >
            <!-- Renderização simples de subtítulos e parágrafos estruturados -->
            <h2 v-if="secao.startsWith('## ')">
              {{ secao.replace('## ', '') }}
            </h2>
            <h3 v-else-if="secao.startsWith('### ')">
              {{ secao.replace('### ', '') }}
            </h3>
            <p v-else class="content-p">
              {{ secao }}
            </p>
          </div>
        </div>

        <!-- Tags da Matéria -->
        <div v-if="artigoAtual.tags.length > 0" class="artigo-tags-section">
          <span class="tags-title">Tags relacionadas:</span>
          <div class="tags-list">
            <span v-for="tag in artigoAtual.tags" :key="tag" class="tag-badge">
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Seção de Referências Científicas -->
        <section
          v-if="artigoAtual.referencias && artigoAtual.referencias.length > 0"
          class="artigo-referencias"
          aria-labelledby="referencias-heading"
        >
          <h2 id="referencias-heading" class="referencias-title">
            Referências e Evidências Científicas
          </h2>
          <ol class="referencias-list">
            <li
              v-for="refItem in artigoAtual.referencias"
              :key="refItem.id"
              class="referencia-item"
            >
              <strong class="ref-title">{{ refItem.titulo }}</strong> —
              <span class="ref-source">{{ refItem.fonte }}</span>
              <span v-if="refItem.dataAcesso" class="ref-date">
                (Acesso em {{ formatarData(refItem.dataAcesso) }})
              </span>
              <div v-if="refItem.url" class="ref-link-wrapper">
                <a
                  :href="refItem.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ref-url"
                  :aria-label="`Abrir referência em nova aba: ${refItem.titulo}`"
                >
                  Consultar fonte original
                </a>
              </div>
            </li>
          </ol>
        </section>

        <!-- Navegação de Retorno -->
        <div class="artigo-footer-nav">
          <BaseButton to="/revista" variant="outline" size="md">
            &larr; Voltar para todas as matérias
          </BaseButton>
        </div>
      </article>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-artigo {
  padding: var(--space-8) 0 var(--space-16);
  background-color: var(--color-surface);
}

.breadcrumb-nav {
  margin-bottom: var(--space-6);
  font-size: 0.875rem;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  color: var(--color-text-muted);
}

.breadcrumb-list a {
  color: var(--color-text-secondary);
  text-decoration: none;
}

.breadcrumb-list a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.current-item {
  color: var(--color-text);
  font-weight: 600;
}

.artigo-header {
  margin-bottom: var(--space-6);
}

.artigo-category {
  margin-bottom: var(--space-3);
}

.artigo-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.artigo-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-6);
}

.artigo-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  flex-wrap: wrap;
  gap: var(--space-3);
}

.artigo-cover-container {
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: var(--space-8);
  box-shadow: var(--shadow-md);
}

.artigo-cover-img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
}

/* Barra de Versão Acessível */
.accessible-version-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  background-color: var(--color-secondary-light);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-secondary);
  margin-bottom: var(--space-8);
  gap: var(--space-4);
  flex-wrap: wrap;
}

.bar-info strong {
  display: block;
  color: var(--color-secondary);
  font-size: 0.9375rem;
  margin-bottom: 2px;
}

.bar-sub {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Caixa de Linguagem Simples */
.simple-language-box {
  background-color: var(--color-surface-subtle);
  border-left: 5px solid var(--color-secondary);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  margin-bottom: var(--space-10);
}

.badge-simple {
  display: inline-block;
  background-color: var(--color-secondary);
  color: #ffffff;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.simple-content p {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: var(--space-3);
  color: var(--color-text);
}

/* Corpo do Artigo */
.artigo-content-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-10);
}

.content-block h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: var(--space-8) 0 var(--space-4);
}

.content-block h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-text);
  margin: var(--space-6) 0 var(--space-3);
}

.content-p {
  margin-bottom: var(--space-4);
}

.artigo-tags-section {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.tags-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-muted);
}

.tag-badge {
  font-size: 0.8125rem;
  background-color: var(--color-surface-hover);
  color: var(--color-primary);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

/* Referências */
.artigo-referencias {
  background-color: var(--color-surface-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-10);
}

.referencias-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.referencias-list {
  padding-left: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.referencia-item {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.ref-url {
  font-size: 0.8125rem;
  color: var(--color-primary);
  display: inline-block;
  margin-top: 2px;
}

.artigo-footer-nav {
  display: flex;
  justify-content: flex-start;
  padding-top: var(--space-6);
}
</style>
