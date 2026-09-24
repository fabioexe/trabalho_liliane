<script setup lang="ts">
import SkipLink from '@/components/acessibilidade/SkipLink.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { useAcessibilidade } from '@/composables/useAcessibilidade'

const { alternarLibras } = useAcessibilidade()
</script>

<template>
  <div class="layout-publico">
    <!-- Link acessível para pular navegação -->
    <SkipLink target-id="main-content" />

    <!-- Botão Flutuante de Acessibilidade / Libras na lateral esquerda conforme ref_img_1.jpeg -->
    <aside class="floating-accessibility" aria-label="Acesso rápido a Libras e Acessibilidade">
      <button
        type="button"
        class="floating-hand-btn"
        aria-label="Abrir recursos de acessibilidade e Libras"
        title="Recursos de Acessibilidade e Libras"
        @click="alternarLibras"
      >
        <svg
          aria-hidden="true"
          class="hand-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path
            d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
          />
        </svg>
      </button>
    </aside>

    <!-- Cabeçalho do Site -->
    <SiteHeader />

    <!-- Conteúdo Principal Semântico -->
    <main id="main-content" class="layout-main" tabindex="-1">
      <slot />
    </main>

    <!-- Rodapé -->
    <SiteFooter />
  </div>
</template>

<style scoped>
.layout-publico {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-background);
}

.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.layout-main:focus {
  outline: none;
}

/* Botão Flutuante de Acessibilidade idêntico à ref_img_1.jpeg */
.floating-accessibility {
  position: fixed;
  left: 0;
  top: 35%;
  z-index: 99;
}

.floating-hand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: #124488;
  color: #ffffff;
  border-radius: 0 var(--radius-full) var(--radius-full) 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all var(--transition-fast);
  border: none;
}

.floating-hand-btn:hover {
  background-color: var(--color-purple);
  width: 50px;
}

.hand-icon {
  width: 24px;
  height: 24px;
}

html.high-contrast .floating-hand-btn {
  background-color: #000000;
  border: 2px solid #ffff00;
  color: #ffff00;
}
</style>
