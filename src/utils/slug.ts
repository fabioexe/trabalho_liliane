/**
 * Gera um slug amigável para URL a partir de um título em português
 */
export function gerarSlug(texto: string): string {
  return texto
    .toString()
    .normalize('NFD') // Separa caracteres com acento de suas marcas diacríticas
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais não alfanuméricos
    .replace(/[\s_-]+/g, '-') // Substitui espaços e underlines por traço
    .replace(/^-+|-+$/g, '') // Remove traços do início e do fim
}
