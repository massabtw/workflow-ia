# AI Work OS

Plataforma de orquestração de agentes de IA voltada para desenvolvimento de software.

## Agent skills

### Issue tracker

Local markdown files under `.scratch/issues/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical triage roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context (`GLOSSARY.md` + `docs/adr/` at repo root). See `docs/agents/domain.md`.

## Workflow de Desenvolvimento (Matt Pocock)

1. `grill-with-docs`: Entrevista investigativa e alinhamento de termos/decisões.
2. `write-a-prd` / `to-spec`: Especificação e PRD sem overengineering.
3. `prd-to-plan`: Decomposição em plano incremental modular.
4. `prd-to-issues` / `to-tickets`: Criação de tracer-bullet issues independentes.
5. `design-an-interface`: Definição de contratos profundos e tipados.
6. `implement`: Implementação focada estritamente no escopo da issue.
7. `tdd`: Desenvolvimento orientado a testes para regras críticas.
8. `code-review`: Revisão rigorosa de qualidade, segurança e arquitetura.
9. `diagnosing-bugs`: Investigação científica de bugs.
10. `improve-codebase-architecture`: Refatoração estrutural com baixo acoplamento.

