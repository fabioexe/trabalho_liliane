<script setup lang="ts">
interface Props {
  targetId?: string
  text?: string
}

withDefaults(defineProps<Props>(), {
  targetId: 'main-content',
  text: 'Ir direto para o conteúdo principal',
})
</script>

<template>
  <a :href="`#${targetId}`" class="skip-link">
    {{ text }}
  </a>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -999px;
  left: 1rem;
  z-index: 9999;
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  text-decoration: none;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 1rem;
  outline: 3px solid #ffffff;
  outline-offset: 2px;
}

html.high-contrast .skip-link {
  background-color: #000000;
  color: #ffff00;
  outline: 3px solid #ffff00;
}
</style>
