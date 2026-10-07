# 07 — Verification Engine com pytest e Ruff

Status: needs-triage
Milestone: M1
Blocked by: 06

## Objetivo
Decidir se a alteração determinística passa pelos gates do projeto.

## Escopo
- Pytest e Ruff dentro do sandbox.
- Resultados com código de saída, duração e logs limitados.
- Falha de teste/lint, timeout e infraestrutura diferenciados.
- Integração ao fluxo determinístico.

## Fora de escopo
Auto-correção e gates adicionais.

## Dependências
06.

## Critérios de aceite
- [ ] Ambos os gates precisam passar.
- [ ] Ausência de testes coletados não equivale a sucesso.
- [ ] Timeout e infraestrutura têm motivo distinto de teste falho.
- [ ] Comandos vêm da configuração autorizada do projeto.

## Testes esperados
Sucesso, pytest falho, Ruff falho, zero testes e timeout.

## Riscos relevantes
Falso sucesso e dependências ausentes na imagem.

## Design It Twice
Comparar duas interfaces de verificação, com evidências e classificação de falhas; implementar somente a escolhida.

## Comments