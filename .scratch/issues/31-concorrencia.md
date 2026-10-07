# 31 — Baixa concorrência configurável

Status: needs-triage
Milestone: M5
Blocked by: 30

## Objetivo
Validar mais de uma Task sem compartilhar estado mutável.

## Escopo
Limites de workers, isolamento, reservas concorrentes e corridas de cancelamento.

## Fora de escopo
Processamento distribuído e autoscaling.

## Dependências
30.

## Critérios de aceite
- [ ] Capacidade configurada é respeitada.
- [ ] Workspaces e estados permanecem independentes.
- [ ] Cancelar uma Task não afeta outra.
- [ ] Reservas simultâneas não ultrapassam limite de uma Task.

## Testes esperados
Tasks simultâneas, cancelamento/conclusão e pressão de recursos locais.

## Riscos relevantes
Contenção, esgotamento local e vazamento de estado.

## Comments