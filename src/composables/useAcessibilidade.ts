import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAcessibilidadeStore } from '@/stores/acessibilidade'

export function useAcessibilidade() {
  const store = useAcessibilidadeStore()
  const {
    escalaFonte,
    altoContraste,
    reducaoMovimento,
    leituraAudioAtiva,
    librasAtivo,
  } = storeToRefs(store)

  onMounted(() => {
    store.aplicarNoDom()
  })

  return {
    escalaFonte,
    altoContraste,
    reducaoMovimento,
    leituraAudioAtiva,
    librasAtivo,
    aumentarFonte: store.aumentarFonte,
    diminuirFonte: store.diminuirFonte,
    redefinirFonte: store.redefinirFonte,
    alternarAltoContraste: store.alternarAltoContraste,
    alternarReducaoMovimento: store.alternarReducaoMovimento,
    alternarLibras: store.alternarLibras,
    alternarLeituraAudio: store.alternarLeituraAudio,
    aplicarNoDom: store.aplicarNoDom,
  }
}
