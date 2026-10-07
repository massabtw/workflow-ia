# 11 — Aceitação end-to-end do M1

Status: needs-triage
Milestone: M1
Blocked by: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10

## Objetivo
Demonstrar a fatia determinística integrada.

## Escopo
- Fluxos Dashboard até resultado: sucesso, falha de verificação e cancelamento.
- Isolamento, SSE, artefatos, cleanup e roteiro da demonstração.
- Revisão do milestone.

## Fora de escopo
LLM e funcionalidades do M2.

## Dependências
01–10.

## Critérios de aceite
- [ ] Ambiente local executa demonstração documentada.
- [ ] Cenários passam com PostgreSQL e Docker reais.
- [ ] Não restam containers após encerramentos controlados.
- [ ] Revisão não encontra falha bloqueante de segurança/escopo.

## Testes esperados
Suíte integrada e teste de UI ponta a ponta; executar ferramentas do agente somente no sandbox.

## Riscos relevantes
Instabilidade dos testes e requisitos locais não documentados.

## Comments