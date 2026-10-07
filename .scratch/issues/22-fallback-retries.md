# 22 — Fallback e retries limitados

Status: needs-triage
Milestone: M3
Blocked by: 21

## Objetivo
Continuar quando uma falha elegível permitir contingência.

## Escopo
Taxonomia de erros, limites, estado preservado, reavaliação de orçamento e eventos de fallback.

## Fora de escopo
Repetir Task inteira ou reaplicar operações já concluídas.

## Dependências
21.

## Critérios de aceite
- [ ] Fallback segue configuração e apenas erros elegíveis.
- [ ] Ferramentas concluídas não são repetidas.
- [ ] Falhas não elegíveis encerram com motivo explícito.
- [ ] Saldo é reavaliado antes de cada chamada e tentativas são limitadas.

## Testes esperados
TDD de sequência de falhas, esgotamento de providers, orçamento e prevenção de repetição.

## Riscos relevantes
Duplicação de efeitos e custos.

## Comments