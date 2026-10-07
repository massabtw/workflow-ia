# 25 — Ranking híbrido e proveniência

Status: needs-triage
Milestone: M4
Blocked by: 24

## Objetivo
Selecionar contexto relevante dentro do orçamento.

## Escopo
Combinação dos resultados léxicos/vetoriais, deduplicação e origem apresentada na Task.

## Fora de escopo
Busca externa e grafo de conhecimento.

## Dependências
24.

## Critérios de aceite
- [ ] Ambos os métodos contribuem para recuperação no corpus de referência.
- [ ] Projeto, versão e limite de tokens são respeitados.
- [ ] Trechos duplicados não desperdiçam contexto.

## Testes esperados
Corpus controlado, isolamento, ranking, deduplicação e truncamento seguro.

## Riscos relevantes
Ranking ruim e exclusão de contexto necessário.

## Comments