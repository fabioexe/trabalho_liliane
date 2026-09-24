<script setup lang="ts">
interface Props {
  as?: string
  narrow?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  narrow: false,
})
</script>

<template>
  <component :is="as" :class="['base-container', { 'is-narrow': narrow }]">
    <slot />
  </component>
</template>

<style scoped>
.base-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

.is-narrow {
  max-width: 860px;
}
</style>
