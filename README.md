<div align="center">

# Hi, I'm Vic 👋 [\[about me\]](#-about-me)

**Compilers · Effect Systems · Nix · Functional Programming**

[![Sponsor @vic](https://img.shields.io/badge/Sponsor_my_open_source-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/vic)
&nbsp;
[![CV — 25+ years](https://img.shields.io/badge/CV-25%2B_years-2b3137?style=for-the-badge&logo=github)](https://github.com/vic/vic/blob/main/cv.md)

[![Apache Software Foundation PMC](https://img.shields.io/badge/Apache_Software_Foundation-member-D22128?logo=apache&logoColor=white)](https://www.apache.org/foundation/members.html)
&nbsp;
[![den in production at the European Commission](https://img.shields.io/badge/den_in_production-European_Commission-004494)](https://github.com/denful/den)
&nbsp;
[![1,300+ stars across 25+ libraries](https://img.shields.io/badge/⭐_1,300+-25+_libraries-8957e5?logo=github&logoColor=white)](https://github.com/orgs/denful/repositories)

<sub>Open-source author since 1999 · GitHub User #331 · Mexico City 🇲🇽</sub>

</div>

> [!IMPORTANT]
> I build **public infrastructure** in the open — no VCs, no equity, free and libre forever. The biggest of it is **[dnx](#-dnx--a-new-nix-engine)**: a new parallel Nix engine.

---

## 🚀 dnx — a new Nix engine

[![dnx](https://img.shields.io/github/stars/denful/dnx?style=social&logo=rust&label=%2Fdnx)](https://github.com/denful/dnx)
&nbsp;
[![docs](https://img.shields.io/badge/docs-denful.dev-8957e5)](https://denful.dev/ecosystem/dnx/)

A rootless, single-binary **Nix evaluator** built on **Δ-Nets** ([Salvadori, arXiv:2505.20314](https://arxiv.org/abs/2505.20314) · [deltanets.org](https://deltanets.org)) — interaction nets with optimal **parallel** λ-reduction and *perfect confluence* (a proven theorem of the model).

**What sets it apart — one built, one designed:**

- ⚡ **Parallel by construction** *(built · verified across 1–8 threads)* — confluence means independent reductions touch disjoint memory, so they fire lock-free. Parallelism is a property of the model, not bolted onto thunks.
- 🧠 **A semantic cache** *(designed)* — it will key on a computation's *meaning* (the canonical normalized net) rather than a recipe hash, so two expressions that compute the same thing would collapse to one cache key.

> Research-grade and early — but the bet is big: that package managers, language runtimes, and proof assistants are secretly the same problem, and one mathematically-grounded engine can be all three.

**[💜 Sponsor dnx →](https://github.com/sponsors/vic)**

---

## 🧩 The denful Ecosystem

> It all started with my little `import-tree` lib and has grown into more than 30+ repos, so I created an umbrella GitHub ogranization for them and building **composable Nix tools** — aspects, algebraic effects, evaluation, and the dnx runtime. Nix is powerful, yet its libraries rarely compose; denful brings them together.
> **1,300+ ⭐ · 25+ libraries · in production at the EU Commission.** Docs at **[denful.dev](https://denful.dev)** · [all repos →](https://github.com/orgs/denful/repositories)

**Aspect-Oriented Nix**

- [![den](https://img.shields.io/github/stars/denful/den?style=social&logo=nixos&label=%2Fden)](https://github.com/denful/den) — context-aware, aspect-oriented configuration framework — **used in production by the European Commission**
- [![import-tree](https://img.shields.io/github/stars/denful/import-tree?style=social&logo=nixos&label=%2Fimport-tree)](https://github.com/denful/import-tree) — recursively import every Nix module in a tree; the ecosystem's most widely adopted library
- [![flake-aspects](https://img.shields.io/github/stars/denful/flake-aspects?style=social&logo=nixos&label=%2Fflake-aspects)](https://github.com/denful/flake-aspects) — zero-dependency aspect composition with dependency DAGs and parametric providers
- [![flake-file](https://img.shields.io/github/stars/denful/flake-file?style=social&logo=nixos&label=%2Fflake-file)](https://github.com/denful/flake-file) — generate `flake.nix` from typed Nix module options
- [![dendrix](https://img.shields.io/github/stars/denful/dendrix?style=social&logo=nixos&label=%2Fdendrix)](https://github.com/denful/dendrix) — community-driven Nix distribution on the Dendritic pattern
- [![checkmate](https://img.shields.io/github/stars/denful/checkmate?style=social&logo=nixos&label=%2Fcheckmate)](https://github.com/denful/checkmate) — zero-dependency flake checker: treefmt + nix-unit

**Algebraic Effects & Type Theory**

- [![nfx](https://img.shields.io/github/stars/denful/nfx?style=social&logo=nixos&label=%2Fnfx)](https://github.com/denful/nfx) — algebraic effects with handlers for Nix, from four kernel primitives
- [![fx-rs](https://img.shields.io/github/stars/denful/fx-rs?style=social&logo=rust&label=%2Ffx-rs)](https://github.com/denful/fx-rs) — ability-style algebraic effects for stable Rust *(after Scala's Kyo)*
- [![fx.go](https://img.shields.io/github/stars/denful/fx.go?style=social&logo=go&label=%2Ffx.go)](https://github.com/denful/fx.go) — algebraic effect-handler system for Go with typed capabilities
- [![rust-effects](https://img.shields.io/github/stars/denful/rust-effects?style=social&logo=rust&label=%2Frust-effects)](https://github.com/denful/rust-effects) — freer-monad effects + an MLTT dependent type checker for stable Rust
- [![nix-effects](https://img.shields.io/github/stars/kleisli-io/nix-effects?style=social&logo=nixos&label=%2Fnix-effects)](https://github.com/kleisli-io/nix-effects) — effect system with dependent & linear types + a HOAS checker for Nix

**Streams, FRP & Tooling**

- [![zen](https://img.shields.io/github/stars/denful/zen?style=social&logo=nixos&label=%2Fzen)](https://github.com/denful/zen) — ~100-line Nix module system, MLTT-verified, ~26× faster than `lib.evalModules`
- [![ned](https://img.shields.io/github/stars/denful/ned?style=social&logo=nixos&label=%2Fned)](https://github.com/denful/ned) — stream-based functional-reactive programming for Nix, inspired by Cycle.js
- [![bend](https://img.shields.io/github/stars/denful/bend?style=social&logo=nixos&label=%2Fbend)](https://github.com/denful/bend) — lens-based bidirectional parser-combinators for Nix. Parse, don't validate.
- [![nest](https://img.shields.io/github/stars/denful/nest?style=social&logo=nixos&label=%2Fnest)](https://github.com/denful/nest) — declarative multi-node NixOS fleets with a CSS mental model
- [![nix-versions](https://img.shields.io/github/stars/denful/nix-versions?style=social&logo=go&label=%2Fnix-versions)](https://github.com/denful/nix-versions) — find nixpkgs revisions for historical package versions
- [![vix](https://img.shields.io/github/stars/vic/vix?style=social&logo=nixos&label=%2Fvix)](https://github.com/vic/vix) — my multi-host NixOS + Darwin infra; the ecosystem's proving ground

<details>
<summary>📦 More work — Scala · Elixir · Go · Emacs · interaction nets</summary>

<br>

**☕ Scala**

- [![zio-logic](https://img.shields.io/github/stars/vic/zio-logic?style=social&logo=scala&label=%2Fzio-logic)](https://github.com/vic/zio-logic) — μKanren-inspired relational/logic programming for ZIO2
- [![laminar_cycle](https://img.shields.io/github/stars/vic/laminar_cycle?style=social&logo=scala&label=%2Flaminar_cycle)](https://github.com/vic/laminar_cycle) — Cycle.js style user-computer model in Laminar
- [![nonono](https://img.shields.io/github/stars/vic/nonono?style=social&logo=scala&label=%2Fnonono)](https://github.com/vic/nonono) — Scala 3 compiler plugin to prevent unsafe function calls
- [![katan](https://img.shields.io/github/stars/vic/katan?style=social&logo=scala&label=%2Fkatan)](https://github.com/vic/katan) — logic language on typed concatenative effects
- [![mill-docker](https://img.shields.io/github/stars/vic/mill-docker?style=social&logo=scala&label=%2Fmill-docker)](https://github.com/vic/mill-docker) — minimalist distroless Docker images for Java apps with Mill

**💧 Elixir**

- [![params](https://img.shields.io/github/stars/vic/params?style=social&logo=elixir&label=%2Fparams)](https://github.com/vic/params) — Ecto-style parameter validation/casting
- [![pit](https://img.shields.io/github/stars/vic/pit?style=social&logo=elixir&label=%2Fpit)](https://github.com/vic/pit) — extract/transform values in Elixir pipe flows
- [![expat](https://img.shields.io/github/stars/vic/expat?style=social&logo=elixir&label=%2Fexpat)](https://github.com/vic/expat) — reusable, composable patterns across Elixir libraries
- [![ok_jose](https://img.shields.io/github/stars/vic/ok_jose?style=social&logo=elixir&label=%2Fok_jose)](https://github.com/vic/ok_jose) — pipe functions matching ok/error tuples
- [![pond](https://img.shields.io/github/stars/vic/pond?style=social&logo=elixir&label=%2Fpond)](https://github.com/vic/pond) — state-aware functions without spawning processes
- [![happy](https://img.shields.io/github/stars/vic/happy?style=social&logo=elixir&label=%2Fhappy)](https://github.com/vic/happy) — the alchemist's happy path with Elixir

**🐹 Go**

- [![GoDNet](https://img.shields.io/github/stars/denful/GoDNet?style=social&logo=go&label=%2FGoDNet)](https://github.com/denful/GoDNet) — Delta Interaction Nets reduction engine & compiler backend
- [![GoDNix](https://img.shields.io/github/stars/denful/GoDNix?style=social&logo=go&label=%2FGoDNix)](https://github.com/denful/GoDNix) — a Nix language compiler into Delta Interaction Nets
- [![leader](https://img.shields.io/github/stars/vic/leader?style=social&logo=go&label=%2Fleader)](https://github.com/vic/leader) — Vim/Evil leader-key for your `$SHELL`

**🤖 Emacs Lisp**

- [![rebecca-theme](https://img.shields.io/github/stars/vic/rebecca-theme?style=social&logo=gnu&label=%2Frebecca-theme)](https://github.com/vic/rebecca-theme) — the purple turtle theme for Spacemacs
- [![ido-better-flex](https://img.shields.io/github/stars/vic/ido-better-flex?style=social&logo=gnu&label=%2Fido-better-flex)](https://github.com/vic/ido-better-flex) — better fuzzy matching for Emacs ido-mode
- [![vee](https://img.shields.io/github/stars/vic/vee?style=social&logo=gnu&label=%2Fvee)](https://github.com/vic/vee) — Vic's Emacs Environment

</details>

<details>
<summary>🤝 Community & upstream contributions</summary>

<br>

| Project | Role |
|---|---|
| **[Apache Buildr](https://buildr.apache.org/)** | Core contributor · **ASF member** · PMC chair |
| **[asdf-vm](https://github.com/asdf-vm/asdf)** | Maintainer and plugin author |
| **[jjui](https://github.com/idursun/jjui)** | Active [contributor](https://github.com/idursun/jjui/pulls?q=author%3Avic) to this `jj` TUI |
| **[Rubinius](https://github.com/rubinius/rubinius)** | Early contributor — implemented `Enumerable` in Ruby |
| **[Ragel](https://github.com/adrian-thurston/ragel)** | Ruby and Rubinius VM code backends |
| **[effects-bibliography](https://github.com/vic/effects-bibliography)** | Collaborative bibliography of computational effects |
| **Darcs · Fancy · vtd-xml** | Contributor |

</details>

---

## 🙋 About Me

I've been writing open source since 1999 — learning by reading other people's code, late nights and weekends, for years. In 2023 I burned out and stepped away from tech entirely. I spent that time with poetry, art, and theology, and came back with more energy and more love than ever.

Now I build **[dnx](#-dnx--a-new-nix-engine)** and **[berean.faith](https://berean.faith)** — a scripture-study platform where the Bible explains itself — and I think of both as acts of love, not just engineering.

- 🟣 I love the [Rebecca purple](https://github.com/vic/rebecca-theme) color, Rothko paintings, and effect systems
- 🎹 I obsess over my Glove80 keyboard and finding layouts that reduce finger stress
- 🔇 ~50% hearing loss — open source has always been my voice; written and async is where I feel at home
- ✝️ Seventh-day Adventist — I believe my life's purpose is Love, and that we don't author it, it authors us
- 💜 I'm single — feel free to [fix this](https://github.com/vic/vic/issues/new?title=you-are-not-single-anymore) 😄
- 🥔 [Leave a potato](https://github.com/vic/vic/issues/new?title=Here%27s%20a%20potato) — or literally anything else. Just say *"Hey, here's a potato."*

---

## 💼 Work With Me

**25+ years** across compilers & language implementation, algebraic effects, functional programming, and Nix infrastructure. Open to **remote** roles in any of those.

- **Primary** — Rust · Nix · Go · Scala · Elixir
- **Also fluent** — Haskell · Elm · Ruby · TypeScript
- **Paradigms** — functional programming · algebraic effects · interaction nets · actor model · type theory · dependent types (MLTT)
- **Infrastructure** — NixOS · Kubernetes · Terraform · Docker · CI/CD

📄 **[Read my full CV →](https://github.com/vic/vic/blob/main/cv.md)**


---

## 📬 Connect

- 💬 **[Open a discussion](https://github.com/vic/vic/discussions)** — about anything; I'd love to hear from you
- ✉️ **vborja@apache.org** — for business (and spam)
- 🦋 **[Bluesky](https://bsky.app/profile/oeiuwq.bsky.social)** · **[X](https://x.com/oeiuwq)** — @oeiuwq

---

<div align="center">

If something I made saved you time, supporting the person behind it is what keeps it free and in the open. 🙏

**[💜 Become a Sponsor](https://github.com/sponsors/vic)** &nbsp;·&nbsp; **[☕ Buy me a coffee](https://ko-fi.com/E1E51I0QG5)**

<br>

<img src="https://githubcard.com/vic.svg?d=iIiQfjmJ" width="380" alt="Vic's GitHub card" />

</div>
