# 06 — Executor determinístico

Status: needs-triage
Milestone: M1
Blocked by: 05

## Objetivo
Conectar worker e sandbox sem LLM.

## Escopo
- Projeto de referência e transformação conhecida.
- Resultado estruturado de execução e integração ao worker.
- Encerramento seguro em sucesso/erro, preservando material necessário aos próximos estágios.

## Fora de escopo
ReAct, classificação, gate de verificação e auto-correção.

## Dependências
05.

## Critérios de aceite
- [ ] Somente arquivos previstos são modificados de forma reproduzível.
- [ ] Falha possui motivo estruturado.
- [ ] Execução é identificada como determinística na consulta da Task.
- [ ] Workspace original não é alterado e recursos são encerrados.

## Testes esperados
Transformação, limites de caminhos, erro e encerramento.

## Riscos relevantes
Alterar projeto original e acoplar implementação de demonstração ao agente futuro.

## Design It Twice
Comparar contratos mínimos do Execution Engine e resultado, sem implementar funcionalidades LLM. Permitir substituir o executor sem refazer os estados públicos.

## Comments