<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="secao-video callout-card banner-purple" role="region" aria-labelledby="video-title">
    <div class="callout-content">
      <h2 id="video-title" class="callout-title">
        Assista ao vídeo de apresentação
      </h2>
      <p class="callout-desc">
        Conheça mais sobre o projeto Diabetes Sem Barreiras.
      </p>
      <div class="callout-action">
        <RouterLink to="/videos" class="btn-assistir-agora">
          <svg viewBox="0 0 24 24" fill="currentColor" class="play-icon" aria-hidden="true">
            <polygon points="6 4 19 12 6 20 6 4" />
          </svg>
          <span>ASSISTIR AGORA</span>
        </RouterLink>
      </div>
    </div>

    <div class="callout-media">
      <div class="video-preview-box">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
          alt="Prévia do vídeo institucional"
          class="media-video-img"
          loading="lazy"
        />
        <div class="play-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" class="badge-play-icon">
            <circle cx="12" cy="12" r="10" fill="rgba(0, 0, 0, 0.6)" />
            <polygon points="10 8 16 12 10 16 10 8" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.secao-video {
  background-color: var(--color-banner-purple);
  color: #ffffff;
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  box-shadow: 0 4px 14px rgba(63, 24, 99, 0.15);
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
  font-size: 1.05rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.35rem;
  line-height: 1.25;
}

.callout-desc {
  font-size: 0.8125rem;
  color: #e9d5ff;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.callout-action {
  margin-top: auto;
}

.btn-assistir-agora {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.1rem;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--color-banner-purple);
  background-color: #ffffff;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.btn-assistir-agora:hover {
  background-color: #f3e8ff;
  text-decoration: none;
  transform: translateY(-1px);
}

.play-icon {
  width: 13px;
  height: 13px;
}

.callout-media {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

.video-preview-box {
  position: relative;
  width: 100%;
  height: 100%;
}

.media-video-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-badge {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-play-icon {
  width: 38px;
  height: 38px;
}

html.high-contrast .secao-video {
  background-color: #000000;
  border: 2px solid #ffff00;
}

html.high-contrast .callout-title {
  color: #ffff00;
}

html.high-contrast .btn-assistir-agora {
  background-color: #ffff00;
  color: #000000;
}
</style>
