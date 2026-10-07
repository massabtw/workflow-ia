# 20 — Completar adapters OpenAI, Anthropic e Google

Status: needs-triage
Milestone: M3
Blocked by: 19

## Objetivo
Suportar os três providers pelo mesmo contrato.

## Escopo
Adicionar os dois providers restantes e normalizar capacidades, erros, tool calling e uso sem esconder diferenças.

## Fora de escopo
Seleção e fallback.

## Dependências
19; credenciais dos providers habilitados para validação real.

## Critérios de aceite
- [ ] Três adapters passam pela suíte comum.
- [ ] Cada provider tem smoke test controlado.
- [ ] Credenciais ficam apenas no backend e capacidades não suportadas são explícitas.

## Testes esperados
Contrato, tool calling, cache, timeout e uso ausente por provider.

## Riscos relevantes
Normalização enganosa e diferenças de contabilização.

## Comments