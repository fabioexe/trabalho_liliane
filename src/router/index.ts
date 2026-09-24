import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    // Rotas Públicas
    {
      path: '/',
      name: 'inicio',
      component: () => import('@/pages/PaginaInicial.vue'),
      meta: { layout: 'publico', title: 'Diabetes Sem Barreiras | Início' },
    },
    {
      path: '/revista',
      name: 'revista',
      component: () => import('@/pages/PaginaRevista.vue'),
      meta: { layout: 'publico', title: 'Revista Digital | Diabetes Sem Barreiras' },
    },
    {
      path: '/revista/:slug',
      name: 'artigo',
      component: () => import('@/pages/PaginaArtigo.vue'),
      meta: { layout: 'publico', title: 'Matéria | Diabetes Sem Barreiras' },
    },
    {
      path: '/sobre-o-projeto',
      name: 'sobre-o-projeto',
      component: () => import('@/pages/PaginaSobreProjeto.vue'),
      meta: { layout: 'publico', title: 'Sobre o Projeto | Diabetes Sem Barreiras' },
    },
    {
      path: '/acessibilidade',
      name: 'acessibilidade',
      component: () => import('@/pages/PaginaAcessibilidade.vue'),
      meta: { layout: 'publico', title: 'Recursos de Acessibilidade | Diabetes Sem Barreiras' },
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/pages/PaginaVideos.vue'),
      meta: { layout: 'publico', title: 'Vídeos e Videoaulas | Diabetes Sem Barreiras' },
    },
    {
      path: '/recursos',
      name: 'recursos',
      component: () => import('@/pages/PaginaRecursos.vue'),
      meta: { layout: 'publico', title: 'Recursos Educativos | Diabetes Sem Barreiras' },
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/pages/PaginaContato.vue'),
      meta: { layout: 'publico', title: 'Fale Conosco | Diabetes Sem Barreiras' },
    },

    // Rotas Administrativas
    {
      path: '/admin',
      name: 'admin-painel',
      component: () => import('@/pages/admin/PaginaPainel.vue'),
      meta: { layout: 'admin', title: 'Painel Geral | DSB Admin' },
    },
    {
      path: '/admin/materias',
      name: 'admin-materias',
      component: () => import('@/pages/admin/PaginaArtigos.vue'),
      meta: { layout: 'admin', title: 'Gerenciar Matérias | DSB Admin' },
    },
    {
      path: '/admin/materias/nova',
      name: 'admin-materia-nova',
      component: () => import('@/pages/admin/PaginaArtigoForm.vue'),
      meta: { layout: 'admin', title: 'Nova Matéria | DSB Admin' },
    },
    {
      path: '/admin/materias/:id/editar',
      name: 'admin-materia-editar',
      component: () => import('@/pages/admin/PaginaArtigoForm.vue'),
      meta: { layout: 'admin', title: 'Editar Matéria | DSB Admin' },
    },

    // Redirecionamento de rotas inexistentes
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

// Atualização de título acessível em cada rota
router.afterEach((to) => {
  if (to.meta.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
})

export default router
