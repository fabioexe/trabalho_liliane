<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  tag?: 'h1' | 'h2' | 'h3'
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: 'h2',
  centered: false,
})
</script>

<template>
  <div :class="['section-heading', { 'is-centered': centered }]">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <component :is="tag" class="title">{{ title }}</component>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  margin-bottom: var(--space-8);
}

.is-centered {
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.title {
  margin-bottom: var(--space-2);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: var(--font-line-height-relaxed);
}

html.high-contrast .eyebrow {
  color: #ffff00;
}
</style>
