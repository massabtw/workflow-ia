# 32 — Aceitação de recuperação operacional

Status: needs-triage
Milestone: M5
Blocked by: 31

## Objetivo
Demonstrar interrupção e retomada controladas.

## Escopo
Parar/reiniciar backend durante execução, validar estado, saldo, cleanup e revisar milestone.

## Fora de escopo
Alta disponibilidade.

## Dependências
31.

## Critérios de aceite
- [ ] Não restam jobs eternamente ativos.
- [ ] Retries de infraestrutura não contam como auto-correções.
- [ ] Tentativas obsoletas não publicam e recursos abandonados são tratados.
- [ ] Saldo permanece conservador quando cobrança externa é desconhecida.

## Testes esperados
PostgreSQL/Docker reais, reinício do processo e falhas injetadas.

## Riscos relevantes
Instabilidade temporal e cobrança externa incerta.

## Comments