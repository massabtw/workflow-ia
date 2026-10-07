# AI Work OS

Plataforma de orquestração para agentes autônomos de IA voltada a desenvolvimento de software.

## Language

**Task**:
Uma unidade discreta de objetivo de desenvolvimento submetida por um desenvolvedor (ex: criar endpoint, corrigir bug, criar testes).
_Avoid_: Job bruto, prompt genérico

**Model Router**:
O subsistema responsável por classificar a complexidade de uma Task e rotear para o melhor modelo ou agente com base em custo, capacidades e contingência.
_Avoid_: LLM Switcher, Gateway

**Context Engine**:
O componente responsável por indexar o repositório de código e recuperar os arquivos, símbolos e contextos relevantes para a Task.
_Avoid_: RAG genérico, Ingestion pipeline

**Execution Engine**:
O subsistema que executa as ferramentas do agente e aplica modificações de código em ambiente seguro e isolado.
_Avoid_: Runner, Script executor

**Verification Engine**:
O mecanismo de validação que executa testes automatizados, checagens estáticas e critérios de aceite para validar o código gerado antes da conclusão.
_Avoid_: Test runner, QA checker

**Memory Engine**:
O módulo de persistência episódica e semântica que sintetiza e armazena convenções e soluções aprendidas para reutilização em Tasks futuras.
_Avoid_: Cache de contexto, Knowledge base

**Cost Engine**:
O componente de governança que contabiliza consumo de tokens (prompt, completion, cache), tempo de resposta e custos em USD por modelo e Task.
_Avoid_: Billing system

