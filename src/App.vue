<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAcessibilidade } from '@/composables/useAcessibilidade'
import LayoutPublico from '@/layouts/LayoutPublico.vue'
import LayoutAdmin from '@/layouts/LayoutAdmin.vue'

// Inicializa e sincroniza acessibilidade com o DOM
useAcessibilidade()

const route = useRoute()

const layoutComponent = computed(() => {
  return route.meta.layout === 'admin' ? LayoutAdmin : LayoutPublico
})
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<style>
/* Estilos globais gerenciados via src/assets/styles/main.css */
</style>
