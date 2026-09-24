import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { EscalaFonte, EstadoAcessibilidade } from '@/types/acessibilidade'

const STORAGE_KEY = 'dsb_acessibilidade'

export const useAcessibilidadeStore = defineStore('acessibilidade', () => {
  // Carrega configurações prévias do localStorage se existirem
  const configSalva: Partial<EstadoAcessibilidade> = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })()

  const escalaFonte = ref<EscalaFonte>(configSalva.escalaFonte || 1)
  const altoContraste = ref<boolean>(configSalva.altoContraste || false)
  const reducaoMovimento = ref<boolean>(
    configSalva.reducaoMovimento ??
      (typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false),
  )
  const leituraAudioAtiva = ref<boolean>(false)
  const librasAtivo = ref<boolean>(false)

  function salvarEstado() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          escalaFonte: escalaFonte.value,
          altoContraste: altoContraste.value,
          reducaoMovimento: reducaoMovimento.value,
        }),
      )
    } catch {
      // Ignora erro de storage
    }
  }

  function aplicarNoDom() {
    if (typeof document === 'undefined') return
    const root = document.documentElement

    // Aplica escala de fonte via CSS Custom Property
    root.style.setProperty('--font-scale', String(escalaFonte.value))

    // Aplica classe de alto contraste
    if (altoContraste.value) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Aplica classe de redução de movimento
    if (reducaoMovimento.value) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
  }

  function aumentarFonte() {
    const niveis: EscalaFonte[] = [1, 1.1, 1.25, 1.5]
    const indiceAtual = niveis.indexOf(escalaFonte.value)
    if (indiceAtual < niveis.length - 1) {
      escalaFonte.value = niveis[indiceAtual + 1]
      salvarEstado()
      aplicarNoDom()
    }
  }

  function diminuirFonte() {
    const niveis: EscalaFonte[] = [1, 1.1, 1.25, 1.5]
    const indiceAtual = niveis.indexOf(escalaFonte.value)
    if (indiceAtual > 0) {
      escalaFonte.value = niveis[indiceAtual - 1]
      salvarEstado()
      aplicarNoDom()
    }
  }

  function redefinirFonte() {
    escalaFonte.value = 1
    salvarEstado()
    aplicarNoDom()
  }

  function alternarAltoContraste() {
    altoContraste.value = !altoContraste.value
    salvarEstado()
    aplicarNoDom()
  }

  function alternarReducaoMovimento() {
    reducaoMovimento.value = !reducaoMovimento.value
    salvarEstado()
    aplicarNoDom()
  }

  function alternarLibras() {
    librasAtivo.value = !librasAtivo.value
  }

  function alternarLeituraAudio() {
    leituraAudioAtiva.value = !leituraAudioAtiva.value
  }

  return {
    escalaFonte,
    altoContraste,
    reducaoMovimento,
    leituraAudioAtiva,
    librasAtivo,
    aumentarFonte,
    diminuirFonte,
    redefinirFonte,
    alternarAltoContraste,
    alternarReducaoMovimento,
    alternarLibras,
    alternarLeituraAudio,
    aplicarNoDom,
  }
})
