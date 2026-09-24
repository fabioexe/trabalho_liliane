import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import AccessibilityToolbar from '../AccessibilityToolbar.vue'
import { useAcessibilidadeStore } from '@/stores/acessibilidade'

describe('AccessibilityToolbar', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renderiza os botões de acessibilidade com atributos acessíveis', () => {
    const wrapper = mount(AccessibilityToolbar, {
      global: {
        stubs: { RouterLink: true },
      },
    })
    expect(wrapper.find('button[aria-label="Aumentar tamanho do texto"]').exists()).toBe(true)
    expect(wrapper.find('button[aria-label="Diminuir tamanho do texto"]').exists()).toBe(true)
    expect(wrapper.find('button[aria-label="Alternar modo de alto contraste"]').exists()).toBe(true)
  })

  it('aumenta a escala de fonte ao clicar em A+', async () => {
    const store = useAcessibilidadeStore()
    const wrapper = mount(AccessibilityToolbar, {
      global: {
        stubs: { RouterLink: true },
      },
    })
    expect(store.escalaFonte).toBe(1)

    const btnAumentar = wrapper.find('button[aria-label="Aumentar tamanho do texto"]')
    await btnAumentar.trigger('click')

    expect(store.escalaFonte).toBe(1.1)
  })

  it('alterna o alto contraste ao clicar no botão de contraste', async () => {
    const store = useAcessibilidadeStore()
    const wrapper = mount(AccessibilityToolbar, {
      global: {
        stubs: { RouterLink: true },
      },
    })
    expect(store.altoContraste).toBe(false)

    const btnContraste = wrapper.find('button[aria-label="Alternar modo de alto contraste"]')
    await btnContraste.trigger('click')

    expect(store.altoContraste).toBe(true)
    expect(btnContraste.attributes('aria-pressed')).toBe('true')
  })
})
