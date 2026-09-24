import { storeToRefs } from 'pinia'
import { useArtigosStore } from '@/stores/artigos'
import type { FiltrosArtigo } from '@/services/artigos.service'

export function useConteudo() {
  const store = useArtigosStore()
  const { artigos, categorias, artigoAtual, carregando, erro, artigosPublicados, artigosDestaque } =
    storeToRefs(store)

  async function buscarArtigos(filtros?: FiltrosArtigo) {
    await store.carregarArtigos(filtros)
  }

  async function buscarCategorias() {
    if (store.categorias.length === 0) {
      await store.carregarCategorias()
    }
  }

  async function buscarArtigoPorSlug(slug: string) {
    return await store.carregarArtigoPorSlug(slug)
  }

  function obterCategoriaPorId(id: string) {
    return store.obterCategoriaPorId(id)
  }

  return {
    artigos,
    categorias,
    artigoAtual,
    carregando,
    erro,
    artigosPublicados,
    artigosDestaque,
    buscarArtigos,
    buscarCategorias,
    buscarArtigoPorSlug,
    obterCategoriaPorId,
  }
}
