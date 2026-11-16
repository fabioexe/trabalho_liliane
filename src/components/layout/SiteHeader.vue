<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MainNavigation from './MainNavigation.vue'
import AccessibilityToolbar from '@/components/acessibilidade/AccessibilityToolbar.vue'

const menuAberto = ref(false)
const publicBase = import.meta.env.BASE_URL

function alternarMenu() {
  menuAberto.value = !menuAberto.value
}

function fecharMenu() {
  menuAberto.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="brand-link" aria-label="Diabetes Sem Barreiras - Portal educativo">
        <img class="brand-logo" :src="`${publicBase}images/logo-diabetes-sem-barreiras.svg`" alt="Diabetes Sem Barreiras" />
      </RouterLink>

      <!-- Navegação Central Desktop -->
      <div class="desktop-navigation">
        <MainNavigation />
      </div>

      <!-- Controles de Acessibilidade à Direita -->
      <div class="header-actions">
        <AccessibilityToolbar class="desktop-accessibility" />

        <!-- Botão Hambúrguer Mobile -->
        <button
          type="button"
          class="menu-toggle-btn"
          :aria-expanded="menuAberto ? 'true' : 'false'"
          aria-controls="mobile-menu-drawer"
          aria-label="Abrir ou fechar menu de navegação"
          @click="alternarMenu"
        >
          <span class="hamburger-line" :class="{ 'is-active': menuAberto }" />
          <span class="hamburger-line" :class="{ 'is-active': menuAberto }" />
          <span class="hamburger-line" :class="{ 'is-active': menuAberto }" />
        </button>
      </div>
    </div>

    <!-- Menu Gaveta Mobile -->
    <div
      v-if="menuAberto"
      id="mobile-menu-drawer"
      class="mobile-menu"
      role="dialog"
      aria-label="Menu móvel"
    >
      <div class="mobile-menu-content">
        <MainNavigation :is-mobile="true" @navigate="fecharMenu" />
        <div class="mobile-accessibility-box">
          <AccessibilityToolbar />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 1px 4px rgba(14, 50, 107, 0.04);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0.65rem var(--container-padding);
  gap: var(--space-4);
}

/* Marca / Logotipo idêntico à referência */
.brand-link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-link:hover {
  text-decoration: none;
}

.brand-logo { display: block; width: 250px; height: 54px; object-fit: contain; object-position: left center; }

/* Navegação Desktop */
.desktop-navigation {
  display: flex;
  align-items: center;
}

/* Ações */
.header-actions {
  display: flex;
  align-items: center;
}

.menu-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 38px;
  height: 38px;
  padding: 8px;
  background-color: var(--color-surface-hover);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

/* Mobile */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-surface);
  border-bottom: 2px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  padding: var(--space-4) var(--container-padding);
}

.mobile-accessibility-box {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

@media (max-width: 1100px) {
  .desktop-navigation {
    display: none;
  }
  .menu-toggle-btn {
    display: flex;
  }
}

@media (max-width: 640px) {
  .brand-logo { width: min(64vw, 220px); height: 48px; }
  .desktop-accessibility {
    display: none;
  }
}

</style>
