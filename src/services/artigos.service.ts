import type { Artigo } from '@/types/artigo'
import type { Categoria } from '@/types/categoria'
import { artigosMock } from '@/mocks/artigos'
import { categoriasMock } from '@/mocks/categorias'

// Armazenamento em memória para simulação de criação/edição em tempo de execução
const listaArtigos: Artigo[] = [...artigosMock]
const listaCategorias: Categoria[] = [...categoriasMock]

export interface FiltrosArtigo {
  categoriaId?: string
  busca?: string
  apenasPublicados?: boolean
  apenasDestaques?: boolean
}

export const artigosService = {
  async listarArtigos(filtros?: FiltrosArtigo): Promise<Artigo[]> {
    // Simula delay de rede assíncrono
    await new Promise((resolve) => setTimeout(resolve, 80))

    let resultado = [...listaArtigos]

    if (filtros?.apenasPublicados) {
      resultado = resultado.filter((artigo) => artigo.status === 'publicado')
    }

    if (filtros?.apenasDestaques) {
      resultado = resultado.filter((artigo) => artigo.destaque)
    }

    if (filtros?.categoriaId) {
      resultado = resultado.filter((artigo) => artigo.categoriaId === filtros.categoriaId)
    }

    if (filtros?.busca && filtros.busca.trim()) {
      const termo = filtros.busca.toLowerCase().trim()
      resultado = resultado.filter(
        (artigo) =>
          artigo.titulo.toLowerCase().includes(termo) ||
          artigo.resumo.toLowerCase().includes(termo) ||
          artigo.tags.some((tag) => tag.toLowerCase().includes(termo)),
      )
    }

    return resultado
  },

  async obterArtigoPorSlug(slug: string): Promise<Artigo | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    const encontrado = listaArtigos.find((artigo) => artigo.slug === slug)
    return encontrado || null
  },

  async obterArtigoPorId(id: string): Promise<Artigo | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    const encontrado = listaArtigos.find((artigo) => artigo.id === id)
    return encontrado || null
  },

  async listarCategorias(): Promise<Categoria[]> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return [...listaCategorias]
  },

  async obterCategoriaPorSlug(slug: string): Promise<Categoria | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return listaCategorias.find((cat) => cat.slug === slug) || null
  },

  async obterCategoriaPorId(id: string): Promise<Categoria | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return listaCategorias.find((cat) => cat.id === id) || null
  },

  async salvarArtigo(artigoDados: Partial<Artigo> & { titulo: string }): Promise<Artigo> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    if (artigoDados.id) {
      // Edição
      const index = listaArtigos.findIndex((a) => a.id === artigoDados.id)
      if (index === -1) {
        throw new Error('Artigo não encontrado para atualização')
      }
      const atualizado: Artigo = {
        ...listaArtigos[index],
        ...artigoDados,
        atualizadoEm: new Date().toISOString(),
      } as Artigo
      listaArtigos[index] = atualizado
      return atualizado
    } else {
      // Criação
      const novo: Artigo = {
        id: `art-${Date.now()}`,
        slug: artigoDados.slug || artigoDados.titulo.toLowerCase().replace(/\s+/g, '-'),
        titulo: artigoDados.titulo,
        subtitulo: artigoDados.subtitulo || '',
        resumo: artigoDados.resumo || '',
        conteudo: artigoDados.conteudo || '',
        imagemCapa: artigoDados.imagemCapa || 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
        categoriaId: artigoDados.categoriaId || '1',
        autor: artigoDados.autor || 'Redação Diabetes Sem Barreiras',
        publicadoEm: artigoDados.status === 'publicado' ? new Date().toISOString() : undefined,
        atualizadoEm: new Date().toISOString(),
        tempoLeituraMinutos: artigoDados.tempoLeituraMinutos || 4,
        tags: artigoDados.tags || [],
        referencias: artigoDados.referencias || [],
        status: artigoDados.status || 'rascunho',
        destaque: !!artigoDados.destaque,
        versaoAcessivel: artigoDados.versaoAcessivel,
        versaoLinguagemSimples: artigoDados.versaoLinguagemSimples,
      }
      listaArtigos.unshift(novo)
      return novo
    }
  },

  async excluirArtigo(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const index = listaArtigos.findIndex((a) => a.id === id)
    if (index !== -1) {
      listaArtigos.splice(index, 1)
      return true
    }
    return false
  },
}
