<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useConteudo } from '@/composables/useConteudo'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import CardCategoria from '@/components/cards/CardCategoria.vue'

const { categorias, buscarCategorias } = useConteudo()

onMounted(async () => {
  await buscarCategorias()
})
</script>

<template>
  <section class="secao-categorias secao-explore" aria-labelledby="explore-title">
    <BaseContainer>
      <!-- Título idêntico ao ref_img_1.jpeg -->
      <div class="explore-header">
        <h2 id="explore-title" class="explore-title">
          Explore os conteúdos da revista
        </h2>
      </div>

      <!-- Carrossel / Grid de 6 Categorias -->
      <div class="categorias-container">
        <div class="categorias-grid" role="list">
          <div
            v-for="categoria in categorias"
            :key="categoria.id"
            class="categoria-col"
            role="listitem"
          >
            <CardCategoria :categoria="categoria" />
          </div>
        </div>

        <!-- Botão de Seta para Próximos Conteúdos conforme ref_img_1.jpeg -->
        <RouterLink
          to="/revista"
          class="carousel-next-btn"
          aria-label="Ver todas as matérias da revista"
          title="Ver mais matérias"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="arrow-svg">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.secao-explore {
  padding: var(--space-4) 0 var(--space-12);
  background-color: var(--color-background);
}

.explore-header {
  text-align: center;
  margin-bottom: var(--space-6);
}

.explore-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

.categorias-container {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  position: relative;
}

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.85rem;
  flex: 1;
}

.categoria-col {
  display: flex;
}

/* Botão circular de seta à direita */
.carousel-next-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(14, 50, 107, 0.1);
  flex-shrink: 0;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.carousel-next-btn:hover {
  background-color: var(--color-purple);
  color: #ffffff;
  border-color: var(--color-purple);
  transform: translateX(2px);
}

.arrow-svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 1180px) {
  .categorias-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
}

@media (max-width: 680px) {
  .categorias-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }

  .carousel-next-btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .categorias-grid {
    grid-template-columns: 1fr;
  }
}

html.high-contrast .explore-title {
  color: #ffff00;
}

html.high-contrast .carousel-next-btn {
  background-color: #000000;
  border: 2px solid #ffff00;
  color: #ffff00;
}
</style>
