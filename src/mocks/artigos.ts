import type { Artigo } from '@/types/artigo'

export const artigosMock: Artigo[] = [
  {
    id: 'art-1',
    slug: 'entendendo-o-diabetes',
    titulo: 'Entendendo o Diabetes: Conceitos Fundamentais e Mitos Comuns',
    subtitulo: 'Um guia inicial e acolhedor para desmistificar o diagnóstico e aprender os primeiros passos.',
    resumo: 'O diabetes mellitus é uma condição crônica caracterizada pela elevação dos níveis de glicose no sangue. Compreender suas causas e tipos é o primeiro passo para o autocuidado.',
    conteudo: `## O que é o Diabetes?

O diabetes ocorre quando o corpo não produz quantidade suficiente de insulina ou não consegue utilizar de forma eficaz a insulina que produz. A insulina é um hormônio vital produzido pelo pâncreas, responsável por permitir que a glicose dos alimentos entre nas células para ser utilizada como energia.

### Os Principais Tipos

1. **Diabetes Tipo 1**: Uma condição autoimune onde o sistema imunológico ataca as células produtoras de insulina no pâncreas. É mais comum ser diagnosticado na infância ou adolescência.
2. **Diabetes Tipo 2**: Representa cerca de 90% dos casos. Ocorre quando o corpo desenvolve resistência à ação da insulina ou o pâncreas não produz insulina suficiente.
3. **Diabetes Gestacional**: Surge durante a gravidez e exige acompanhamento médico rigoroso para a saúde da mãe e do bebê.

### Mitos e Verdades

- **"Comer muito doce sempre causa diabetes?"** Não necessariamente. O diabetes tipo 1 é autoimune, e o tipo 2 envolve predisposição genética aliada ao estilo de vida e fatores metabólicos.
- **"Pessoas com diabetes nunca mais podem comer carboidratos?"** Falso. O segredo está na qualidade, equilíbrio e planejamento alimentar individualizado.`,
    imagemCapa: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    categoriaId: '1',
    autor: 'Equipe Editorial Diabetes Sem Barreiras',
    publicadoEm: '2026-03-15T10:00:00.000Z',
    atualizadoEm: '2026-03-20T14:30:00.000Z',
    tempoLeituraMinutos: 6,
    tags: ['Educação em Diabetes', 'Glicemia', 'Saúde Pública', 'Iniciantes'],
    referencias: [
      {
        id: 'ref-1',
        titulo: 'Diretrizes da Sociedade Brasileira de Diabetes (2025/2026)',
        fonte: 'Sociedade Brasileira de Diabetes (SBD)',
        url: 'https://diretriz.diabetes.org.br',
        dataAcesso: '2026-03-10'
      },
      {
        id: 'ref-2',
        titulo: 'Global report on diabetes',
        fonte: 'Organização Mundial da Saúde (OMS)',
        url: 'https://who.int',
        dataAcesso: '2026-03-10'
      }
    ],
    status: 'publicado',
    destaque: true,
    versaoLinguagemSimples: `O diabetes acontece quando o açúcar no sangue fica alto demais.
O corpo precisa de insulina para transformar o açúcar em energia.
Quando falta insulina ou ela não funciona bem, o açúcar sobe.
Com acompanhamento médico, alimentação equilibrada e atividade física, é possível viver com muita saúde e qualidade de vida.`,
    versaoAcessivel: 'Texto estruturado com parágrafos objetivos, descrições detalhadas e suporte a leitura assistiva.'
  },
  {
    id: 'art-2',
    slug: 'alimentacao-saudavel-e-diabetes',
    titulo: 'Alimentação Saudável e Diabetes: O Prato Equilibrado',
    subtitulo: 'Como construir refeições nutritivas, saborosas e seguras para a sua glicemia no dia a dia.',
    resumo: 'Aprenda o método do prato dividido e como combinar fibras, proteínas e carboidratos complexos para manter a glicemia estável.',
    conteudo: `## Como Montar seu Prato

Uma estratégia simples e visual para as refeições principais é o método do prato de 4 partes:

- **Metade do prato (50%)**: Vegetais crus e cozidos (folhas verdes, tomate, cenoura, brócolis).
- **Um quarto do prato (25%)**: Proteínas magras (frango, peixe, ovos, tofu ou leguminosas).
- **Um quarto do prato (25%)**: Carboidratos ricos em fibras (arroz integral, batata-doce, feijão ou lentilha).

### A Importância das Fibras

As fibras solúveis retardam a absorção dos carboidratos, evitando picos glicêmicos após as refeições. Consuma verduras, frutas com casca e cereais integrais.`,
    imagemCapa: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    categoriaId: '2',
    autor: 'Dra. Camila Silveira (Nutricionista)',
    publicadoEm: '2026-03-18T14:00:00.000Z',
    tempoLeituraMinutos: 5,
    tags: ['Nutrição', 'Receitas', 'Fibras', 'Contagem de Carboidratos'],
    referencias: [
      {
        id: 'ref-3',
        titulo: 'Guia Alimentar para a População Brasileira',
        fonte: 'Ministério da Saúde do Brasil',
        url: 'https://saude.gov.br',
        dataAcesso: '2026-03-12'
      }
    ],
    status: 'publicado',
    destaque: true,
    versaoLinguagemSimples: `Divida seu prato assim: metade com saladas e legumes, um quarto com carne ou ovos, e um quarto com arroz ou feijão.
Beba bastante água e evite refrigerantes e sucos industrializados.`
  },
  {
    id: 'art-3',
    slug: 'atividade-fisica-e-controle-glicemico',
    titulo: 'Atividade Física e Controle Glicêmico: Movimento que Transforma',
    subtitulo: 'Entenda os benefícios do exercício e como praticar com segurança e monitoramento.',
    resumo: 'O exercício físico atua como um facilitador natural da entrada de glicose nas células musculares, melhorando a sensibilidade à insulina.',
    conteudo: `## Por que se exercitar?

Durante o movimento muscular, o organismo capta glicose mesmo sem a presença de grandes quantidades de insulina. Isso ajuda a baixar a glicemia e protege o coração.

### Cuidados Importantes
1. Meça a glicemia antes de começar o treino.
2. Tenha sempre consigo uma fonte de carboidrato de rápida absorção (ex: sachê de mel ou balas mastigáveis) para prevenir hipoglicemias.
3. Mantenha boa hidratação antes, durante e após o treino.`,
    imagemCapa: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    categoriaId: '3',
    autor: 'Prof. Lucas Mendes (Educador Físico)',
    publicadoEm: '2026-03-21T09:30:00.000Z',
    tempoLeituraMinutos: 4,
    tags: ['Exercício', 'Sensibilidade à Insulina', 'Prevenção'],
    referencias: [
      {
        id: 'ref-4',
        titulo: 'Standards of Care in Diabetes',
        fonte: 'American Diabetes Association (ADA)',
        url: 'https://diabetes.org',
        dataAcesso: '2026-03-15'
      }
    ],
    status: 'publicado',
    destaque: false,
    versaoLinguagemSimples: `Caminhar, pedalar ou dançar ajuda o corpo a gastar o açúcar do sangue.
Antes de treinar, confira a glicemia e leve sempre uma balinha caso ela caia demais.`
  },
  {
    id: 'art-4',
    slug: 'saude-mental-e-o-impacto-do-diagnostico',
    titulo: 'Saúde Mental: Cuidando das Emoções no Manejo Contínuo',
    subtitulo: 'Como lidar com o "diabetes distress" e cultivar uma rede de apoio afetuosa.',
    resumo: 'O cuidado com o diabetes é diário e ininterrupto. Reconhecer o cansaço mental e buscar acolhimento psicológico é parte indispensável do tratamento.',
    conteudo: `## O Que é o Sofrimento do Diabetes (Diabetes Distress)?

Diferente da depressão clínica, o sofrimento do diabetes refere-se ao estresse, frustração e sobrecarga causados pelas exigências constantes do autocuidado (contagem, picadas, medos de hipoglicemia).

### Dicas de Autocuidado Emocional
- Compartilhe sentimentos com familiares, amigos ou grupos de apoio.
- Lembre-se: os números do glicosímetro são informações para tomada de decisão, não notas morais sobre você.
- Busque apoio profissional quando sentir que a carga está difícil de sustentar.`,
    imagemCapa: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    categoriaId: '4',
    autor: 'Dra. Renata Albuquerque (Psicóloga)',
    publicadoEm: '2026-03-22T11:00:00.000Z',
    tempoLeituraMinutos: 5,
    tags: ['Saúde Mental', 'Apoio Psicológico', 'Autocuidado'],
    referencias: [
      {
        id: 'ref-5',
        titulo: 'Mental Health in Chronic Conditions',
        fonte: 'International Diabetes Federation (IDF)',
        url: 'https://idf.org',
        dataAcesso: '2026-03-15'
      }
    ],
    status: 'publicado',
    destaque: false,
    versaoLinguagemSimples: `Cuidar do diabetes todos os dias cansa. É normal sentir medo ou desânimo às vezes.
Converse com quem você confia e lembre-se: o resultado do teste não define quem você é.`
  }
]
