# 21 — Model Router híbrido e ordem configurável

Status: needs-triage
Milestone: M3
Blocked by: 20

## Objetivo
Classificar e selecionar modelos explicitamente.

## Escopo
Regras rápidas, classificador leve, capacidades, complexidade, orçamento e ordem configurável de providers/modelos. Registrar motivos e consumo de classificação.

## Fora de escopo
Fallback após falha e otimização estatística.

## Dependências
20.

## Critérios de aceite
- [ ] Mudança de ordem dispensa alteração de código.
- [ ] Tasks triviais usam regras rápidas e demais casos elegíveis usam classificador.
- [ ] Classificação inválida possui tratamento explícito.
- [ ] Classificação e seleção respeitam saldo e capacidades.

## Testes esperados
TDD de regras, prioridades, capacidades, saldo e resposta inválida do classificador.

## Riscos relevantes
Seleção incompatível e classificação mais cara que a Task.

## Design It Twice
Comparar interfaces de classificação e seleção final, mantendo essas operações distintas. Registrar escolha antes de implementar.

## Comments