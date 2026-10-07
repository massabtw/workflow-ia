# 16 — Auto-correção limitada por verificação

Status: needs-triage
Milestone: M2
Blocked by: 15

## Objetivo
Usar falhas de pytest/Ruff para corrigir a entrega.

## Escopo
- Traceback/logs relevantes para correção.
- Até três correções, com nova verificação após cada uma.
- Orçamento e cancelamento avaliados em cada ciclo.

## Fora de escopo
Retries de infraestrutura.

## Dependências
15.

## Critérios de aceite
- [ ] Há verificação inicial e no máximo três ciclos de correção.
- [ ] Sucesso encerra o ciclo imediatamente.
- [ ] Falha persistente e falta de saldo têm motivos distintos.
- [ ] Infraestrutura não é tratada automaticamente como código a corrigir.

## Testes esperados
TDD do contador, sucesso em diferentes ciclos, falha persistente, orçamento e cancelamento.

## Riscos relevantes
Off-by-one, consumo excessivo e logs descontrolados.

## Comments