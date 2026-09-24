<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="secao-projeto callout-card banner-blue" role="region" aria-labelledby="chamada-projeto-title">
    <div class="callout-content">
      <h2 id="chamada-projeto-title" class="callout-title">
        INCLUIR É CUIDAR!
      </h2>
      <p class="callout-desc">
        Respeito, empatia e informação constroem um mundo melhor.
      </p>
      <div class="callout-action">
        <RouterLink to="/sobre-o-projeto" class="btn-outline-white">
          CONHEÇA NOSSO PROJETO
        </RouterLink>
      </div>
    </div>

    <div class="callout-media">
      <img
        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80"
        alt="Família acolhedora sorrindo"
        class="media-family-img"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.secao-projeto {
  background-color: var(--color-banner-blue);
  color: #ffffff;
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  box-shadow: 0 4px 14px rgba(18, 68, 136, 0.15);
  overflow: hidden;
  height: 100%;
}

.callout-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.callout-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
  line-height: 1.2;
}

.callout-desc {
  font-size: 0.8125rem;
  color: #e2e8f0;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.callout-action {
  margin-top: auto;
}

.btn-outline-white {
  display: inline-block;
  padding: 0.45rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  border: 1.5px solid #ffffff;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.2);
  text-decoration: none;
}

.callout-media {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.media-family-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

html.high-contrast .secao-projeto {
  background-color: #000000;
  border: 2px solid #ffff00;
}

html.high-contrast .callout-title {
  color: #ffff00;
}
</style>
