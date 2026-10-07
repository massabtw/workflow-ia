# 30 — Idempotência de submissão e efeitos persistentes

Status: needs-triage
Milestone: M5
Blocked by: 29

## Objetivo
Tornar repetição de requisições e retries previsíveis.

## Escopo
Chave de idempotência e proteção de reservas, artefatos e memória contra duplicação.

## Fora de escopo
Promessa de execução exactly-once.

## Dependências
29; estender proteções básicas já introduzidas sem duplicar mecanismos.

## Critérios de aceite
- [ ] Mesma chave retorna a mesma Task.
- [ ] Payload incompatível com chave existente é rejeitado.
- [ ] Retry não duplica efeitos persistentes.
- [ ] Uso desconhecido não libera saldo inseguro.

## Testes esperados
Submissão concorrente, conflito de chave, retry e reconciliação interrompida.

## Riscos relevantes
Conflito de chaves e liberação prematura de orçamento.

## Comments