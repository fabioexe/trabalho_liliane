<script setup lang="ts">
import { useAcessibilidade } from '@/composables/useAcessibilidade'

const {
  escalaFonte,
  altoContraste,
  aumentarFonte,
  diminuirFonte,
  alternarAltoContraste,
} = useAcessibilidade()
</script>

<template>
  <div class="accessibility-controls-group" role="region" aria-label="Ferramentas de acessibilidade">
    <!-- Pílula Escura com A+, A- e Contraste -->
    <div class="dark-toolbar-pill" role="group" aria-label="Controle de tamanho e contraste">
      <button
        type="button"
        class="dark-pill-btn"
        aria-label="Aumentar tamanho do texto"
        :disabled="escalaFonte >= 1.5"
        @click="aumentarFonte"
      >
        <span class="btn-text">A+</span>
      </button>

      <button
        type="button"
        class="dark-pill-btn"
        aria-label="Diminuir tamanho do texto"
        :disabled="escalaFonte <= 1"
        @click="diminuirFonte"
      >
        <span class="btn-text">A-</span>
      </button>

      <button
        type="button"
        class="dark-pill-btn contrast-toggle"
        :class="{ 'is-active': altoContraste }"
        :aria-pressed="altoContraste ? 'true' : 'false'"
        aria-label="Alternar modo de alto contraste"
        @click="alternarAltoContraste"
      >
        <svg
          aria-hidden="true"
          class="contrast-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 4v16a8 8 0 0 0 0-16z" />
        </svg>
      </button>
    </div>

    <!-- Botão Roxo Acesso Rápido -->
    <RouterLink
      to="/acessibilidade"
      class="acesso-rapido-btn"
      aria-label="Acesso Rápido aos recursos de acessibilidade"
    >
      <svg
        aria-hidden="true"
        class="access-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="4" r="2" />
        <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.4-.44-1.01-.69-1.64-.69-.63 0-1.24.25-1.64.69l-1.29 1.43C7.09 10.25 5.54 11.02 4 11v2c1.88-.02 3.65-.92 4.88-2.22L10 12v7h2v-5h2v5h2v-7l1.12-1.22c1.23 1.3 3 2.2 4.88 2.22z" />
      </svg>
      <span>Acesso Rápido</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.accessibility-controls-group {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* Pílula Escura */
.dark-toolbar-pill {
  display: inline-flex;
  align-items: center;
  background-color: #0e1e38;
  border-radius: var(--radius-pill);
  padding: 0.15rem 0.35rem;
  gap: 2px;
}

.dark-pill-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  font-size: 0.8125rem;
  font-weight: 700;
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}

.dark-pill-btn:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.2);
}

.dark-pill-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.contrast-icon {
  width: 15px;
  height: 15px;
}

.dark-pill-btn.is-active {
  background-color: #ffff00;
  color: #000000;
}

/* Botão Acesso Rápido */
.acesso-rapido-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--color-purple);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.45rem 1.1rem;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 6px rgba(104, 44, 145, 0.25);
  white-space: nowrap;
}

.acesso-rapido-btn:hover {
  background-color: var(--color-purple-hover);
  text-decoration: none;
  transform: translateY(-1px);
}

.access-icon {
  width: 17px;
  height: 17px;
}

html.high-contrast .dark-toolbar-pill {
  border: 1px solid #ffff00;
  background-color: #000000;
}

html.high-contrast .acesso-rapido-btn {
  background-color: #000000;
  border: 1px solid #ffff00;
  color: #ffff00;
}
</style>
