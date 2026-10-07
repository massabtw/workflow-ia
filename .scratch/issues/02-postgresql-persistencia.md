# 02 — Configuração e persistência PostgreSQL

Status: needs-triage
Milestone: M1
Blocked by: 01

## Objetivo
Fornecer persistência e migrações reproduzíveis.

## Escopo
- Conexão PostgreSQL, sessões e encerramento de conexões.
- Migrações iniciais e habilitação de pgvector.
- Diagnóstico de banco separado da saúde do processo.
- Banco isolado para testes de integração.

## Fora de escopo
Entidades Task, fila, embeddings e memória.

## Dependências
01. Selecionar driver e migrações compatíveis com o backend, sem assumir bibliotecas já instaladas.

## Critérios de aceite
- [ ] Banco vazio recebe migrações e disponibiliza pgvector.
- [ ] Sessões encerram e falhas fazem rollback.
- [ ] Indisponibilidade gera erro controlado, sem credenciais.
- [ ] Configuração e comandos locais estão documentados.

## Testes esperados
Migração em banco vazio, conexão, rollback e indisponibilidade com PostgreSQL real.

## Riscos relevantes
Permissão para extensão, incompatibilidade de imagem e vazamento de conexões.

## Comments