<script setup lang="ts">
import { ref, reactive } from 'vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

interface FormState {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

interface FormErrors {
  nome?: string
  email?: string
  assunto?: string
  mensagem?: string
}

const form = reactive<FormState>({
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
})

const erros = reactive<FormErrors>({})
const enviadoComSucesso = ref(false)
const enviando = ref(false)

function validar(): boolean {
  erros.nome = undefined
  erros.email = undefined
  erros.assunto = undefined
  erros.mensagem = undefined

  let valido = true

  if (!form.nome.trim()) {
    erros.nome = 'Por favor, informe seu nome completo.'
    valido = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    erros.email = 'Por favor, informe seu endereço de e-mail.'
    valido = false
  } else if (!emailRegex.test(form.email)) {
    erros.email = 'Formato de e-mail inválido. Exemplo: seu.nome@dominio.com'
    valido = false
  }

  if (!form.assunto.trim()) {
    erros.assunto = 'Selecione ou informe o assunto da mensagem.'
    valido = false
  }

  if (!form.mensagem.trim()) {
    erros.mensagem = 'Por favor, digite a sua mensagem.'
    valido = false
  } else if (form.mensagem.trim().length < 15) {
    erros.mensagem = 'A mensagem deve conter pelo menos 15 caracteres.'
    valido = false
  }

  return valido
}

async function enviarFormulario() {
  if (!validar()) return

  enviando.value = true
  // Simula requisição assíncrona para backend
  await new Promise((resolve) => setTimeout(resolve, 600))
  enviando.value = false
  enviadoComSucesso.value = true

  // Reseta formulário
  form.nome = ''
  form.email = ''
  form.assunto = ''
  form.mensagem = ''
}
</script>

<template>
  <div class="pagina-contato">
    <BaseContainer :narrow="true">
      <SectionHeading
        title="Fale Conosco"
        subtitle="Dúvidas, sugestões de pauta, colaborações científicas ou dúvidas sobre acessibilidade: envie sua mensagem."
        eyebrow="Canal Aberto"
      />

      <!-- Alerta de Sucesso -->
      <div
        v-if="enviadoComSucesso"
        class="alerta-sucesso"
        role="status"
        aria-live="polite"
      >
        <div class="sucesso-icon" aria-hidden="true">✓</div>
        <div>
          <h3>Mensagem enviada com sucesso!</h3>
          <p>Agradecemos seu contato. Nossa equipe responderá no seu e-mail o mais breve possível.</p>
        </div>
        <button
          type="button"
          class="fechar-sucesso-btn"
          aria-label="Fechar mensagem de sucesso"
          @click="enviadoComSucesso = false"
        >
          ×
        </button>
      </div>

      <!-- Formulário de Contato -->
      <form class="formulario-contato" novalidate @submit.prevent="enviarFormulario">
        <!-- Campo Nome -->
        <div class="form-group" :class="{ 'has-error': erros.nome }">
          <label for="campo-nome" class="form-label">
            Nome Completo <span class="required" aria-hidden="true">*</span>
          </label>
          <input
            id="campo-nome"
            v-model="form.nome"
            type="text"
            required
            :aria-invalid="erros.nome ? 'true' : 'false'"
            :aria-describedby="erros.nome ? 'erro-nome' : undefined"
            class="form-input"
            placeholder="Ex: Maria da Silva"
          />
          <p v-if="erros.nome" id="erro-nome" class="form-error" role="alert">
            {{ erros.nome }}
          </p>
        </div>

        <!-- Campo E-mail -->
        <div class="form-group" :class="{ 'has-error': erros.email }">
          <label for="campo-email" class="form-label">
            Endereço de E-mail <span class="required" aria-hidden="true">*</span>
          </label>
          <input
            id="campo-email"
            v-model="form.email"
            type="email"
            required
            :aria-invalid="erros.email ? 'true' : 'false'"
            :aria-describedby="erros.email ? 'erro-email' : undefined"
            class="form-input"
            placeholder="Ex: maria.silva@exemplo.com"
          />
          <p v-if="erros.email" id="erro-email" class="form-error" role="alert">
            {{ erros.email }}
          </p>
        </div>

        <!-- Campo Assunto -->
        <div class="form-group" :class="{ 'has-error': erros.assunto }">
          <label for="campo-assunto" class="form-label">
            Assunto <span class="required" aria-hidden="true">*</span>
          </label>
          <select
            id="campo-assunto"
            v-model="form.assunto"
            required
            :aria-invalid="erros.assunto ? 'true' : 'false'"
            :aria-describedby="erros.assunto ? 'erro-assunto' : undefined"
            class="form-select"
          >
            <option value="" disabled>Selecione um assunto...</option>
            <option value="sugestao-pauta">Sugestão de Matéria / Pauta</option>
            <option value="duvida-acessibilidade">Dúvida ou Sugestão de Acessibilidade</option>
            <option value="colaboracao">Colaboração de Especialista / Voluntariado</option>
            <option value="outro">Outro assunto</option>
          </select>
          <p v-if="erros.assunto" id="erro-assunto" class="form-error" role="alert">
            {{ erros.assunto }}
          </p>
        </div>

        <!-- Campo Mensagem -->
        <div class="form-group" :class="{ 'has-error': erros.mensagem }">
          <label for="campo-mensagem" class="form-label">
            Mensagem <span class="required" aria-hidden="true">*</span>
          </label>
          <textarea
            id="campo-mensagem"
            v-model="form.mensagem"
            rows="6"
            required
            :aria-invalid="erros.mensagem ? 'true' : 'false'"
            :aria-describedby="erros.mensagem ? 'erro-mensagem' : undefined"
            class="form-textarea"
            placeholder="Escreva sua mensagem aqui com clareza..."
          />
          <p v-if="erros.mensagem" id="erro-mensagem" class="form-error" role="alert">
            {{ erros.mensagem }}
          </p>
        </div>

        <!-- Botão de Envio -->
        <div class="form-actions">
          <BaseButton
            type="submit"
            variant="primary"
            size="lg"
            :disabled="enviando"
          >
            {{ enviando ? 'Enviando...' : 'Enviar Mensagem' }}
          </BaseButton>
        </div>
      </form>
    </BaseContainer>
  </div>
</template>

<style scoped>
.pagina-contato {
  padding: var(--space-12) 0 var(--space-16);
  background-color: var(--color-background);
}

.formulario-contato {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  box-shadow: var(--shadow-sm);
}

.form-group {
  margin-bottom: var(--space-6);
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.required {
  color: var(--color-danger);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  background-color: var(--color-surface-subtle);
  color: var(--color-text);
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  background-color: var(--color-surface);
  outline: none;
}

.has-error .form-input,
.has-error .form-select,
.has-error .form-textarea {
  border-color: var(--color-danger);
  background-color: #fff8f8;
}

.form-error {
  margin-top: var(--space-1);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-danger);
}

.alerta-sucesso {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background-color: var(--color-success-light);
  border: 2px solid var(--color-success);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  position: relative;
}

.sucesso-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-success);
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 800;
  flex-shrink: 0;
}

.alerta-sucesso h3 {
  font-size: 1.1rem;
  color: var(--color-success);
  margin-bottom: 2px;
}

.alerta-sucesso p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

.fechar-sucesso-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--color-text-muted);
}

.form-actions {
  margin-top: var(--space-8);
}
</style>
