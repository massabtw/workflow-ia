# 18 — Memory Engine mínimo e reserva de extração

Status: needs-triage
Milestone: M2
Blocked by: 17

## Objetivo
Completar aprendizagem de Tasks verificadas.

## Escopo
- Recuperação por projeto antes da execução, inclusive resultado vazio.
- Memória semântica/episódica, embeddings e origem em pgvector.
- Reserva específica de extração, sanitização e estado pending.
- Idempotência básica da extração.

## Fora de escopo
Reprocessamento de pendências e ranking avançado.

## Dependências
17.

## Critérios de aceite
- [ ] Somente sucesso verificado permite criar memória reutilizável.
- [ ] Reserva de extração é considerada antes de consumir o saldo disponível.
- [ ] Falta de saldo deixa memória pending sem invalidar entrega verificada.
- [ ] Segunda Task recupera memória da primeira no mesmo projeto.
- [ ] Falha de extração é visível e não apaga resultado; repetição não duplica entradas.

## Testes esperados
Elegibilidade, isolamento, reserva, saldo insuficiente, sanitização e idempotência.

## Riscos relevantes
Memória incorreta, segredos e extração sem saldo.

## Design It Twice
Comparar contratos de recuperação/extração e estados de memória separados do estado da entrega. Registrar escolha antes de implementar.

## Comments