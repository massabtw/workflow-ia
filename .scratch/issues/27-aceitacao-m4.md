# 27 — Aceitação de contexto e memória

Status: needs-triage
Milestone: M4
Blocked by: 26

## Objetivo
Demonstrar reutilização entre Tasks do mesmo projeto.

## Escopo
Duas Tasks relacionadas, atualização do índice, isolamento entre projetos e revisão do milestone.

## Fora de escopo
Memória compartilhada entre organizações.

## Dependências
26.

## Critérios de aceite
- [ ] Segunda Task recupera contexto/memória relevantes da primeira.
- [ ] Outro projeto não recebe esses dados.
- [ ] Embeddings incompatíveis exigem reindexação explícita.
- [ ] Memória é conteúdo não confiável, incapaz de redefinir políticas de ferramentas.

## Testes esperados
Integração vetorial/léxica, isolamento e troca incompatível de embeddings.

## Riscos relevantes
Contaminação e contexto desatualizado.

## Comments