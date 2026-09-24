<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

interface MaterialDownload {
  id: string
  titulo: string
  descricao: string
  formato: string
  tamanho: string
}

const materiais: MaterialDownload[] = [
  {
    id: 'mat-1',
    titulo: 'Guia Visual do Prato Saudável para Diabéticos',
    descricao: 'Infográfico ilustrado de alta definição pronto para impressão ou leitura em tela.',
    formato: 'PDF Acessível',
    tamanho: '2.4 MB',
  },
  {
    id: 'mat-2',
    titulo: 'Diário de Automonitoramento Glicêmico e Sintomas',
    descricao: 'Tabela simples em fonte ampliada para anotações diárias de glicemia e refeições.',
    formato: 'PDF / DOCX',
    tamanho: '850 KB',
  },
  {
    id: 'mat-3',
    titulo: 'Cartilha de Primeiros Socorros em Crises de Hipoglicemia',
    descricao: 'Passo a passo rápido em linguagem simples para orientar familiares e cuidadores.',
    formato: 'PDF Acessível',
    tamanho: '1.2 MB',
  },
]

const termosGlossario = [
  { termo: 'Glicemia', definicao: 'Quantidade de açúcar (glicose) circulante na corrente sanguínea em um determinado momento.' },
  { termo: 'Insulina', definicao: 'Hormônio vital produzido pelo pâncreas que permite a entrada de glicose nas células para gerar energia.' },
  { termo: 'Hipoglicemia', definicao: 'Queda do nível de glicose no sangue para valores abaixo do considerado seguro (geralmente abaixo de 70 mg/dL).' },
  { termo: 'Hemoglobina Glicada (HbA1c)', definicao: 'Exame de sangue que reflete a média dos níveis de glicose nos últimos 2 a 3 meses.' },
]
</script>

<template>
  <div class="pagina-recursos">
    <BaseContainer>
      <SectionHeading
        title="Recursos e Materiais Educativos"
        subtitle="Acesse cartilhas, tabelas de controle para download e nosso glossário ilustrado de termos médicos."
        eyebrow="Apoio Prático"
      />

      <!-- Seção de Downloads -->
      <section class="recursos-secao" aria-labelledby="downloads-title">
        <h2 id="downloads-title" class="sub-secao-title">Materiais para Download Gratuito</h2>
        <div class="materiais-grid">
          <BaseCard v-for="mat in materiais" :key="mat.id" padding="md" class="material-card">
            <div class="material-meta">
              <span class="material-badge">{{ mat.formato }}</span>
              <span class="material-size">{{ mat.tamanho }}</span>
            </div>
            <h3 class="material-title">{{ mat.titulo }}</h3>
            <p class="material-desc">{{ mat.descricao }}</p>
            <div class="material-action">
              <BaseButton variant="primary" size="sm" href="#" :aria-label="`Baixar ${mat.titulo} (${mat.formato})`">
                <svg aria-hidden="true" class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span>Baixar Arquivo</span>
              </BaseButton>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Glossário de Saúde -->
      <section class="recursos-secao glossario-secao" aria-labelledby="glossario-title">
        <h2 id="glossario-title" class="sub-secao-title">Glossário Descomplicado</h2>
        <p class="glossario-intro">Entenda os termos mais frequentes nos exames e consultas médicas:</p>
        <dl class="glossario-list">
          <div v-for="item in termosGlossario" :key="item.termo" class="glossario-item">
            <dt class="termo-dt">{{ item.termo }}</dt>
            <dd class="termo-dd">{{ item.definicao }}</dd>
          </div>
        </dl>
      </section>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-recursos {
  padding: var(--space-12) 0 var(--space-16);
  background-color: var(--color-background);
}

.recursos-secao {
  margin-bottom: var(--space-12);
}

.sub-secao-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-2);
  border-bottom: 2px solid var(--color-border);
}

.materiais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.material-card {
  display: flex;
  flex-direction: column;
}

.material-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-3);
  font-size: 0.8125rem;
}

.material-badge {
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
}

.material-size {
  color: var(--color-text-muted);
}

.material-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: var(--space-2);
  color: var(--color-text);
}

.material-desc {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: var(--font-line-height-normal);
  margin-bottom: var(--space-6);
  flex: 1;
}

.material-action {
  margin-top: auto;
}

.btn-icon {
  width: 16px;
  height: 16px;
  margin-right: var(--space-1);
}

/* Glossário */
.glossario-intro {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.glossario-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.glossario-item {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
}

.termo-dt {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.termo-dd {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: var(--font-line-height-normal);
}
</style>
