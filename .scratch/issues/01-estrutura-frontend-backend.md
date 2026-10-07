# 01 — Estrutura inicial do frontend e backend

Status: ready-for-agent
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
- [ ] Frontend e backend iniciam pelos comandos documentados.
- [ ] A página consulta a API e distingue sucesso de indisponibilidade.
- [ ] Backend escuta somente no ambiente local por padrão.
- [ ] Typecheck, build do frontend e testes do backend passam.
- [ ] Nenhuma funcionalidade das issues seguintes foi antecipada.

## Testes esperados
Contrato de saúde; estados disponível/indisponível da página; validação dos comandos de execução e build.

## Riscos relevantes
Versões incompatíveis, configuração incorreta de CORS e exposição involuntária da API.

## Gate de execução
Implementar somente esta issue. Validar arquivos e comandos antes de concluir; não iniciar a issue 02 automaticamente.

## Comments