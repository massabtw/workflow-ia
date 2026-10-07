---
name: design-an-interface
description: Design deep, clean interfaces and contracts before implementation, using Ousterhout's 'Design It Twice' technique.
---

# Design an Interface

Define explicit contracts, protocols, DTOs, and interface boundaries before coding.

See [codebase-design](../codebase-design/SKILL.md) for full guidelines.

## Rules:
1. Prefer deep interfaces: simple surface area hiding complex mechanics.
2. Design it twice: compare at least two distinct API signatures / paradigms before selecting.
3. Validate contracts with static typing / Pydantic / TypeScript types.
4. Keep interfaces decoupled from specific third-party SDK implementations.

