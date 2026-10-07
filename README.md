# AI Work OS

Issue 01: frontend local e saúde do processo da API. Não há banco, fila, sandbox, SSE ou LLM nesta entrega.

## Requisitos

- Node.js 22+ (validação: 24.19.0), npm (validação: 11.17.0).
- Python 3.12+ (validação: 3.14). O lock Python foi gerado e testado em Windows/Python 3.14; outros ambientes precisam executar a mesma suíte.

## Backend — PowerShell

```powershell
Set-Location 'c:\Users\m84832\Desktop\workflow-ia\backend'
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.lock
.\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

`GET /health` retorna `{"status":"ok"}`: indica saúde do processo, não prontidão de serviços futuros.

Opcional: definir `$env:FRONTEND_ORIGINS='http://127.0.0.1:3000,http://localhost:3000'` antes de iniciar. São origens explícitas; não usar wildcard. `backend/.env.example` é referência, não é carregado automaticamente. CORS não é autenticação: manter o serviço restrito ao loopback.

## Frontend — outro terminal PowerShell

```powershell
Set-Location 'c:\Users\m84832\Desktop\workflow-ia\frontend'
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Abrir `http://127.0.0.1:3000`. A página consulta a API no navegador, apresenta verificação, disponibilidade ou indisponibilidade (timeout de 5 segundos). Após iniciar/parar a API, recarregar a página para repetir a consulta. Não existe polling ou streaming.

`NEXT_PUBLIC_API_URL` configura a API; seu valor é público e incorporado no build. Alterações exigem reiniciar o dev server ou refazer o build. Nunca colocar segredos nessa variável.

## Validação

Backend:

```powershell
Set-Location 'c:\Users\m84832\Desktop\workflow-ia\backend'
.\.venv\Scripts\python.exe -m pytest -q
.\.venv\Scripts\ruff.exe check .
.\.venv\Scripts\ruff.exe format --check .
.\.venv\Scripts\python.exe -m pip check
```

Frontend:

```powershell
Set-Location 'c:\Users\m84832\Desktop\workflow-ia\frontend'
npm test
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serve o build no loopback. Não executar comandos concatenados sem conferir os códigos de saída.

## Estrutura e decisões

- `backend/app/main.py`: composição da API e único endpoint; sem engines ou camadas especulativas.
- `frontend/src/app`: App Router, layout e página.
- `frontend/src/components/backend-health.tsx`: consulta com cancelamento e timeout.
- Base shadcn/ui: `components.json`, alias, tokens CSS e `cn`; nenhum catálogo de componentes antecipado.
- `requirements.lock` e `package-lock.json`: versões reproduzíveis.
- Decisão arquitetural registrada em `docs/adr/0001-local-bootstrap.md`.

## Limitação de dependências

O audit de produção não apontou vulnerabilidades. O audit completo apontou cinco alertas altos na cadeia de desenvolvimento `eslint-config-next → fast-glob → micromatch → braces`, associados a padrões profundamente aninhados. O registro consultado ainda oferece `braces` 3.0.3, versão sinalizada. Não aplicar downgrade major automático nem `npm audit fix --force`. Usar lint somente sobre este workspace e configurações confiáveis; reavaliar o alerta quando houver correção compatível. Isso não constitui garantia de ausência de vulnerabilidades.

ESLint 9.39.5 é sinalizado como não suportado pelo registro, mas é a versão compatível com os peers dos plugins instalados do Next.js. ESLint 10 foi testado e rejeitado por conflitos de peer dependencies. A atualização deve aguardar versões compatíveis dos plugins; a instalação limpa, lint e build foram validados com ESLint 9.

Implementação encerrada na issue 01; issue 02 não foi iniciada.