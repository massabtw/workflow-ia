# 13 — Cost Engine: reservas e contabilização

Status: needs-triage
Milestone: M2
Blocked by: 12

## Objetivo
Governar consumo antes da execução autônoma.

## Escopo
- Preços configurados, aritmética decimal, reservas e reconciliação.
- Prompt, completion e cache conforme semântica do provider.
- Limites USD/tokens efetivos da Task, incluindo retries com uso informado.
- Estados de custo estimado, reportado e desconhecido.

## Fora de escopo
Cobrança comercial e otimização estatística.

## Dependências
12.

## Critérios de aceite
- [ ] Chamada sem reserva conservadora segura é bloqueada.
- [ ] Ambos os limites são respeitados quando definidos.
- [ ] Cache não é contado duas vezes e uso desconhecido não vira zero.
- [ ] Uso informado em tentativas falhas é reconciliado.
- [ ] Preço aplicado e identificador de chamada são rastreáveis.

## Testes esperados
TDD de preços, cache, reservas concorrentes, esgotamento e reconciliação.

## Riscos relevantes
Subestimação, dupla contagem e limitações de uso/limites do provider.

## Design It Twice
Comparar contratos de reserva/reconciliação, incluindo uso desconhecido e cancelamento. Documentar as condições necessárias para garantir hard cap antes de implementar.

## Comments