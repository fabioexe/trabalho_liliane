<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-container">
      <div class="footer-top-grid">
        <!-- Coluna 1: Logo & Missão -->
        <div class="footer-col brand-col">
          <div class="footer-brand">
            <div class="footer-brand-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" class="footer-icon-svg" fill="none">
                <path
                  d="M24 41.5s-16-10.2-16-23C8 11.8 13.5 7 19.5 7c4.2 0 7.5 2.5 8.5 4.5 1-2 4.3-4.5 8.5-4.5 6 0 11.5 4.8 11.5 11.5 0 12.8-16 23-16 23z"
                  fill="#ffffff"
                />
                <path
                  d="M17 25c1.5-3 5.5-4.5 8-4.5s3.5 1 3.5 2.5c0 1.5-1.5 2.5-3.5 2.5-3 0-5 1.5-6 3l-2-3.5z"
                  fill="#071b38"
                />
                <path
                  d="M31 25c-1.5-3-5.5-4.5-8-4.5s-3.5 1-3.5 2.5c0 1.5 1.5 2.5 3.5 2.5 3 0 5 1.5 6 3l2-3.5z"
                  fill="#071b38"
                />
                <circle cx="24" cy="18" r="2.5" fill="#071b38" />
              </svg>
            </div>
            <div class="footer-brand-text">
              <span class="brand-title">DIABETES</span>
              <span class="brand-subtitle">SEM BARREIRAS</span>
              <span class="brand-tag">REVISTA DIGITAL</span>
            </div>
          </div>
          <p class="brand-mission">
            Projeto educativo desenvolvido por alunos de Enfermagem para promover saúde, inclusão
            e qualidade de vida.
          </p>
        </div>

        <!-- Coluna 2: Navegação (2 subcolunas como em ref_img_1.jpeg) -->
        <div class="footer-col nav-col">
          <h3 class="col-heading">Navegação</h3>
          <div class="nav-subcolumns">
            <ul class="footer-links-list">
              <li><RouterLink to="/">Início</RouterLink></li>
              <li><RouterLink to="/revista">Revista Digital</RouterLink></li>
              <li><RouterLink to="/sobre-o-projeto">Sobre o Projeto</RouterLink></li>
            </ul>
            <ul class="footer-links-list">
              <li><RouterLink to="/acessibilidade">Acessibilidade</RouterLink></li>
              <li><RouterLink to="/videos">Vídeos</RouterLink></li>
              <li><RouterLink to="/recursos">Recursos</RouterLink></li>
              <li><RouterLink to="/contato">Contato</RouterLink></li>
            </ul>
          </div>
        </div>

        <!-- Coluna 3: Siga-nos -->
        <div class="footer-col social-col">
          <h3 class="col-heading">Siga-nos</h3>
          <div class="social-circles">
            <!-- Instagram -->
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="social-circle-btn ig-btn"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="social-svg">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <!-- Facebook -->
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="social-circle-btn fb-btn"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="social-svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <!-- YouTube -->
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              class="social-circle-btn yt-btn"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="social-svg">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#071b38" />
              </svg>
            </a>
          </div>
          <div class="share-tagline">
            <span>Compartilhe informação,</span>
            <span class="share-sub">compartilhe cuidado! <span class="heart-symbol">💜</span></span>
          </div>
        </div>

        <!-- Coluna 4: Referências -->
        <div class="footer-col ref-col">
          <h3 class="col-heading">Referências</h3>
          <ul class="ref-list">
            <li>Ministério da Saúde</li>
            <li>Sociedade Brasileira de Diabetes</li>
            <li>Organização Mundial da Saúde (OMS)</li>
            <li>Diretrizes da Sociedade Brasileira de Diabetes</li>
          </ul>
        </div>

        <!-- Coluna 5: Realização com Senac ARACATUBA -->
        <div class="footer-col realization-col">
          <h3 class="col-heading">Realização</h3>
          <div class="senac-brand-box">
            <div class="senac-logo-stylized">
              <!-- Logotipo do Senac (onda superior com texto Senac) -->
              <svg viewBox="0 0 120 45" class="senac-svg" aria-label="Logo Senac">
                <path
                  d="M10 28 C 30 14, 55 12, 75 22 C 90 28, 105 24, 115 16"
                  stroke="#f58220"
                  stroke-width="5"
                  fill="none"
                  stroke-linecap="round"
                />
                <text x="12" y="38" fill="#ffffff" font-size="20" font-weight="900" font-family="Inter, sans-serif">
                  Senac
                </text>
              </svg>
            </div>
            <span class="senac-unit">ARACATUBA</span>
          </div>
        </div>
      </div>

      <!-- Barra de Copyright e Aviso Legal -->
      <div class="footer-bottom-bar">
        <p class="copyright-text">
          &copy; 2025 Diabetes Sem Barreiras. Todos os direitos reservados.
        </p>
        <p class="disclaimer-text">
          Este site foi desenvolvido para fins educacionais e não substitui orientação profissional.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-footer-bg);
  color: #cbd5e1;
  padding: 2.5rem 0 1.25rem;
  font-size: 0.8125rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.footer-top-grid {
  display: grid;
  grid-template-columns: 1.5fr 1.3fr 1.1fr 1.3fr 0.9fr;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
  align-items: flex-start;
}

/* Coluna 1: Marca */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.footer-brand-icon {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
}

.footer-icon-svg {
  width: 100%;
  height: 100%;
}

.footer-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.brand-subtitle {
  font-size: 0.75rem;
  font-weight: 800;
  color: #c084fc;
  letter-spacing: 0.05em;
}

.brand-tag {
  font-size: 0.58rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.1em;
}

.brand-mission {
  font-size: 0.75rem;
  line-height: 1.45;
  color: #94a3b8;
  max-width: 250px;
}

/* Títulos das Colunas */
.col-heading {
  font-size: 0.875rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
}

/* Coluna 2: Navegação com 2 subcolunas */
.nav-subcolumns {
  display: flex;
  gap: var(--space-4);
}

.footer-links-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-links-list a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.775rem;
  transition: color var(--transition-fast);
}

.footer-links-list a:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Coluna 3: Siga-nos */
.social-circles {
  display: flex;
  gap: 0.45rem;
  margin-bottom: 0.6rem;
}

.social-circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #ffffff;
  transition: transform var(--transition-fast);
  text-decoration: none;
}

.social-circle-btn:hover {
  transform: translateY(-2px);
  text-decoration: none;
}

.ig-btn {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}

.fb-btn {
  background-color: #1877f2;
}

.yt-btn {
  background-color: #ff0000;
}

.social-svg {
  width: 15px;
  height: 15px;
}

.share-tagline {
  display: flex;
  flex-direction: column;
  font-size: 0.725rem;
  color: #94a3b8;
  line-height: 1.35;
}

.share-sub {
  color: #ffffff;
  font-weight: 600;
}

.heart-symbol {
  color: #c084fc;
}

/* Coluna 4: Referências */
.ref-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.ref-list li {
  font-size: 0.75rem;
  color: #94a3b8;
  line-height: 1.35;
}

/* Coluna 5: Senac */
.senac-brand-box {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.senac-svg {
  width: 100px;
  height: 35px;
}

.senac-unit {
  font-size: 0.675rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #94a3b8;
}

/* Barra inferior */
.footer-bottom-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: 0.725rem;
  color: #64748b;
}

.copyright-text {
  color: #94a3b8;
}

.disclaimer-text {
  color: #64748b;
  font-size: 0.7rem;
}

@media (max-width: 1024px) {
  .footer-top-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

@media (max-width: 640px) {
  .footer-top-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .footer-bottom-bar {
    flex-direction: column;
    text-align: center;
  }
}

html.high-contrast .site-footer {
  background-color: #000000;
  border-top: 2px solid #ffffff;
}

html.high-contrast .col-heading {
  color: #ffff00;
}

html.high-contrast .brand-title {
  color: #ffff00;
}
</style>
