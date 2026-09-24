<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MainNavigation from './MainNavigation.vue'
import AccessibilityToolbar from '@/components/acessibilidade/AccessibilityToolbar.vue'

const menuAberto = ref(false)

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
      <!-- Logotipo Institucional com Coração e Mãos -->
      <RouterLink to="/" class="brand-link" aria-label="Diabetes Sem Barreiras - Revista Digital">
        <div class="brand-icon" aria-hidden="true">
          <!-- Coração estilizado com mãos / acolhimento idêntico à referência -->
          <svg viewBox="0 0 48 48" class="icon-svg" fill="none">
            <path
              d="M24 41.5s-16-10.2-16-23C8 11.8 13.5 7 19.5 7c4.2 0 7.5 2.5 8.5 4.5 1-2 4.3-4.5 8.5-4.5 6 0 11.5 4.8 11.5 11.5 0 12.8-16 23-16 23z"
              fill="#0e326b"
            />
            <!-- Mãos brancas de cuidado dentro do coração -->
            <path
              d="M17 25c1.5-3 5.5-4.5 8-4.5s3.5 1 3.5 2.5c0 1.5-1.5 2.5-3.5 2.5-3 0-5 1.5-6 3l-2-3.5z"
              fill="#ffffff"
            />
            <path
              d="M31 25c-1.5-3-5.5-4.5-8-4.5s-3.5 1-3.5 2.5c0 1.5 1.5 2.5 3.5 2.5 3 0 5 1.5 6 3l2-3.5z"
              fill="#ffffff"
            />
            <circle cx="24" cy="18" r="2.5" fill="#ffffff" />
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-title">DIABETES</span>
          <span class="brand-subtitle">SEM BARREIRAS</span>
          <span class="brand-tag">REVISTA DIGITAL</span>
        </div>
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

.brand-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 100%;
  height: 100%;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brand-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--color-primary);
  letter-spacing: 0.02em;
}

.brand-subtitle {
  font-size: 0.825rem;
  font-weight: 800;
  color: var(--color-purple);
  letter-spacing: 0.05em;
}

.brand-tag {
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.12em;
  margin-top: 1px;
}

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
  .desktop-accessibility {
    display: none;
  }
}

html.high-contrast .brand-title {
  color: #ffff00;
}

html.high-contrast .brand-subtitle {
  color: #ffffff;
}

html.high-contrast .brand-tag {
  color: #ffffff;
}
</style>
