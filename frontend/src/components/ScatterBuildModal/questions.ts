import Question from '../shared/Types/Question';

export type ScatterBuildQuestions = [Question[], Question[]];

const questions: ScatterBuildQuestions = [
  [
    {
      label: 'Escopo da mudança',
      description: '1 = GRUPO DE TRABALHO | 5 = EMPRESA',
    },
    {
      label: 'Número de empregados impactados',
      description: '1 = MENOS QUE 10 | 5 = MAIS QUE 1000',
    },
    {
      label: 'Variação em grupos que são impactados',
      description:
        '1 = GRUPOS IMPACTADOS DA MESMA FORMA | 5 = GRUPOS EXPERIMENTAM A MUDANÇA DE FORMA DIFERENTE',
    },
    {
      label: 'Tipo de mudança',
      description: '1 = ASPECTO ÚNICO, MUDANÇA SIMPLES | 5 = MUITOS ASPECTOS, MUDANÇA COMPLEXA',
    },
    {
      label: 'Grau de mudança de processo',
      description: '1 = SEM MUDANÇA | 5 = 100% DE MUDANÇA',
    },
    {
      label: 'Grau de mudança de tecnologia e sistema',
      description: '1 = SEM MUDANÇA | 5 = 100% DE MUDANÇA',
    },
    {
      label: 'Grau de mudança de função de trabalho',
      description: '1 = SEM MUDANÇA | 5 = 100% DE MUDANÇA',
    },
    {
      label: 'Grau de reestruturação organizacional',
      description: '1 = SEM MUDANÇA | 5 = 100% DE MUDANÇA',
    },
    {
      label: 'Quantidade de mudança global',
      description: '1 = MUDANÇA INCREMENTAL | 5 = MUDANÇA RADICAL',
    },
    {
      label: 'Impacto sobre a remuneração dos empregados',
      description:
        '1 = SEM IMPACTO NO SALÁRIO/BENEFÍCIOS | 5 = GRANDE IMPACTO NO SALÁRIO/BENEFÍCIOS',
    },
    {
      label: 'Redução nos níveis totais de pessoal',
      description: '1 = NENHUMA MUDANÇA ESPERADA | 5 = MUDANÇA SIGNIFICATIVA ESPERADA',
    },
    {
      label: 'Prazo para a mudança',
      description: '1 = MUITO CURTO(<MêS) OU MUITO LONGO(>ANO) | 5 = INICIATIVA DE 3 A 12 MESES',
    },
  ],
  [
    {
      label: 'Percepção da necessidade de mudança entre os empregados e gestores',
      description:
        '1 = NECESSIDADE DE MUDANÇA DE NEGÓCIO É VISÍVEL, EMPREGADOS ESTÃO INSATISFEITOS | 5 = EMPREGADOS NÃO VEEM MUDANÇA COMO NECESSÁRIA, EMPREGADOS ESTÃO SATISFEITOS',
    },
    {
      label: 'Impacto de mudanças passadas sobre os empregados',
      description:
        '1 = EMPREGADOS PERCBEM MUDANÇAS PASSADAS COMO POSITIVAS  | 5 = PERCEBEM MUDANÇAS PASSADAS COMO NEGATIVAS',
    },
    {
      label: 'Capacidade de mudança',
      description: '1 = MUITO POUCAS MUDANÇAS EM CURSO | 5 = TUDO ESTÁ MUDANDO',
    },
    {
      label: 'Mudanças passadas',
      description:
        '1 = MUDANÇAS FORAM BEM GERENCIADAS E COM SUCESSO | 5 = MUITOS PROJETOS FRACASSARAM E MUDANÇAS FORAM MAL GERENCIADAS',
    },
    {
      label: 'Visão e direção da organização compartilhadas',
      description:
        '1 = VISÃO UNIFICADA E AMPLAMENTE COMPARTILHADA  | 5 = MUITAS DIFERENTES DIREÇÕES E TROCAS DE PRIORIDADES ',
    },
    {
      label: 'Disponibilidade de recursos e capital',
      description:
        '1 = RECURSOS E CAPITAL ADEQUADOS ESTÃO DISPONÍVEIS  | 5 = RECURSOS E CAPITAL SÃO LIMITADOS',
    },
    {
      label: 'Cultura organizacional e resposta à mudança',
      description:
        '1 = ABERTA E RECEPTIVA A NOVAS IDEIAS E MUDANÇAS  | 5 = FECHADA E RESISTENTE A NOVAS IDEIAS E MUDANÇAS',
    },
    {
      label: 'Reforço organizacional',
      description:
        '1 = EMPREGADOS SÃO RECOMPENSADOS POR ASSUMIR RISCOS  | 5 = EMPREGADOS SÃO RECOMPENSADOS PELA CONSISTÊNCIA E PREVISIBILIDADE',
    },
    {
      label: 'Estilo de liderança e distribuição de poder',
      description: '1 = CENTRALIZADO | 5 = DISTRIBUÍDO ',
    },
    {
      label: 'Competência de mudança do executivo/gerência sênior',
      description:
        '1 = LÍDERES DE NEGÓCIOS DEMONSTRAM PATROCÍNIO EFICAZ  | 5 = LÍDERES DE NEGÓCIOS NÃO TÊM COMPETÊNCIA DE PATROCÍNIO',
    },
    {
      label: 'Competência de mudança da média gestão',
      description:
        '1 = GESTORES TÊM ALTA COMPETÊNCIA  | 5 = GESTORES NÃO TÊM COMPETÊNCIA PARA GERENCIAR MUDANÇAS',
    },
    {
      label: 'Competência de mudança dos empregados',
      description:
        '1 = EMPREGADOS TÊM ALTA COMPETÊNCIA | 5 = EMPREGADOS NÃO TÊM COMPETÊNCIA PARA GERENCIAR MUDANÇAS ',
    },
  ],
];

export default questions;
