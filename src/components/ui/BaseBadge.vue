<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})
</script>

<template>
  <span :class="['base-badge', `badge-${variant}`, `badge-${size}`]">
    <slot />
  </span>
</template>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  border-radius: var(--radius-full);
  line-height: 1;
  letter-spacing: 0.02em;
}

.badge-sm {
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
}

.badge-md {
  padding: 0.35rem 0.85rem;
  font-size: 0.85rem;
}

.badge-primary {
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
}

.badge-secondary {
  background-color: var(--color-secondary-light);
  color: var(--color-secondary);
}

.badge-accent {
  background-color: var(--color-accent-light);
  color: var(--color-accent);
}

.badge-neutral {
  background-color: var(--color-surface-hover);
  color: var(--color-text-secondary);
}

.badge-success {
  background-color: var(--color-success-light);
  color: var(--color-success);
}

.badge-warning {
  background-color: var(--color-warning-light);
  color: var(--color-warning);
}

html.high-contrast .base-badge {
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: #000000;
}
</style>
