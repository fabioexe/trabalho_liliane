export type EscalaFonte = 1 | 1.1 | 1.25 | 1.5

export interface EstadoAcessibilidade {
  escalaFonte: EscalaFonte
  altoContraste: boolean
  reducaoMovimento: boolean
}

export type AccessibilityState = EstadoAcessibilidade
