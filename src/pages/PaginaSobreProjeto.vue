<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div class="pagina-sobre">
    <BaseContainer :narrow="true">
      <SectionHeading
        title="Sobre o Projeto Diabetes Sem Barreiras"
        subtitle="Uma iniciativa dedicada à democratização da informação sobre saúde e ao acolhimento inclusivo."
        eyebrow="Propósito & Equipe"
      />

      <!-- Bloco de Missão e Propósito -->
      <section class="sobre-section">
        <h2>Nosso Propósito</h2>
        <p>
          O projeto <strong>Diabetes Sem Barreiras</strong> nasceu da necessidade urgente de disponibilizar
          orientações científicas confiáveis sobre prevenção, tratamento e convivência com o diabetes
          em formatos que sejam verdadeiramente acessíveis a todas as pessoas, incluindo pessoas com deficiência
          visual, auditiva, intelectual ou motora.
        </p>
      </section>

      <!-- Grade de Pilares -->
      <section class="sobre-section">
        <h2>Pilares de Atuação</h2>
        <div class="pilares-grid">
          <BaseCard padding="md">
            <h3>Educação em Saúde</h3>
            <p>
              Transformar termos clínicos complexos em conteúdos de fácil entendimento,
              com suporte visual e versões em linguagem simples.
            </p>
          </BaseCard>

          <BaseCard padding="md">
            <h3>Acessibilidade Universal</h3>
            <p>
              Construir uma plataforma em conformidade com as diretrizes do WCAG 2.1 AA,
              garantindo navegação por teclado, leitor de telas e Libras.
            </p>
          </BaseCard>

          <BaseCard padding="md">
            <h3>Acolhimento Integral</h3>
            <p>
              Reconhecer o impacto emocional do diabetes crônico e oferecer acolhimento
              à saúde mental de pacientes, cuidadores e famílias.
            </p>
          </BaseCard>
        </div>
      </section>

      <!-- Metodologia e Evidências -->
      <section class="sobre-section">
        <h2>Metodologia e Rigor Científico</h2>
        <p>
          Todo o material editorial é desenvolvido a partir das diretrizes da Sociedade Brasileira de Diabetes (SBD),
          Ministério da Saúde, Associação Americana de Diabetes (ADA) e Organização Mundial da Saúde (OMS).
        </p>
        <p>
          Nenhum conteúdo substitui a consulta ou a prescrição de um médico ou profissional de saúde habilitado.
        </p>
      </section>

      <!-- Equipe e Instituições -->
      <section class="sobre-section">
        <h2>Equipe & Realização</h2>
        <p>
          O projeto é mantido por uma equipe multidisciplinar voluntária composta por profissionais e pesquisadores
          das áreas de Enfermagem, Medicina, Nutrição, Psicologia, Comunicação Social e Tecnologia da Informação.
        </p>
        <div class="cta-contato-box">
          <h3>Quer colaborar ou enviar uma sugestão?</h3>
          <p>Estamos abertos a contribuições da comunidade acadêmica, de saúde e de pacientes.</p>
          <BaseButton to="/contato" variant="primary" size="md">
            Entrar em Contato com a Equipe
          </BaseButton>
        </div>
      </section>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-sobre {
  padding: var(--space-12) 0 var(--space-16);
  background-color: var(--color-background);
}

.sobre-section {
  margin-bottom: var(--space-10);
}

.sobre-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 2px solid var(--color-primary-light);
}

.sobre-section p {
  font-size: 1.075rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.pilares-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.pilares-grid h3 {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.cta-contato-box {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  margin-top: var(--space-8);
  text-align: center;
}

.cta-contato-box h3 {
  font-size: 1.35rem;
  margin-bottom: var(--space-2);
}

.cta-contato-box p {
  margin-bottom: var(--space-6);
}
</style>
