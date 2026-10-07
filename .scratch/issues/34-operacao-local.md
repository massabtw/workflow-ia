# 34 — Operação local reproduzível

Status: needs-triage
Milestone: M6
Blocked by: 33

## Objetivo
Permitir instalar e diagnosticar o MVP.

## Escopo
Configuração validada, comandos, credenciais, imagem, defaults, retenção e troubleshooting.

## Fora de escopo
Azure e deployment cloud.

## Dependências
33.

## Critérios de aceite
- [ ] Instalação seguindo documentação executa demonstração.
- [ ] Configurações inválidas falham com mensagem útil, sem segredos.
- [ ] Política de retenção e limpeza de logs/artefatos está definida e verificável.
- [ ] Limitações locais e requisitos Docker/PostgreSQL estão documentados.

## Testes esperados
Validação de configuração, retenção e roteiro em ambiente limpo.

## Riscos relevantes
Passos manuais ocultos e documentação desatualizada.

## Comments