# 33 — Revisão integrada de segurança

Status: needs-triage
Milestone: M6
Blocked by: 32

## Objetivo
Verificar limites de confiança do sistema.

## Escopo
Caminhos, symlinks, rede, ferramentas, segredos, logs, acesso local e política explícita para liberação de rede quando necessária.

## Fora de escopo
Autenticação empresarial e exposição pública da aplicação.

## Dependências
32.

## Critérios de aceite
- [ ] Escapes são rejeitados e rede permanece bloqueada por padrão.
- [ ] Liberação de rede depende de configuração explícita autorizada, não de decisão do agente.
- [ ] Código/memória não alteram políticas.
- [ ] Credenciais não chegam ao sandbox, artefatos ou memória.

## Testes esperados
Cenários adversariais, acesso de rede autorizado/não autorizado e regressão de isolamento.

## Riscos relevantes
Vazamento de dados e permissões excessivas.

## Comments