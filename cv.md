# Victor Borja

**Software Engineer · Open-Source Author · Effect Systems, Compilers & Runtimes**

[github.com/vic](https://github.com/vic) · [denful.dev](https://denful.dev) · [berean.faith](https://berean.faith) · vborja@apache.org

> I build tools that empower other developers — at the intersection of functional programming, algebraic effects, and language/runtime implementation. I turn research-grade ideas into practical systems, and I ship them in the open.

---

## Summary

Senior engineer, **25+ years**, focused on compilers, effect systems, and reproducible developer tooling. Creator of the **denful** open-source Nix ecosystem — 25+ composable libraries, **1,300+ GitHub stars**, with the flagship `den` framework running **in production at the European Commission**. **Apache Software Foundation member.** Currently building **dnx**, a rootless Nix evaluator on a new optimal-parallel reduction engine (Δ-Nets). I work full-time and fully in the open.

---

## Selected Open Source

### dnx — rootless, parallel Nix evaluator *(flagship · active research)*

A single **Rust** binary that evaluates Nix **without root and without a system-wide store**, built on **Δ-Nets** ([Salvadori, arXiv:2505.20314](https://arxiv.org/abs/2505.20314)) — interaction nets with optimal parallel λ-reduction and *perfect confluence* (proven in the paper). Its standout property is being **parallel by construction** (confluence gives disjoint write sets, so independent reductions fire lock-free — verified across 1–8 threads); on top sits a **designed semantic evaluation cache** that will key on a computation's canonical normalized net rather than a recipe hash, a different layer from artifact caches that would hit across expressions that *mean the same thing*.

Honest status: the core reducer is built and tested (machine-checked `n+2` β-step optimality on Church numerals; identical results across 1/2/4/8 threads); it evaluates a non-recursive pure-Nix subset today. General recursion is the active research frontier — root-caused, in progress, the same hard spot HVM/Bend hit. The semantic cache and build runner are designed. AGPL3, public infrastructure. → [denful.dev/ecosystem/dnx](https://denful.dev/ecosystem/dnx/)

### denful — composable Nix ecosystem *(creator · 1,300+ ⭐)*

25+ focused, mostly zero-dependency Nix libraries that compose.

| | |
|---|---|
| **den** (430+ ⭐) | Context-aware, aspect-oriented configuration framework — **in production at the European Commission** |
| **import-tree** (270+ ⭐) | Recursive Nix module loader — the ecosystem's most widely adopted library |
| **flake-file** (120+ ⭐) | Generate `flake.nix` from typed module options |
| **dendrix** (125+ ⭐) | Community-driven Dendritic Nix distribution |
| **flake-aspects** (60+ ⭐) | Zero-dependency aspect composition with dependency DAGs |
| **zen** | ~100-line, MLTT-verified module system, ~26× faster than `lib.evalModules` |
| **nest · ned · bend · nix-versions** | NixOS fleets · FRP · bidirectional parser-combinators · version finder |

### Effect systems & type theory

**nfx** — algebraic effects with handlers for Nix (four kernel primitives) · **fx-rs** — ability-style effects for stable Rust (after Kyo) · **fx.go** — typed effect-handler system for Go · **rust-effects / nix-effects** — freer-monad effects with an MLTT dependent type checker.

### Interaction nets & community

**GoDNet / GoDNix** — Δ-Interaction-Nets engine and a Nix→nets compiler in Go · **ranix** — a Nix parser in C (ragel + bison) · **Apache Buildr** PMC chair · **asdf-vm** maintainer · early **Rubinius** (Ruby VM) and **Ragel** contributor · **jjui** contributor.

---

## Experience

### Founder & Engineer — [Berean.faith](https://berean.faith)
*2025 – present*

- Founded and built a Spanish-language advanced scripture-study platform for scholars, pastors and your average grandma, on the principle that the Bible interprets itself through its own cross-references — *"La Biblia, explicada por ella misma."*

### Independent Open-Source Researcher & Engineer — denful / dnx
*2023 – present*

- Full-time, self-directed research and engineering on the denful Nix ecosystem and the dnx runtime.
- Grew denful to **1,300+ stars across 25+ libraries** and **European Commission production adoption** of `den`.
- Designed and implemented the Δ-Nets reduction engine in Rust: machine-checked optimality (`n+2` β-steps on Church numerals) and verified determinism across thread counts; root-caused the general-recursion frontier that gates the full runtime.

### Principal Engineer — Flight-Refund Startup
*2018 – 2023*

- Architected and shipped a mission-critical tax-calculation engine for automated flight refunds.
- Built a high-concurrency key-sharing system integrating legacy refunding platforms.
- Designed parser combinators that turned human-authored refund rules into executable logic, collapsing rule turnaround from days to hours.
- Established company-wide infrastructure (Nix, Terraform, Kubernetes) and Scala/Mill CI/CD pipelines.

### Principal Engineer — Bussi (Mobility Platform)
*2017*

- Led a real-time route-monitoring system for an urban van-fleet platform.
- Built backend fleet-management services and a React operations frontend; contributed multiple libraries to the Elixir ecosystem.

### Senior Engineer — Novelistik
*2015 – 2017*

- Shaped the architecture of a self-publishing platform for writers; built reader-engagement analytics and writer–reader features.

### Software Consultant — Independent
*1999 – 2016*

- Delivered solutions across Ruby on Rails, Node, Erlang, Elixir, and Neo4j (Karmashop, EasyBroker, and startup clients) and, earlier, enterprise Java with high-performance XML processing and build systems.
- Co-founded the Chilango Rails community meetup in Mexico City.

---

## Skills

**Languages** — Rust · Go · Nix · Scala · Elixir · Ruby · Java · Elm · JavaScript/TypeScript/React · (Haskell & Erlang familiar)
**Paradigms & theory** — functional programming · algebraic effects · interaction nets · actor model · type theory · dependent types (MLTT) · freer monads
**Specialties** — compilers, parsers & VMs · optimal λ-reduction · content-addressed evaluation · build systems · reproducible/rootless tooling
**Infrastructure** — Nix/NixOS · Kubernetes · Helm · Terraform · Docker · CI/CD

---

## Education

**Computer Science & Electrical Engineering** — ITESM, Mexico (2003)

---

## Additional

- **Languages** — Spanish (native) · English (fluent; ~50% hearing loss — I prefer async, written communication)
- **Open to remote** roles in compiler/language implementation, effect systems, Nix infrastructure, and developer tooling
- **Interests** — type theory · interaction nets · poetry · theology · the intersection of technology and art
