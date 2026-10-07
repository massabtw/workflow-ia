# 26 — Reprocessamento de memória pending

Status: needs-triage
Milestone: M4
Blocked by: 25

## Objetivo
Concluir extrações pendentes sem alterar a entrega.

## Escopo
Ação explícita API/UI, orçamento adicional informado/configurado, deduplicação e eventos.

## Fora de escopo
Scheduler automático e consumo silencioso além do limite original.

## Dependências
25.

## Critérios de aceite
- [ ] Reprocessamento exige orçamento disponível e explícito.
- [ ] Sucesso anterior permanece intacto.
- [ ] Repetição não duplica memória.
- [ ] Falha e consumo do reprocessamento são rastreáveis.

## Testes esperados
Saldo, repetição, falha e isolamento por projeto.

## Riscos relevantes
Ambiguidade de orçamento e duplicação.

## Comments