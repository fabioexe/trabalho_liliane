<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface NavItem {
  label: string
  to: string
  exact?: boolean
}

const navItems: NavItem[] = [
  { label: 'INÍCIO', to: '/', exact: true },
  { label: 'REVISTA DIGITAL', to: '/revista' },
  { label: 'SOBRE O PROJETO', to: '/sobre-o-projeto' },
  { label: 'ACESSIBILIDADE', to: '/acessibilidade' },
  { label: 'VÍDEOS', to: '/videos' },
  { label: 'RECURSOS', to: '/recursos' },
  { label: 'CONTATO', to: '/contato' },
]

defineProps<{
  isMobile?: boolean
}>()

const emit = defineEmits<{
  (e: 'navigate'): void
}>()
</script>

<template>
  <nav class="main-navigation" :class="{ 'is-mobile': isMobile }" aria-label="Navegação principal">
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.to" class="nav-item">
        <RouterLink
          :to="item.to"
          class="nav-link"
          :exact="item.exact"
          active-class="is-active"
          exact-active-class="is-exact-active"
          @click="emit('navigate')"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-navigation {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav-link {
  position: relative;
  display: inline-block;
  padding: 0.5rem 0.2rem;
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-purple);
  text-decoration: none;
}

/* Indicador de barra ativa embaixo do link conforme a referência */
.nav-link.is-exact-active::after,
.nav-link.is-active:not([href="/"])::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.5px;
  background-color: var(--color-primary);
  border-radius: 2px;
}

/* Modo Mobile */
.is-mobile {
  width: 100%;
}

.is-mobile .nav-list {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.is-mobile .nav-link {
  font-size: 1rem;
  padding: 0.5rem 0;
  width: 100%;
}

html.high-contrast .nav-link {
  color: #ffffff;
}

html.high-contrast .nav-link.is-exact-active::after,
html.high-contrast .nav-link.is-active:not([href="/"])::after {
  background-color: #ffff00;
}
</style>
