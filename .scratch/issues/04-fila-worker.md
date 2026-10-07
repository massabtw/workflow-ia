# 04 — Fila PostgreSQL e worker com concorrência 1

Status: needs-triage
Milestone: M1
Blocked by: 03

## Objetivo
Adquirir e processar trabalho sem bloquear requisições HTTP.

## Escopo
- Criação atômica de Task e job; aquisição FOR UPDATE SKIP LOCKED.
- Worker interno ao FastAPI; concorrência configurável com default 1.
- Lease, identificação de tentativa e conclusão condicionada à tentativa vigente.
- Processador de teste injetável para demonstrar aquisição e conclusão.

## Fora de escopo
Sandbox, SSE e recuperação automática de leases expirados.

## Dependências
03.

## Critérios de aceite
- [ ] Aquisição usa transação curta, encerrada antes de processar.
- [ ] Consumidores concorrentes não adquirem validamente o mesmo job.
- [ ] Worker inicia e encerra no ciclo de vida da aplicação.
- [ ] Tentativa obsoleta não publica conclusão.

## Testes esperados
Aquisição concorrente com banco real, rollback, tentativa vigente e shutdown.

## Riscos relevantes
Duplicação, bloqueio do event loop e publicação tardia.

## Design It Twice
Comparar contratos de aquisição, lease e tentativa. Não prometer exactly-once; registrar proteção escolhida contra tentativas obsoletas.

## Comments