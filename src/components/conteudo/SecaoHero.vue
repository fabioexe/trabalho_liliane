<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <section class="secao-hero" aria-labelledby="hero-title">
    <BaseContainer>
      <div class="hero-layout">
        <!-- Coluna 1 (Esquerda): Título, Tagline, Texto e Botões -->
        <div class="hero-left">
          <div class="hero-brand-heading">
            <h1 id="hero-title" class="hero-title">
              <span class="title-diabetes">DIABETES</span>
              <span class="title-barreiras">SEM BARREIRAS</span>
            </h1>
            <div class="hero-tagline">
              <span>INFORMAÇÃO, CUIDADO E ACESSIBILIDADE</span>
              <span>PARA TODOS!</span>
            </div>
          </div>

          <p class="hero-lead">
            Uma revista digital educativa, inclusiva e acessível sobre Diabetes Mellitus
            para transformar informação em qualidade de vida.
          </p>

          <div class="hero-actions">
            <BaseButton
              to="/revista"
              variant="purple"
              size="lg"
              class="btn-ler-revista"
            >
              <template #prefix>
                <svg
                  aria-hidden="true"
                  class="btn-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </template>
              LER REVISTA DIGITAL
            </BaseButton>

            <BaseButton
              to="/sobre-o-projeto"
              variant="outline"
              size="lg"
              class="btn-saiba-mais"
            >
              <template #prefix>
                <svg
                  aria-hidden="true"
                  class="btn-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </template>
              SAIBA MAIS
            </BaseButton>
          </div>
        </div>

        <!-- Coluna 2 (Centro): Foto do Grupo Diverso com Círculo Lilás atrás -->
        <div class="hero-center">
          <div class="hero-image-wrapper">
            <!-- Círculo decorativo lilás/roxo ao fundo conforme ref_img_1.jpeg -->
            <div class="purple-circle-bg" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Grupo diverso e acolhedor de profissionais de saúde, idosos, crianças e jovens sorrindo juntos"
              class="hero-people-img"
            />
          </div>
        </div>

        <!-- Coluna 3 (Direita): 3 Cards Flutuantes de Destaque -->
        <div class="hero-right" role="list" aria-label="Destaques da revista">
          <!-- Card 1: Informação Confiável -->
          <div class="hero-feature-card" role="listitem">
            <div class="feature-icon-box icon-shield" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="feature-svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div class="feature-content">
              <h2 class="feature-title">Informação confiável</h2>
              <p class="feature-desc">Conteúdo baseado em evidências científicas.</p>
            </div>
          </div>

          <!-- Card 2: Acessível para todos -->
          <div class="hero-feature-card" role="listitem">
            <div class="feature-icon-box icon-people" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="feature-svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div class="feature-content">
              <h2 class="feature-title">Acessível para todos</h2>
              <p class="feature-desc">Recursos de acessibilidade para inclusão plena.</p>
            </div>
          </div>

          <!-- Card 3: Cuidado integral -->
          <div class="hero-feature-card" role="listitem">
            <div class="feature-icon-box icon-heart" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="feature-svg">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div class="feature-content">
              <h2 class="feature-title">Cuidado integral</h2>
              <p class="feature-desc">Saúde física, mental e emocional.</p>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.secao-hero {
  padding: var(--space-8) 0 var(--space-10);
  background: linear-gradient(180deg, #ffffff 0%, var(--color-background) 100%);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.15fr 1fr 0.85fr;
  align-items: center;
  gap: var(--space-6);
}

/* Coluna Esquerda */
.hero-left {
  display: flex;
  flex-direction: column;
}

.hero-brand-heading {
  margin-bottom: var(--space-3);
}

.hero-title {
  display: flex;
  flex-direction: column;
  line-height: 0.95;
  margin-bottom: var(--space-3);
}

.title-diabetes {
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 900;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

.title-barreiras {
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 900;
  color: var(--color-purple);
  letter-spacing: -0.01em;
}

.hero-tagline {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: 0.03em;
  line-height: 1.35;
  margin-bottom: var(--space-2);
}

.hero-lead {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  max-width: 440px;
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.btn-svg {
  width: 17px;
  height: 17px;
}

/* Coluna Centro (Imagem com círculo) */
.hero-center {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purple-circle-bg {
  position: absolute;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(104, 44, 145, 0.45) 0%, rgba(104, 44, 145, 0.15) 70%, transparent 100%);
  border-radius: 50%;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.hero-people-img {
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  max-height: 380px;
  object-fit: contain;
  border-radius: var(--radius-xl);
  filter: drop-shadow(0 10px 20px rgba(14, 50, 107, 0.12));
}

/* Coluna Direita (3 Cards Verticais) */
.hero-right {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.hero-feature-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  background-color: #ffffff;
  padding: 0.9rem 1.1rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 14px rgba(14, 50, 107, 0.06);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.hero-feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(14, 50, 107, 0.1);
}

.feature-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.feature-svg {
  width: 24px;
  height: 24px;
}

.icon-shield {
  color: var(--color-primary-medium);
  background-color: #edf4fe;
}

.icon-people {
  color: var(--color-primary-medium);
  background-color: #edf4fe;
}

.icon-heart {
  color: var(--color-purple);
  background-color: var(--color-purple-light);
}

.feature-title {
  font-size: 0.9375rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 2px;
}

.feature-desc {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  line-height: 1.35;
  margin: 0;
}

/* Responsividade */
@media (max-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .hero-center {
    order: -1;
    max-width: 380px;
    margin: 0 auto;
  }

  .hero-right {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

html.high-contrast .hero-feature-card {
  background-color: #000000;
  border: 2px solid #ffffff;
}

html.high-contrast .feature-title {
  color: #ffff00;
}

html.high-contrast .title-diabetes {
  color: #ffff00;
}

html.high-contrast .title-barreiras {
  color: #ffffff;
}

html.high-contrast .hero-tagline {
  color: #ffffff;
}
</style>
