# 12 — Primeiro adapter real de modelo

Status: needs-triage
Milestone: M2
Blocked by: 11

## Objetivo
Obter respostas e tool calls por contrato independente de provider.

## Escopo
- Um provider selecionado por configuração dentre OpenAI, Anthropic e Google.
- Resposta normalizada, uso, erros e timeout; credenciais somente no backend.
- Selecionar modelo e configuração para demonstração antes do smoke test.

## Fora de escopo
Outros providers, fallback e agente.

## Dependências
11; credenciais e modelo habilitado para validação real.

## Critérios de aceite
- [ ] Adapter passa pela suíte de contrato.
- [ ] Chamada real controlada funciona e registra uso informado ou desconhecido.
- [ ] Credenciais não aparecem em logs nem no sandbox.

## Testes esperados
Respostas válidas/inválidas, tool calls, timeout, erros e uso ausente; smoke test real com teto explícito.

## Riscos relevantes
Diferenças na API e contabilização incompleta.

## Design It Twice
Comparar duas interfaces de modelo/tool calling com capacidades e erros explícitos. Registrar escolha antes de implementar; não normalizar diferenças de forma enganosa.

## Comments