<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const publicBase = import.meta.env.BASE_URL
const slides = [
  {
    title: 'Informação que acolhe. Cuidado que transforma.',
    text: 'Conhecimento acessível sobre diabetes para apoiar escolhas mais saudáveis em todas as fases da vida.',
    desktop: `${publicBase}images/carrossel1.jpeg`,
    mobile: `${publicBase}images/carrossel1.jpeg`,
    alt: 'Pessoa usando um medidor de glicose para acompanhar a diabetes',
  },
  {
    title: 'Cuidar é incluir.',
    text: 'Conteúdos e recursos pensados para que todas as pessoas possam aprender e participar.',
    desktop: `${publicBase}images/carrossel2.jpg`,
    mobile: `${publicBase}images/carrossel2.jpg`,
    alt: 'Profissional de saúde conversa com um paciente durante uma consulta',
  },
]
const slideAtual = ref(0)
let timer: ReturnType<typeof setInterval> | undefined
function irParaSlide(index: number) { slideAtual.value = (index + slides.length) % slides.length }
onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timer = setInterval(() => irParaSlide(slideAtual.value + 1), 6500)
  }
})
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section class="hero-carousel" aria-label="Destaques do portal" aria-roledescription="carrossel">
    <article v-for="(slide, index) in slides" :key="slide.title" class="hero-slide"
      :class="{ 'is-active': slideAtual === index }" :aria-hidden="slideAtual !== index">
      <picture class="hero-picture">
        <source media="(max-width: 700px)" :srcset="slide.mobile" />
        <img :src="slide.desktop" :alt="slide.alt" />
      </picture>
      <div class="hero-shade" />
      <div class="hero-copy">
        <p class="eyebrow">DIABETES SEM BARREIRAS</p>
        <h1>{{ slide.title }}</h1>
        <p class="hero-lead">{{ slide.text }}</p>
        <div class="hero-actions">
          <BaseButton to="/revista" variant="purple" size="lg">Explorar conteúdos</BaseButton>
          <BaseButton to="/sobre-o-projeto" variant="outline" size="lg">Conheça o projeto</BaseButton>
        </div>
      </div>
    </article>
    <div class="carousel-controls" aria-label="Controles do carrossel">
      <button v-for="(slide, index) in slides" :key="slide.title" type="button"
        :aria-label="`Ir para destaque ${index + 1}`" :aria-current="slideAtual === index ? 'true' : undefined"
        @click="irParaSlide(index)" />
    </div>
    <button class="carousel-arrow previous" type="button" aria-label="Destaque anterior" @click="irParaSlide(slideAtual - 1)">‹</button>
    <button class="carousel-arrow next" type="button" aria-label="Próximo destaque" @click="irParaSlide(slideAtual + 1)">›</button>
  </section>
</template>

<style scoped>
.hero-carousel { position: relative; min-height: min(720px, calc(100svh - 76px)); height: min(760px, calc(100svh - 76px)); overflow: hidden; background: #0e326b; }
.hero-slide { position: absolute; inset: 0; opacity: 0; visibility: hidden; transition: opacity .7s ease; }
.hero-slide.is-active { opacity: 1; visibility: visible; }
.hero-picture, .hero-picture img, .hero-shade { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero-picture img { object-fit: cover; object-position: center; }
.hero-shade { background: linear-gradient(90deg, rgba(5,25,55,.86) 0%, rgba(5,25,55,.64) 45%, rgba(5,25,55,.08) 100%); }
.hero-copy { position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center; min-height: 100%; width: min(920px, 74%); padding: clamp(2rem, 6vw, 6rem); color: white; }
.eyebrow { font-weight: 800; letter-spacing: .14em; color: #c6ebff; }
h1 { max-width: 820px; margin: .6rem 0 1rem; font-size: clamp(2.35rem, 4.8vw, 4.5rem); line-height: 1.06; }
.hero-lead { max-width: 580px; color: #f1f7ff; font-size: clamp(1rem, 1.7vw, 1.25rem); line-height: 1.6; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.4rem; }
.carousel-controls { position: absolute; z-index: 2; left: 50%; bottom: 1.6rem; display: flex; gap: .7rem; transform: translateX(-50%); }
.carousel-controls button { width: 2.5rem; height: .35rem; padding: 0; border: 0; border-radius: 99px; background: #ffffff80; cursor: pointer; }
.carousel-controls button[aria-current="true"] { background: #fff; }
.carousel-arrow { position: absolute; z-index: 2; top: 50%; width: 3rem; height: 3rem; border: 1px solid #ffffff90; border-radius: 50%; color: white; background: #09244b80; font-size: 2rem; cursor: pointer; transform: translateY(-50%); }
.previous { left: 1.25rem; } .next { right: 1.25rem; }
@media (max-width: 700px) {
  .hero-carousel { height: calc(100svh - 68px); min-height: 600px; }
  .hero-picture img { object-position: center; }
  .hero-shade { background: linear-gradient(0deg, rgba(5,25,55,.92), rgba(5,25,55,.55) 56%, rgba(5,25,55,.12)); }
  .hero-copy { justify-content: flex-end; width: 100%; padding: 2rem 1.5rem 5rem; }
  h1 { font-size: clamp(2.15rem, 9vw, 3.4rem); }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .carousel-arrow { top: 48%; width: 2.5rem; height: 2.5rem; }
  .previous { left: .7rem; } .next { right: .7rem; }
}
@media (prefers-reduced-motion: reduce) { .hero-slide { transition: none; } }
html.high-contrast .hero-shade { background: rgba(0,0,0,.82); }
</style>
