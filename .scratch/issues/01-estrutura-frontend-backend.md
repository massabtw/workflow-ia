# 01 — Estrutura inicial do frontend e backend

Status: ready-for-agent
Execution: completed
Milestone: M1
Blocked by: nenhuma

## Objetivo
Estabelecer aplicações locais executáveis e comunicação inicial entre UI e API.

## Escopo
- Next.js App Router, TypeScript, Tailwind e base para shadcn/ui.
- Python 3.12+ e FastAPI organizado como monólito modular, sem módulos vazios antecipados.
- Endpoint de saúde e página que distingue backend disponível e indisponível.
- Configuração de endereço da API e CORS local restrito.
- Dependências reproduzíveis e comandos documentados de execução, testes e build.

## Fora de escopo
Banco, Tasks, fila, worker, Docker, SSE, LLM e autenticação complexa.

## Dependências
Nenhuma. Inspecionar ferramentas locais antes de escolher versões e registrar os comandos utilizados.

## Critérios de aceite
- [x] Frontend e backend iniciam pelos comandos documentados.
- [x] A página consulta a API e distingue sucesso de indisponibilidade.
- [x] Backend escuta somente no ambiente local por padrão.
- [x] Typecheck, build do frontend e testes do backend passam.
- [x] Nenhuma funcionalidade das issues seguintes foi antecipada.

## Testes esperados
Contrato de saúde; estados disponível/indisponível da página; validação dos comandos de execução e build.

## Riscos relevantes
Versões incompatíveis, configuração incorreta de CORS e exposição involuntária da API.

## Gate de execução
Implementar somente esta issue. Validar arquivos e comandos antes de concluir; não iniciar a issue 02 automaticamente.

## Comments

### Conclusão — 2026-10-07

Implementação restrita à issue 01. API FastAPI com GET /health tipado, CORS explícito e frontend App Router com disponibilidade, falha e timeout. Base shadcn/ui sem componentes não usados. Configuração, locks, README e ADR-0001 adicionados.

Validações: pytest (2 testes), Ruff check/format, pip check, npm ci, Vitest (6 testes), ESLint, TypeScript e build Next.js passaram. Smoke tests reais: Uvicorn e Next production responderam HTTP 200 em 127.0.0.1, CORS correto; Next dev respondeu HTTP 200. Processos iniciados para smoke tests foram encerrados.

Revisão: padrões e escopo atendidos, sem módulos futuros. Limitação não bloqueante registrada no README: cinco alertas altos exclusivamente na cadeia de desenvolvimento do lint e ESLint 9 não suportado pelo registro, mantido por compatibilidade de peers. Audit omitindo dev: zero vulnerabilidades reportadas. Não houve validação em navegador real nem em Python 3.12; comportamento do componente foi validado com Testing Library/jsdom e backend em Python 3.14.

Status permanece canônico de triagem; Execution: completed registra a conclusão operacional com critérios e evidências. Issue 02 não iniciada.