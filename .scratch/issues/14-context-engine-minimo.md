# 14 — Context Engine mínimo com busca híbrida

Status: needs-triage
Milestone: M2
Blocked by: 13

## Objetivo
Recuperar contexto do projeto de referência.

## Escopo
- Arquivos autorizados, chunks, embeddings configuráveis e pgvector.
- Busca léxica e vetorial, seleção dentro do orçamento de contexto.
- Proveniência e versão-base; exclusão de segredos e arquivos ignorados.
- Embeddings contabilizados na Task.

## Fora de escopo
Atualização incremental e extração completa de símbolos.

## Dependências
13; modelo e dimensão de embeddings configurados.

## Critérios de aceite
- [ ] Recuperação combina os dois métodos.
- [ ] Trechos possuem origem e versão.
- [ ] Embeddings entram no consumo da Task.
- [ ] Conteúdo excluído e dados de outro projeto não são retornados/enviados.

## Testes esperados
Recuperação, restrição por projeto, exclusões, proveniência e limite de contexto.

## Riscos relevantes
Contexto irrelevante, segredos e índice incompatível com embeddings.

## Design It Twice
Comparar interfaces de indexação/recuperação com proveniência e orçamento explícitos. Registrar escolha antes de implementar.

## Comments