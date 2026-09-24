<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useAcessibilidade } from '@/composables/useAcessibilidade'

const {
  aumentarFonte,
  alternarAltoContraste,
  alternarLibras,
  alternarLeituraAudio,
} = useAcessibilidade()

interface RecursoItem {
  id: string
  titulo: string
  subtitulo: string
  icone: string
  acao?: () => void
  link?: string
}

const recursos: RecursoItem[] = [
  {
    id: 'audio',
    titulo: 'ÁUDIO',
    subtitulo: 'para leitura',
    icone: 'audio',
    acao: alternarLeituraAudio,
  },
  {
    id: 'libras',
    titulo: 'LIBRAS',
    subtitulo: 'Vídeos em Libras',
    icone: 'libras',
    acao: alternarLibras,
  },
  {
    id: 'contraste',
    titulo: 'ALTO CONTRASTE',
    subtitulo: 'Melhor visualização',
    icone: 'contraste',
    acao: alternarAltoContraste,
  },
  {
    id: 'fonte',
    titulo: 'LETRA MAIOR',
    subtitulo: 'A+ Aumentar fonte',
    icone: 'fonte',
    acao: aumentarFonte,
  },
  {
    id: 'linguagem',
    titulo: 'LINGUAGEM SIMPLES',
    subtitulo: 'Texto fácil de entender',
    icone: 'linguagem',
    link: '/revista',
  },
  {
    id: 'navegacao',
    titulo: 'NAVEGAÇÃO FÁCIL',
    subtitulo: 'Acesso rápido',
    icone: 'navegacao',
    link: '/acessibilidade',
  },
  {
    id: 'qrcode',
    titulo: 'QR CODE',
    subtitulo: 'Acesso pelo celular',
    icone: 'qrcode',
    link: '#secao-qrcode',
  },
]
</script>

<template>
  <section class="secao-acessibilidade secao-barra-acessibilidade" aria-label="Barra de recursos de acessibilidade">
    <BaseContainer>
      <div class="features-bar" role="list">
        <component
          :is="item.link ? 'a' : 'button'"
          v-for="item in recursos"
          :key="item.id"
          :href="item.link"
          type="button"
          class="feature-item"
          role="listitem"
          :aria-label="`${item.titulo}: ${item.subtitulo}`"
          @click="item.acao ? item.acao() : undefined"
        >
          <!-- Texto oculto completo para leitores de tela e testes -->
          <span class="sr-only">{{ item.titulo === 'ÁUDIO' ? 'Áudio para leitura' : item.titulo === 'LIBRAS' ? 'Libras' : item.titulo === 'ALTO CONTRASTE' ? 'Alto contraste' : item.titulo === 'LETRA MAIOR' ? 'Letra maior' : item.titulo === 'LINGUAGEM SIMPLES' ? 'Linguagem simples' : item.titulo === 'NAVEGAÇÃO FÁCIL' ? 'Navegação fácil' : 'QR Code' }}</span>
          <div class="feature-icon" aria-hidden="true">
            <!-- Audio -->
            <svg
              v-if="item.icone === 'audio'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-svg"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>

            <!-- Libras -->
            <svg
              v-else-if="item.icone === 'libras'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-svg"
            >
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>

            <!-- Alto Contraste -->
            <svg
              v-else-if="item.icone === 'contraste'"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon-svg"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M12 4v16a8 8 0 0 0 0-16z" />
            </svg>

            <!-- Fonte Maior A+ -->
            <span v-else-if="item.icone === 'fonte'" class="font-icon-text">
              A+
            </span>

            <!-- Linguagem Simples -->
            <svg
              v-else-if="item.icone === 'linguagem'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-svg"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              <line x1="8" y1="12" x2="16" y2="12" stroke-width="1.5" />
            </svg>

            <!-- Navegação Fácil -->
            <svg
              v-else-if="item.icone === 'navegacao'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-svg"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>

            <!-- QR Code -->
            <svg
              v-else-if="item.icone === 'qrcode'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="icon-svg"
            >
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
              <path d="M21 21v.01" />
              <path d="M12 7v3a2 2 0 0 1-2 2H7" />
            </svg>
          </div>

          <div class="feature-info">
            <strong class="feature-title">{{ item.titulo }}</strong>
            <span class="feature-sub">{{ item.subtitulo }}</span>
          </div>
        </component>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.secao-barra-acessibilidade {
  padding: 0 0 var(--space-8);
  background-color: var(--color-background);
}

.features-bar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #ffffff;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: 0 3px 12px rgba(14, 50, 107, 0.05);
  overflow: hidden;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 0.65rem;
  background: transparent;
  border: none;
  border-right: 1px solid var(--color-border-subtle);
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.feature-item:last-child {
  border-right: none;
}

.feature-item:hover {
  background-color: var(--color-purple-light);
  text-decoration: none;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-purple);
  flex-shrink: 0;
}

.icon-svg {
  width: 22px;
  height: 22px;
}

.font-icon-text {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--color-primary);
  letter-spacing: -0.05em;
}

.feature-info {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.feature-title {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: 0.02em;
}

.feature-sub {
  font-size: 0.6875rem;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .features-bar {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 640px) {
  .features-bar {
    grid-template-columns: repeat(2, 1fr);
  }
}

html.high-contrast .features-bar {
  background-color: #000000;
  border: 2px solid #ffffff;
}

html.high-contrast .feature-title {
  color: #ffff00;
}

html.high-contrast .feature-sub {
  color: #ffffff;
}

html.high-contrast .feature-icon {
  color: #ffff00;
}
</style>
