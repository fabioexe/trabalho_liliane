<script setup lang="ts">
interface Props {
  as?: string
  interactive?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  interactive: false,
  padding: 'md',
})
</script>

<template>
  <component
    :is="as"
    :class="[
      'base-card',
      `padding-${padding}`,
      { 'is-interactive': interactive },
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.base-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  overflow: hidden;
}

.padding-none {
  padding: 0;
}

.padding-sm {
  padding: var(--space-3);
}

.padding-md {
  padding: var(--space-5);
}

.padding-lg {
  padding: var(--space-8);
}

.is-interactive:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-light);
}

html.high-contrast .base-card {
  border: 2px solid #ffffff;
}

html.high-contrast .is-interactive:hover {
  border-color: #ffff00;
}
</style>
