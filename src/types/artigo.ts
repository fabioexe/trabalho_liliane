export interface Referencia {
  id: string
  titulo: string
  fonte: string
  url?: string
  dataAcesso?: string
}

export type StatusArtigo = 'rascunho' | 'publicado'

export interface Artigo {
  id: string
  slug: string
  titulo: string
  subtitulo?: string
  resumo: string
  conteudo: string
  imagemCapa: string
  categoriaId: string
  autor: string
  publicadoEm?: string
  atualizadoEm?: string
  tempoLeituraMinutos: number
  tags: string[]
  referencias: Referencia[]
  status: StatusArtigo
  destaque: boolean
  versaoAcessivel?: string
  versaoLinguagemSimples?: string
}

// Aliases para compatibilidade de nomenclatura se necessário
export type Reference = Referencia
export type Article = Artigo
