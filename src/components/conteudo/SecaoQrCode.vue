<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="secao-qrcode" class="secao-qrcode callout-card banner-white" role="region" aria-labelledby="qrcode-title">
    <div class="callout-content">
      <h2 id="qrcode-title" class="callout-title">
        Acesse pelo QR Code
      </h2>
      <p class="callout-desc">
        Escaneie e acesse a revista no seu celular ou tablet.
      </p>
      <div class="callout-action">
        <RouterLink to="/revista" class="btn-escanear-agora">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="phone-icon" aria-hidden="true">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
          <span>ESCANEAR AGORA</span>
        </RouterLink>
      </div>
    </div>

    <div class="callout-media">
      <div class="qr-code-box">
        <svg
          class="qrcode-svg"
          viewBox="0 0 100 100"
          role="img"
          aria-label="QR Code para acesso móvel à revista"
        >
          <rect width="100" height="100" fill="#ffffff" />
          <!-- Cantos -->
          <rect x="5" y="5" width="26" height="26" fill="#0e326b" rx="2" />
          <rect x="10" y="10" width="16" height="16" fill="#ffffff" rx="1" />
          <rect x="14" y="14" width="8" height="8" fill="#0e326b" />

          <rect x="69" y="5" width="26" height="26" fill="#0e326b" rx="2" />
          <rect x="74" y="10" width="16" height="16" fill="#ffffff" rx="1" />
          <rect x="78" y="14" width="8" height="8" fill="#0e326b" />

          <rect x="5" y="69" width="26" height="26" fill="#0e326b" rx="2" />
          <rect x="10" y="74" width="16" height="16" fill="#ffffff" rx="1" />
          <rect x="14" y="78" width="8" height="8" fill="#0e326b" />

          <!-- Padrões intermediários -->
          <rect x="40" y="10" width="6" height="6" fill="#0e326b" />
          <rect x="52" y="10" width="6" height="6" fill="#0e326b" />
          <rect x="40" y="22" width="18" height="6" fill="#0e326b" />
          <rect x="10" y="40" width="6" height="18" fill="#0e326b" />
          <rect x="22" y="40" width="12" height="6" fill="#0e326b" />
          <rect x="40" y="40" width="20" height="20" fill="#0e326b" rx="2" />
          <rect x="69" y="40" width="6" height="14" fill="#0e326b" />
          <rect x="80" y="40" width="14" height="6" fill="#0e326b" />
          <rect x="40" y="69" width="12" height="6" fill="#0e326b" />
          <rect x="58" y="69" width="6" height="14" fill="#0e326b" />
          <rect x="40" y="82" width="12" height="12" fill="#0e326b" />
          <rect x="69" y="82" width="26" height="12" fill="#0e326b" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.secao-qrcode {
  background-color: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  box-shadow: 0 4px 14px rgba(14, 50, 107, 0.05);
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
  color: var(--color-primary);
  margin-bottom: 0.35rem;
  line-height: 1.25;
}

.callout-desc {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
  margin-bottom: 1rem;
}

.callout-action {
  margin-top: auto;
}

.btn-escanear-agora {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.1rem;
  font-size: 0.75rem;
  font-weight: 800;
  color: #124488;
  background-color: #edf4fe;
  border: 1px solid #d0e1fd;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-escanear-agora:hover {
  background-color: #dbeaff;
  text-decoration: none;
  transform: translateY(-1px);
}

.phone-icon {
  width: 14px;
  height: 14px;
}

.callout-media {
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code-box {
  width: 100%;
  height: 100%;
  padding: 4px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: #ffffff;
}

.qrcode-svg {
  width: 100%;
  height: 100%;
}

html.high-contrast .secao-qrcode {
  background-color: #000000;
  border: 2px solid #ffffff;
}

html.high-contrast .callout-title {
  color: #ffff00;
}

html.high-contrast .btn-escanear-agora {
  background-color: #000000;
  border: 1px solid #ffff00;
  color: #ffff00;
}
</style>
