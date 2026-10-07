# 08 — Persistência de artefatos e resultado

Status: needs-triage
Milestone: M1
Blocked by: 07

## Objetivo
Preservar evidências após remover o sandbox.

## Escopo
- Diff contra versão-base, resumo determinístico, logs e duração.
- Persistência, consulta e UI de resultado.
- Estado terminal derivado da verificação.

## Fora de escopo
Tokens/USD reais, SSE e Git remoto.

## Dependências
07.

## Critérios de aceite
- [ ] Artefatos são capturados antes da limpeza.
- [ ] Resultado permanece após destruir container.
- [ ] Falha preserva evidências disponíveis e motivo.
- [ ] Consumo de modelo é não aplicável, não uma chamada fictícia de custo zero.

## Testes esperados
Diff incluindo arquivos novos/removidos, persistência, falha parcial e consulta após cleanup.

## Riscos relevantes
Perda de artefatos, logs excessivos e conteúdo sensível.

## Comments