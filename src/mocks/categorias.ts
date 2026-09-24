import type { Categoria } from '@/types/categoria'

export const categoriasMock: Categoria[] = [
  {
    id: '1',
    slug: 'diabetes',
    titulo: 'Entendendo o Diabetes',
    descricao: 'O que é, tipos, causas e fatores de risco.',
    imagem: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    icone: 'book',
  },
  {
    id: '2',
    slug: 'alimentacao',
    titulo: 'Alimentação Saudável',
    descricao: 'Dicas nutricionais para uma vida mais saudável.',
    imagem: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    icone: 'apple',
  },
  {
    id: '3',
    slug: 'atividade-fisica',
    titulo: 'Atividade Física',
    descricao: 'Exercícios e movimentação para o controle da glicemia.',
    imagem: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    icone: 'activity',
  },
  {
    id: '4',
    slug: 'saude-mental',
    titulo: 'Saúde Mental',
    descricao: 'Cuidar da mente também é cuidar do diabetes.',
    imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    icone: 'heart',
  },
  {
    id: '5',
    slug: 'tratamentos-cuidados',
    titulo: 'Tratamentos e Cuidados',
    descricao: 'Medicamentos, insulina e autocuidado no dia a dia.',
    imagem: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    icone: 'shield',
  },
  {
    id: '6',
    slug: 'inclusao-acessibilidade',
    titulo: 'Inclusão e Acessibilidade',
    descricao: 'Informação sem barreiras para todos.',
    imagem: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    icone: 'users',
  },
]
