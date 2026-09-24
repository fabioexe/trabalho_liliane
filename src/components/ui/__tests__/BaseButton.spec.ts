import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  it('renderiza o texto do slot corretamente', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Clique Aqui',
      },
    })
    expect(wrapper.text()).toContain('Clique Aqui')
    expect(wrapper.element.tagName.toLowerCase()).toBe('button')
  })

  it('aplica as classes de variante e tamanho', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
        size: 'lg',
      },
    })
    expect(wrapper.classes()).toContain('variant-secondary')
    expect(wrapper.classes()).toContain('size-lg')
  })

  it('desabilita o botão quando disabled é true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('renderiza como link quando fornecido href', () => {
    const wrapper = mount(BaseButton, {
      props: {
        href: 'https://exemplo.com',
      },
      slots: {
        default: 'Link Externo',
      },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    expect(wrapper.attributes('href')).toBe('https://exemplo.com')
  })
})
