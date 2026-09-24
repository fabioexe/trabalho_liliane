<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useArtigosStore } from '@/stores/artigos'
import type { Artigo, StatusArtigo } from '@/types/artigo'
import { gerarSlug } from '@/utils/slug'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const route = useRoute()
const router = useRouter()
const store = useArtigosStore()
const { categorias } = storeToRefs(store)

const modoEdicao = ref(false)
const salvando = ref(false)
const slugManual = ref(false)

const form = reactive<{
  id?: string
  titulo: string
  subtitulo: string
  slug: string
  resumo: string
  conteudo: string
  imagemCapa: string
  categoriaId: string
  autor: string
  tempoLeituraMinutos: number
  tagsTexto: string
  status: StatusArtigo
  destaque: boolean
  versaoLinguagemSimples: string
}>({
  titulo: '',
  subtitulo: '',
  slug: '',
  resumo: '',
  conteudo: '',
  imagemCapa: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
  categoriaId: '1',
  autor: 'Redação Diabetes Sem Barreiras',
  tempoLeituraMinutos: 5,
  tagsTexto: '',
  status: 'publicado',
  destaque: false,
  versaoLinguagemSimples: '',
})

// Auto-gerar slug enquanto usuário digita título (a menos que altere manualmente)
watch(
  () => form.titulo,
  (novoTitulo) => {
    if (!slugManual.value && !modoEdicao.value) {
      form.slug = gerarSlug(novoTitulo)
    }
  },
)

onMounted(async () => {
  await store.carregarCategorias()

  if (route.params.id) {
    modoEdicao.value = true
    slugManual.value = true
    const art = await store.carregarArtigoPorId(String(route.params.id))
    if (art) {
      form.id = art.id
      form.titulo = art.titulo
      form.subtitulo = art.subtitulo || ''
      form.slug = art.slug
      form.resumo = art.resumo
      form.conteudo = art.conteudo
      form.imagemCapa = art.imagemCapa
      form.categoriaId = art.categoriaId
      form.autor = art.autor
      form.tempoLeituraMinutos = art.tempoLeituraMinutos
      form.tagsTexto = art.tags ? art.tags.join(', ') : ''
      form.status = art.status
      form.destaque = art.destaque
      form.versaoLinguagemSimples = art.versaoLinguagemSimples || ''
    }
  }
})

async function salvar() {
  if (!form.titulo.trim()) {
    alert('O título da matéria é obrigatório.')
    return
  }

  salvando.value = true
  try {
    const dadosParaSalvar: Partial<Artigo> & { titulo: string } = {
      id: form.id,
      titulo: form.titulo,
      subtitulo: form.subtitulo,
      slug: form.slug || gerarSlug(form.titulo),
      resumo: form.resumo,
      conteudo: form.conteudo,
      imagemCapa: form.imagemCapa,
      categoriaId: form.categoriaId,
      autor: form.autor,
      tempoLeituraMinutos: Number(form.tempoLeituraMinutos),
      tags: form.tagsTexto
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      status: form.status,
      destaque: form.destaque,
      versaoLinguagemSimples: form.versaoLinguagemSimples,
    }

    await store.salvarArtigo(dadosParaSalvar)
    router.push('/admin/materias')
  } catch (e) {
    alert('Erro ao salvar matéria: ' + (e instanceof Error ? e.message : ''))
  } finally {
    salvando.value = false
  }
}
</script>

<template>
  <div class="pagina-admin-artigo-form">
    <SectionHeading
      :title="modoEdicao ? 'Editar Matéria' : 'Criar Nova Matéria'"
      subtitle="Preencha os campos editoriais, metadados e recursos de acessibilidade da matéria."
      eyebrow="Editor de Conteúdo"
    />

    <form class="editor-form" @submit.prevent="salvar">
      <!-- Linha 1: Título e Slug -->
      <div class="form-row">
        <div class="form-group flex-2">
          <label for="titulo" class="form-label">Título da Matéria *</label>
          <input id="titulo" v-model="form.titulo" type="text" required class="form-input" />
        </div>

        <div class="form-group flex-1">
          <label for="slug" class="form-label">Slug (URL amigável)</label>
          <input
            id="slug"
            v-model="form.slug"
            type="text"
            required
            class="form-input"
            @input="slugManual = true"
          />
        </div>
      </div>

      <!-- Linha 2: Subtítulo -->
      <div class="form-group">
        <label for="subtitulo" class="form-label">Subtítulo explicativo</label>
        <input id="subtitulo" v-model="form.subtitulo" type="text" class="form-input" />
      </div>

      <!-- Linha 3: Categoria, Autor, Tempo -->
      <div class="form-row">
        <div class="form-group">
          <label for="categoria" class="form-label">Categoria *</label>
          <select id="categoria" v-model="form.categoriaId" class="form-select">
            <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
              {{ cat.titulo }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="autor" class="form-label">Autor / Especialista</label>
          <input id="autor" v-model="form.autor" type="text" class="form-input" />
        </div>

        <div class="form-group">
          <label for="tempo" class="form-label">Tempo de Leitura (minutos)</label>
          <input id="tempo" v-model="form.tempoLeituraMinutos" type="number" min="1" class="form-input" />
        </div>
      </div>

      <!-- Linha 4: Resumo -->
      <div class="form-group">
        <label for="resumo" class="form-label">Resumo da Matéria (Lead / SEO) *</label>
        <textarea id="resumo" v-model="form.resumo" rows="3" required class="form-textarea" />
      </div>

      <!-- Linha 5: Conteúdo Principal -->
      <div class="form-group">
        <label for="conteudo" class="form-label">Conteúdo Principal (Suporta Markdown básico) *</label>
        <textarea id="conteudo" v-model="form.conteudo" rows="10" required class="form-textarea" />
      </div>

      <!-- Linha 6: Versão em Linguagem Simples (Acessibilidade) -->
      <div class="form-group accessibility-group">
        <label for="linguagem-simples" class="form-label">
          Versão em Linguagem Simples (Recurso de Acessibilidade)
        </label>
        <p class="field-hint">
          Escreva uma síntese com palavras cotidianas, frases curtas e diretas para quem tem dificuldades de leitura.
        </p>
        <textarea
          id="linguagem-simples"
          v-model="form.versaoLinguagemSimples"
          rows="5"
          class="form-textarea"
          placeholder="Exemplo: O diabetes acontece quando o açúcar no sangue sobe muito..."
        />
      </div>

      <!-- Linha 7: Imagem de Capa e Tags -->
      <div class="form-row">
        <div class="form-group flex-2">
          <label for="imagem" class="form-label">URL da Imagem de Capa</label>
          <input id="imagem" v-model="form.imagemCapa" type="url" class="form-input" />
        </div>

        <div class="form-group flex-1">
          <label for="tags" class="form-label">Tags (separadas por vírgula)</label>
          <input id="tags" v-model="form.tagsTexto" type="text" placeholder="Ex: Nutrição, Glicemia" class="form-input" />
        </div>
      </div>

      <!-- Linha 8: Status e Destaque -->
      <div class="form-row items-center">
        <div class="form-group">
          <label for="status" class="form-label">Status da Publicação</label>
          <select id="status" v-model="form.status" class="form-select">
            <option value="publicado">Publicado</option>
            <option value="rascunho">Rascunho</option>
          </select>
        </div>

        <div class="checkbox-group">
          <label class="checkbox-label">
            <input v-model="form.destaque" type="checkbox" />
            <span>Exibir na seção de matérias em destaque na Home</span>
          </label>
        </div>
      </div>

      <!-- Botões de Ação -->
      <div class="form-actions">
        <BaseButton type="submit" variant="primary" size="lg" :disabled="salvando">
          {{ salvando ? 'Salvando...' : modoEdicao ? 'Atualizar Matéria' : 'Publicar Matéria' }}
        </BaseButton>
        <BaseButton to="/admin/materias" variant="ghost" size="lg">
          Cancelar
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
.pagina-admin-artigo-form {
  display: flex;
  flex-direction: column;
}

.editor-form {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-row {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.form-label {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.field-hint {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
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
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  background-color: var(--color-surface);
  outline: none;
}

.accessibility-group {
  background-color: var(--color-secondary-light);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-secondary);
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-top: var(--space-6);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  cursor: pointer;
}

.form-actions {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
}
</style>
