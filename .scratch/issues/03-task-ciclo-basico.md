# 03 — Entidades e ciclo básico da Task

Status: needs-triage
Milestone: M1
Blocked by: 02

## Objetivo
Submeter e consultar uma Task persistida pela UI e API.

## Escopo
- Projeto local autorizado, versão-base e entidade Task.
- Contratos Pydantic/TypeScript; criação, listagem e detalhe.
- Estados básicos, transições e resultado público estruturado.
- Limites opcionais USD/tokens preenchidos por defaults configuráveis quando omitidos.

## Fora de escopo
Consumo financeiro, execução, fila e cancelamento.

## Dependências
02.

## Critérios de aceite
- [ ] Entrada válida gera Task queued; inválida não persiste registro.
- [ ] Defaults e limites informados são validados.
- [ ] Seleção usa projetos autorizados, não caminhos arbitrários.
- [ ] Recarga mantém Task consultável.
- [ ] Transições inválidas são rejeitadas.

## Testes esperados
TDD de defaults e transições; validação, persistência e fluxo UI/API.

## Riscos relevantes
Estados ambíguos, caminhos externos e ausência de versão-base confiável.

## Design It Twice
Comparar duas alternativas para Task, transições e resultado público antes de codificar. Registrar decisão em ADR e atualizar termos quando necessário; implementar apenas a alternativa escolhida.

## Comments