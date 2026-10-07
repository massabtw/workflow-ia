# 05 — Sandbox Docker por Task

Status: needs-triage
Milestone: M1
Blocked by: 04

## Objetivo
Disponibilizar execução isolada antes de conectar o executor.

## Escopo
- Container efêmero e workspace isolado por Task.
- Imagem Python/FastAPI com dependências provisionadas.
- CPU, RAM e timeout configuráveis; rede bloqueada por padrão.
- Usuário sem privilégios, sem socket Docker e sem credenciais de providers.
- Criar sandbox, executar comando e destruir explicitamente.

## Fora de escopo
Agente, verificação, liberação dinâmica de rede e recuperação de órfãos após crash.

## Dependências
04; Docker local disponível.

## Critérios de aceite
- [ ] Comando executa no container, nunca diretamente no host.
- [ ] Recursos configurados são aplicados.
- [ ] Rede e caminhos externos são bloqueados, incluindo escapes por symlinks.
- [ ] Workspaces são independentes e sandbox pode ser destruído.
- [ ] Montagens não incluem filesystem amplo nem socket Docker.

## Testes esperados
Docker real: execução, isolamento, timeout, recursos e destruição.

## Riscos relevantes
Permissões Windows, montagens excessivas e chamadas Docker bloqueantes.

## Design It Twice
Comparar duas interfaces de ciclo de vida do sandbox, incluindo erros, timeout e ownership. Registrar a escolha antes de implementar.

## Comments