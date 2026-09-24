<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SecaoHero from '@/components/conteudo/SecaoHero.vue'
import SecaoRecursosAcessibilidade from '@/components/conteudo/SecaoRecursosAcessibilidade.vue'
import SecaoCategorias from '@/components/conteudo/SecaoCategorias.vue'
import SecaoChamadaProjeto from '@/components/conteudo/SecaoChamadaProjeto.vue'
import SecaoChamadaVideo from '@/components/conteudo/SecaoChamadaVideo.vue'
import SecaoQrCode from '@/components/conteudo/SecaoQrCode.vue'
</script>

<template>
  <div class="pagina-inicial">
    <!-- Hero com Título, Tagline, Foto e 3 Cards de Destaque -->
    <SecaoHero />

    <!-- Barra de 7 Recursos de Acessibilidade -->
    <SecaoRecursosAcessibilidade />

    <!-- Explore os conteúdos da revista (6 Categorias + Seta) -->
    <SecaoCategorias />

    <!-- Fileira Tripla com os 3 Banners de Chamada conforme ref_img_1.jpeg -->
    <section class="secao-chamadas-tripla" aria-label="Ações e Destaques Complementares">
      <BaseContainer>
        <div class="tripla-grid">
          <!-- Bloco 1: Azul - Incluir é Cuidar -->
          <SecaoChamadaProjeto />

          <!-- Bloco 2: Roxo - Vídeo de Apresentação -->
          <SecaoChamadaVideo />

          <!-- Bloco 3: Branco - Acesse pelo QR Code -->
          <SecaoQrCode />
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<style scoped>
.pagina-inicial {
  display: flex;
  flex-direction: column;
}

.secao-chamadas-tripla {
  padding: 0 0 var(--space-12);
  background-color: var(--color-background);
}

.tripla-grid {
  display: grid;
  grid-template-columns: 1.1fr 1.1fr 0.9fr;
  gap: var(--space-4);
  align-items: stretch;
}

@media (max-width: 1024px) {
  .tripla-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
