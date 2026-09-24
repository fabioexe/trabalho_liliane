import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Artigo } from '@/types/artigo'
import type { Categoria } from '@/types/categoria'
import { artigosService, type FiltrosArtigo } from '@/services/artigos.service'

export const useArtigosStore = defineStore('artigos', () => {
  const artigos = ref<Artigo[]>([])
  const categorias = ref<Categoria[]>([])
  const artigoAtual = ref<Artigo | null>(null)
  const carregando = ref<boolean>(false)
  const erro = ref<string | null>(null)

  const artigosPublicados = computed(() =>
    artigos.value.filter((artigo) => artigo.status === 'publicado'),
  )

  const artigosDestaque = computed(() =>
    artigos.value.filter((artigo) => artigo.status === 'publicado' && artigo.destaque),
  )

  async function carregarArtigos(filtros?: FiltrosArtigo) {
    carregando.value = true
    erro.value = null
    try {
      artigos.value = await artigosService.listarArtigos(filtros)
    } catch (e) {
      erro.value = e instanceof Error ? e.message : 'Erro ao carregar artigos'
    } finally {
      carregando.value = false
    }
  }

  async function carregarCategorias() {
    try {
      categorias.value = await artigosService.listarCategorias()
    } catch (e) {
      erro.value = e instanceof Error ? e.message : 'Erro ao carregar categorias'
    }
  }

  async function carregarArtigoPorSlug(slug: string): Promise<Artigo | null> {
    carregando.value = true
    erro.value = null
    try {
      const art = await artigosService.obterArtigoPorSlug(slug)
      artigoAtual.value = art
      return art
    } catch (e) {
      erro.value = e instanceof Error ? e.message : 'Erro ao carregar artigo'
      return null
    } finally {
      carregando.value = false
    }
  }

  async function carregarArtigoPorId(id: string): Promise<Artigo | null> {
    carregando.value = true
    erro.value = null
    try {
      const art = await artigosService.obterArtigoPorId(id)
      artigoAtual.value = art
      return art
    } catch (e) {
      erro.value = e instanceof Error ? e.message : 'Erro ao carregar artigo'
      return null
    } finally {
      carregando.value = false
    }
  }

  async function salvarArtigo(artigoDados: Partial<Artigo> & { titulo: string }): Promise<Artigo> {
    carregando.value = true
    erro.value = null
    try {
      const salvo = await artigosService.salvarArtigo(artigoDados)
      // Atualiza lista em memória se presente
      const index = artigos.value.findIndex((a) => a.id === salvo.id)
      if (index !== -1) {
        artigos.value[index] = salvo
      } else {
        artigos.value.unshift(salvo)
      }
      return salvo
    } catch (e) {
      erro.value = e instanceof Error ? e.message : 'Erro ao salvar artigo'
      throw e
    } finally {
      carregando.value = false
    }
  }

  async function excluirArtigo(id: string): Promise<boolean> {
    carregando.value = true
    erro.value = null
    try {
      const sucesso = await artigosService.excluirArtigo(id)
      if (sucesso) {
        artigos.value = artigos.value.filter((a) => a.id !== id)
      }
      return sucesso
    } catch (e) {
      erro.value = e instanceof Error ? e.message : 'Erro ao excluir artigo'
      return false
    } finally {
      carregando.value = false
    }
  }

  function obterCategoriaPorId(categoriaId: string): Categoria | undefined {
    return categorias.value.find((c) => c.id === categoriaId)
  }

  return {
    artigos,
    categorias,
    artigoAtual,
    carregando,
    erro,
    artigosPublicados,
    artigosDestaque,
    carregarArtigos,
    carregarCategorias,
    carregarArtigoPorSlug,
    carregarArtigoPorId,
    salvarArtigo,
    excluirArtigo,
    obterCategoriaPorId,
  }
})
