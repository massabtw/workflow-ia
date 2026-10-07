# ADR-0001 — Bootstrap local mínimo

Status: accepted
Issue: 01

## Contexto

A primeira entrega precisa comprovar frontend/backend executáveis, sem antecipar subsistemas do MVP.

## Decisão

Usar diretórios frontend e backend independentes. Backend FastAPI possui uma composição simples e endpoint assíncrono `/health` com resposta tipada. Frontend Next.js App Router consulta diretamente a API pelo navegador, com timeout e cancelamento no unmount. CORS usa origens explícitas configuráveis; scripts de desenvolvimento e produção usam loopback.

Manter somente a base de configuração shadcn/ui, sem instalar componentes não utilizados. Testar fronteiras públicas com pytest/TestClient e Vitest/Testing Library. Fixar dependências instaladas nos locks. Validar Python 3.14 disponível; manter código compatível com sintaxe Python 3.12+.

## Alternativas

Proxy no Next.js eliminaria CORS, mas acrescentaria uma rota intermediária sem necessidade nesta fatia. Criar desde já pastas para todos os engines aumentaria estrutura sem comportamento testável. Ambas foram rejeitadas.

## Consequências

Não há autenticação nem proteção para exposição pública. `/health` representa apenas saúde do processo. Configuração pública da API exige rebuild em produção. Não há polling; recarga repete a consulta. Novos módulos serão introduzidos apenas pelas issues correspondentes.