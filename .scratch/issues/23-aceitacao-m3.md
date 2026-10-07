# 23 — Aceitação do roteamento multiprovider

Status: needs-triage
Milestone: M3
Blocked by: 22

## Objetivo
Validar M3 integrado.

## Escopo
Demonstração dos três providers, troca de ordem, contingência simulada e revisão do milestone.

## Fora de escopo
Benchmarks para otimização automática.

## Dependências
22.

## Critérios de aceite
- [ ] Decisões e fallback são visíveis no Dashboard.
- [ ] Alteração de preferência funciona sem mudança de código.
- [ ] Consumo das tentativas é reconciliado conforme uso disponível.

## Testes esperados
Matriz de seleção/fallback e smoke tests reais com orçamento explícito.

## Riscos relevantes
Disponibilidade externa e testes não reproduzíveis.

## Comments