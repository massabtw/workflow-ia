# 19 — Aceitação end-to-end do M2

Status: needs-triage
Milestone: M2
Blocked by: 12, 13, 14, 15, 16, 17, 18

## Objetivo
Comprovar a primeira Task real completa.

## Escopo
- Demonstração real e suíte controlada de sucesso, correção, falha, orçamento e memória.
- Fluxo de classificação simples, contexto/memória, seleção, execução, verificação e resultado no Dashboard.
- Revisão do milestone.

## Fora de escopo
Múltiplos providers e classificação híbrida completa.

## Dependências
12–18; credenciais para demonstração real.

## Critérios de aceite
- [ ] Task do Dashboard entrega código verificado, diff, resumo, logs e métricas.
- [ ] Memória é criada após sucesso e recuperável na Task seguinte.
- [ ] Memória pending não invalida sucesso.
- [ ] Falha persistente, orçamento e cancelamento encerram corretamente.

## Testes esperados
Ponta a ponta com substitutos controlados e smoke test real com orçamento explícito.

## Riscos relevantes
Variabilidade do modelo, custo e dependências de provider.

## Comments