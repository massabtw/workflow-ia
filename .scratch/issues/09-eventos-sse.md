# 09 — Eventos persistidos e SSE

Status: needs-triage
Milestone: M1
Blocked by: 08

## Objetivo
Acompanhar Tasks em tempo real mantendo persistência como fonte de verdade.

## Escopo
- Eventos com ID, Task, tentativa, tipo e payload versionado.
- Persistência consistente e endpoint SSE com retomada.
- Timeline no Dashboard e encerramento de conexões.

## Fora de escopo
Broker externo e notificações.

## Dependências
08.

## Critérios de aceite
- [ ] Eventos refletem execução, verificação e encerramento.
- [ ] Reconexão recupera eventos posteriores ao último ID recebido.
- [ ] Cliente deduplica replay.
- [ ] Desconexão não cancela Task e recarga reconstrói estado persistido.

## Testes esperados
Ordenação, replay, deduplicação e desconexão.

## Riscos relevantes
Lacunas entre estado/evento e conexões sem limpeza.

## Design It Twice
Comparar envelopes de eventos e contratos de retomada, incluindo consistência transacional e compatibilidade de payloads.

## Comments