/**
 * Utilitários para formatação e manipulação de datas no padrão pt-BR
 */
export function formatarData(dataIso?: string): string {
  if (!dataIso) return ''
  const data = new Date(dataIso)
  if (isNaN(data.getTime())) return ''
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(data)
}

export function formatarDataCurta(dataIso?: string): string {
  if (!dataIso) return ''
  const data = new Date(dataIso)
  if (isNaN(data.getTime())) return ''
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(data)
}
