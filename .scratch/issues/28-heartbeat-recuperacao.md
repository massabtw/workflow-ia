# 28 — Heartbeat e recuperação de jobs expirados

Status: needs-triage
Milestone: M5
Blocked by: 27

## Objetivo
Impedir execução indefinidamente ativa após interrupção.

## Escopo
Heartbeat, expiração, política limitada de recuperação/retry e proteção de tentativas obsoletas.

## Fora de escopo
Limpeza completa de recursos órfãos.

## Dependências
27.

## Critérios de aceite
- [ ] Job expirado é recuperado ou encerrado por política explícita.
- [ ] Tentativa antiga não publica resultado.
- [ ] Retries de infraestrutura não consomem ciclos de auto-correção.

## Testes esperados
Relógio controlado, crash simulado, fencing e recuperação concorrente.

## Riscos relevantes
Falsa expiração e execução duplicada.

## Comments