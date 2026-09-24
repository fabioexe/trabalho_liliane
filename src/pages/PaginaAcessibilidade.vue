<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AccessibilityToolbar from '@/components/acessibilidade/AccessibilityToolbar.vue'
</script>

<template>
  <div class="pagina-acessibilidade">
    <BaseContainer :narrow="true">
      <SectionHeading
        title="Recursos de Acessibilidade do Portal"
        subtitle="Conheça todas as ferramentas disponíveis para uma navegação confortável, autônoma e inclusiva."
        eyebrow="Diretrizes & Recursos"
      />

      <!-- Barra Interativa de Teste Rápido -->
      <div class="ferramentas-preview-box">
        <h3>Experimente os controles de acessibilidade:</h3>
        <p>Ajuste o tamanho do texto, ative o alto contraste ou desligue animações agora mesmo:</p>
        <div class="toolbar-wrapper">
          <AccessibilityToolbar />
        </div>
      </div>

      <!-- Guia dos Recursos -->
      <section class="recurso-detalhe">
        <h2>1. Atalhos de Teclado e Foco Visível</h2>
        <p>
          Este portal foi desenvolvido para que você possa navegar completamente sem o uso de mouse.
        </p>
        <ul>
          <li><strong>Tecla Tab:</strong> Avança para o próximo elemento interativo (links, botões, campos).</li>
          <li><strong>Shift + Tab:</strong> Retorna ao elemento anterior.</li>
          <li><strong>Enter ou Espaço:</strong> Aciona o botão ou link em foco.</li>
          <li><strong>Link de Pulo (Skip Link):</strong> Pressione Tab logo ao carregar a página para pular o cabeçalho e ir direto ao conteúdo.</li>
        </ul>
      </section>

      <section class="recurso-detalhe">
        <h2>2. Ajuste do Tamanho da Fonte (A- / A / A+)</h2>
        <p>
          No canto superior do portal você encontra os botões de ajuste de tamanho de letra.
          O tamanho padrão pode ser ampliado em até 150%, redimensionando harmonicamente
          textos, títulos e espaçamentos sem quebrar o layout.
        </p>
      </section>

      <section class="recurso-detalhe">
        <h2>3. Modo de Alto Contraste</h2>
        <p>
          O botão <strong>Contraste</strong> altera o esquema de cores para fundo preto puro com texto e elementos em amarelo e branco.
          Essa configuração atende a usuários com baixa visão, fotossensibilidade ou dificuldade de percepção cromática.
        </p>
      </section>

      <section class="recurso-detalhe">
        <h2>4. Redução de Movimento (Prefers Reduced Motion)</h2>
        <p>
          O sistema detecta automaticamente se você tem a preferência de redução de movimento ativada no seu sistema operacional.
          Além disso, você pode desativar manualmente transições e animações com o botão <strong>Movimento</strong>.
        </p>
      </section>

      <section class="recurso-detalhe">
        <h2>5. Linguagem Simples</h2>
        <p>
          Nas matérias da revista digital, disponibilizamos a opção <em>"Ativar Linguagem Simples"</em>.
          Essa versão resume e simplifica termos clínicos para garantir a compreensão de pessoas com
          dificuldades de leitura ou em processo de letramento em saúde.
        </p>
      </section>

      <section class="recurso-detalhe">
        <h2>6. Compatibilidade com Leitores de Tela</h2>
        <p>
          Todo o código HTML segue a semântica adequada (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,
          <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>), com rótulos ARIA onde necessário
          e textos alternativos em todas as imagens informativas.
        </p>
      </section>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-acessibilidade {
  padding: var(--space-12) 0 var(--space-16);
  background-color: var(--color-background);
}

.ferramentas-preview-box {
  background-color: var(--color-surface);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-10);
  text-align: center;
}

.ferramentas-preview-box h3 {
  font-size: 1.25rem;
  margin-bottom: var(--space-2);
}

.ferramentas-preview-box p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.toolbar-wrapper {
  display: inline-flex;
  justify-content: center;
}

.recurso-detalhe {
  margin-bottom: var(--space-10);
}

.recurso-detalhe h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-3);
}

.recurso-detalhe p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.recurso-detalhe ul {
  list-style: disc;
  padding-left: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  color: var(--color-text-secondary);
  font-size: 1.02rem;
}

html.high-contrast .ferramentas-preview-box {
  border-color: #ffff00;
}

html.high-contrast .recurso-detalhe h2 {
  color: #ffff00;
}
</style>
