# 10 — Cancelamento e cleanup

Status: needs-triage
Milestone: M1
Blocked by: 09

## Objetivo
Interromper trabalho com estado consistente e sem recursos ativos.

## Escopo
- Cancelamento API/UI de Task enfileirada e ativa.
- Sinalização ao worker, interrupção do sandbox e evidências disponíveis.
- Precedência entre conclusão/cancelamento e cleanup idempotente.

## Fora de escopo
Recuperação de órfãos após crash, prevista no M5.

## Dependências
09.

## Critérios de aceite
- [ ] Cancelamento anterior à aquisição impede execução.
- [ ] Cancelamento ativo encerra ferramentas/container.
- [ ] Repetição é idempotente.
- [ ] Task terminal não é reclassificada arbitrariamente.
- [ ] Corridas têm resultado definido e testado.

## Testes esperados
Fila, execução, cancelamento repetido e corrida com conclusão.

## Riscos relevantes
Processos sobreviventes e perda de logs na interrupção.

## Comments