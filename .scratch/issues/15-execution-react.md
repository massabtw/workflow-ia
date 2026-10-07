# 15 — Execution Engine com loop ReAct limitado

Status: needs-triage
Milestone: M2
Blocked by: 14

## Objetivo
Substituir o executor determinístico por execução autônoma controlada.

## Escopo
- Ferramentas de filesystem e terminal exclusivamente no sandbox.
- Validação das chamadas, observações e limites de passos, duração e saída.
- Integração com orçamento e cancelamento.
- Classificação inicial por regras para Tasks simples e seleção do modelo configurado.

## Fora de escopo
Auto-correção, classificador LLM, fallback e agentes especializados.

## Dependências
14; preservar contrato de execução escolhido na issue 06.

## Critérios de aceite
- [ ] Modelo aplica alteração apenas por ferramentas autorizadas.
- [ ] Chamadas inválidas e escapes de caminhos são rejeitados.
- [ ] Limites encerram o loop com motivo explícito.
- [ ] Cancelamento impede novas ferramentas e descarta respostas tardias.
- [ ] Registros contêm ações/observações, sem exigir raciocínio privado do modelo.

## Testes esperados
Modelo substituto determinístico, classificação por regras, chamadas inválidas, traversal, limites e cancelamento.

## Riscos relevantes
Loop infinito, prompt injection, efeitos repetidos e execução acidental no host.

## Comments