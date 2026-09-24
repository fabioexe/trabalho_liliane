<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  variant?: 'primary' | 'secondary' | 'purple' | 'accent' | 'ghost' | 'outline' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  to?: string | object
  href?: string
  ariaLabel?: string
  pill?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  pill: true,
})

const componenteTag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="componenteTag"
    :to="to"
    :href="href"
    :type="componenteTag === 'button' ? type : undefined"
    :disabled="componenteTag === 'button' ? disabled : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :aria-label="ariaLabel"
    :class="[
      'base-button',
      `variant-${variant}`,
      `size-${size}`,
      { 'is-pill': pill, 'is-disabled': disabled },
    ]"
  >
    <slot name="prefix" />
    <span class="button-content">
      <slot />
    </span>
    <slot name="suffix" />
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: inherit;
  font-weight: 700;
  border-radius: var(--radius-md);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 2px solid transparent;
  user-select: none;
  white-space: nowrap;
}

.is-pill {
  border-radius: var(--radius-pill);
}

.base-button:hover:not(.is-disabled) {
  text-decoration: none;
  transform: translateY(-1px);
}

.base-button:active:not(.is-disabled) {
  transform: translateY(0);
}

/* Tamanhos */
.size-sm {
  padding: 0.35rem 0.9rem;
  font-size: 0.8125rem;
}

.size-md {
  padding: 0.55rem 1.25rem;
  font-size: 0.9375rem;
}

.size-lg {
  padding: 0.75rem 1.6rem;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
}

/* Variantes */
/* Na referência, a ação primária destacada é o ROXO institucional */
.variant-primary,
.variant-purple {
  background-color: var(--color-purple);
  color: var(--color-text-inverse);
  box-shadow: 0 2px 6px rgba(104, 44, 145, 0.25);
}

.variant-primary:hover:not(.is-disabled),
.variant-purple:hover:not(.is-disabled) {
  background-color: var(--color-purple-hover);
  box-shadow: 0 4px 10px rgba(104, 44, 145, 0.35);
}

.variant-secondary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-sm);
}

.variant-secondary:hover:not(.is-disabled) {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-md);
}

.variant-accent {
  background-color: var(--color-accent);
  color: var(--color-text-inverse);
}

.variant-outline {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.variant-outline:hover:not(.is-disabled) {
  background-color: var(--color-primary-light);
}

.variant-outline-white {
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
}

.variant-outline-white:hover:not(.is-disabled) {
  background-color: rgba(255, 255, 255, 0.15);
}

.variant-ghost {
  background-color: transparent;
  color: var(--color-text);
}

.variant-ghost:hover:not(.is-disabled) {
  background-color: var(--color-surface-hover);
}

/* Estado desabilitado */
.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
  pointer-events: none;
  box-shadow: none;
}

/* Alto contraste */
html.high-contrast .variant-primary,
html.high-contrast .variant-purple,
html.high-contrast .variant-secondary {
  background-color: #000000;
  color: #ffff00;
  border-color: #ffff00;
}

html.high-contrast .variant-outline,
html.high-contrast .variant-outline-white,
html.high-contrast .variant-ghost {
  border-color: #ffffff;
  color: #ffffff;
}
</style>
