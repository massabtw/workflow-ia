# 17 — Resultado real e destaque de alterações em testes

Status: needs-triage
Milestone: M2
Blocked by: 16

## Objetivo
Tornar a entrega real auditável.

## Escopo
- Diff, resumo, tokens, USD, latências e evidências.
- Comparação dos testes com versão-base e destaque na UI.
- Distinção entre novos testes e alterações/remoções de testes preexistentes.

## Fora de escopo
Aprovação humana obrigatória e merge automático.

## Dependências
16.

## Critérios de aceite
- [ ] Novos testes e testes preexistentes modificados são distinguíveis.
- [ ] Comandos/gates continuam definidos pelo projeto, não pelo agente.
- [ ] Sucesso e falha preservam evidências disponíveis.
- [ ] Custo estimado/reportado e uso desconhecido são apresentados sem ambiguidade.

## Testes esperados
Criação, edição, remoção e renomeação de testes; resultado parcial e métricas.

## Riscos relevantes
Falso sucesso por enfraquecimento de testes e resumo sem evidência.

## Comments