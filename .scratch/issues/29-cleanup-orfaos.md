# 29 — Cleanup de recursos órfãos

Status: needs-triage
Milestone: M5
Blocked by: 28

## Objetivo
Recuperar containers e workspaces abandonados.

## Escopo
Identificação por Task/tentativa, reconciliação e limpeza idempotente.

## Fora de escopo
Recursos de outros hosts.

## Dependências
28.

## Critérios de aceite
- [ ] Órfãos são removidos sem destruir recursos de tentativas válidas.
- [ ] Artefatos persistidos permanecem disponíveis.
- [ ] Cleanup repetido não falha nem afeta recursos alheios.

## Testes esperados
Container abandonado, workspace órfão, cleanup repetido e tentativa ativa.

## Riscos relevantes
Exclusão indevida e perda de evidências.

## Comments