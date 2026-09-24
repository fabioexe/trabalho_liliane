import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import PaginaInicial from '../PaginaInicial.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: PaginaInicial },
    { path: '/revista', component: { template: '<div>Revista</div>' } },
    { path: '/sobre-o-projeto', component: { template: '<div>Sobre</div>' } },
    { path: '/acessibilidade', component: { template: '<div>Acessibilidade</div>' } },
    { path: '/videos', component: { template: '<div>Videos</div>' } },
  ],
})

describe('PaginaInicial', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renderiza o título principal do Hero', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(PaginaInicial, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('DIABETES')
    expect(wrapper.text()).toContain('SEM BARREIRAS')
  })

  it('renderiza as seções obrigatórias da Home', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(PaginaInicial, {
      global: {
        plugins: [router],
      },
    })

    // Hero, Recursos de Acessibilidade, Categorias, Chamada Projeto, Vídeo, QR Code
    expect(wrapper.find('.secao-hero').exists()).toBe(true)
    expect(wrapper.find('.secao-acessibilidade').exists()).toBe(true)
    expect(wrapper.find('.secao-categorias').exists()).toBe(true)
    expect(wrapper.find('.secao-projeto').exists()).toBe(true)
    expect(wrapper.find('.secao-video').exists()).toBe(true)
    expect(wrapper.find('.secao-qrcode').exists()).toBe(true)
  })

  it('exibe os 7 pilares de acessibilidade na seção de recursos', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(PaginaInicial, {
      global: {
        plugins: [router],
      },
    })

    const texto = wrapper.text()
    expect(texto).toContain('Áudio para leitura')
    expect(texto).toContain('Libras')
    expect(texto).toContain('Alto contraste')
    expect(texto).toContain('Letra maior')
    expect(texto).toContain('Linguagem simples')
    expect(texto).toContain('Navegação fácil')
    expect(texto).toContain('QR Code')
  })
})
