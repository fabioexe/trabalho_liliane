import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import MainNavigation from '../MainNavigation.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div>Início</div>' } },
    { path: '/revista', component: { template: '<div>Revista</div>' } },
    { path: '/sobre-o-projeto', component: { template: '<div>Sobre</div>' } },
    { path: '/acessibilidade', component: { template: '<div>Acessibilidade</div>' } },
    { path: '/videos', component: { template: '<div>Vídeos</div>' } },
    { path: '/recursos', component: { template: '<div>Recursos</div>' } },
    { path: '/contato', component: { template: '<div>Contato</div>' } },
  ],
})

describe('MainNavigation', () => {
  it('renderiza os links principais da revista conforme a referência', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(MainNavigation, {
      global: {
        plugins: [router],
      },
    })

    const links = wrapper.findAll('.nav-link')
    expect(links.length).toBe(7)
    expect(wrapper.text()).toContain('INÍCIO')
    expect(wrapper.text()).toContain('REVISTA DIGITAL')
    expect(wrapper.text()).toContain('SOBRE O PROJETO')
    expect(wrapper.text()).toContain('ACESSIBILIDADE')
    expect(wrapper.text()).toContain('VÍDEOS')
    expect(wrapper.text()).toContain('RECURSOS')
    expect(wrapper.text()).toContain('CONTATO')
  })

  it('emite o evento navigate ao clicar em um link', async () => {
    const wrapper = mount(MainNavigation, {
      global: {
        plugins: [router],
      },
    })

    const primeiroLink = wrapper.find('.nav-link')
    await primeiroLink.trigger('click')

    expect(wrapper.emitted('navigate')).toBeTruthy()
  })
})
