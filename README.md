<div align="center">

# Hi, I'm Vic 👋

Compilers, effect systems, Nix, and whatever I fell into this week.

[![Sponsor @vic](https://img.shields.io/badge/Sponsor_my_open_source-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/vic)
&nbsp;
[![CV](https://img.shields.io/badge/CV-25%2B_years-2b3137?style=for-the-badge&logo=github)](https://github.com/vic/vic/blob/main/cv.md)

<sub>Writing open source since 1999 · GitHub user #331 · Mexico City 🇲🇽</sub>

</div>

---

## What I'm proud of lately

### [Sven](https://github.com/vic/sven)

Nix configurations you can ask questions about, and prove things about, before you deploy. A [cycle.js](https://cycle.js.orrg) inspired pure-Nix DSL for advanced fleet configurations where everything is a query. It features a Datalog/WFS and uKanren logic layers. You declare your own nouns (fleets, envs, hosts, users, k8s, terraform, androids, whatever your world has) from nixos to complete networks of services, and Sven puts each piece of configuration where it belongs.

Related bits:

- [ren](https://github.com/vic/ren)
A re-interpretation of my [den](https://github.com/denful/den) framework as a
library built solely on [gen](https://github.com/sini/gen).
- [ren-ports](https://github.com/vic/ren-ports): real fleets (mine and a few friendly strangers') re-modeled in Ren by an agent, to see if the thing holds up. Not canonical, just a stress test with nice diagrams.
- [dungeon](https://github.com/vic/dungeon): Den's API rebuilt on Gen libraries. Still very much in progress, most of the tests are not there yet, and I'm not going to pretend otherwise.

### [mtx](https://github.com/vic/mtx)

A full-featured Matrix chat client for the terminal inspired by helix and vim keys.

### [ircc](https://github.com/vic/ircc)

A local IRC-like chat for Claude Code sessions. Each session is a `#channel`, you make rooms (`&review`), invite sessions, and agents working on different projects can finally talk to each other instead of through me. It opens no network port at all, only unix sockets on your machine.

Yes, I built a chat room for robots. They are better at it than I am.

### Smaller things

- [tinted-jjui](https://github.com/vic/tinted-jjui): [jjui](https://github.com/idursun/jjui) themes generated from base16/base24 schemes.
- [vix](https://github.com/vic/vix): my NixOS + Darwin config. The place where my ideas get tested before they get to embarrass anyone else.

---

## I LOVE Nix

It all started with a little `import-tree` and then, as it happens, became a whole organization: **[denful](https://github.com/denful)**. Docs at [denful.dev](https://denful.dev).

**Aspect-oriented Nix**

- [![den](https://img.shields.io/github/stars/denful/den?style=social&logo=nixos&label=%2Fden)](https://github.com/denful/den) context-aware, aspect-oriented configuration. People use it for real things, which still surprises me.
- [![import-tree](https://img.shields.io/github/stars/denful/import-tree?style=social&logo=nixos&label=%2Fimport-tree)](https://github.com/denful/import-tree) import every Nix module in a directory tree. The one that started it all.
- [![flake-aspects](https://img.shields.io/github/stars/denful/flake-aspects?style=social&logo=nixos&label=%2Fflake-aspects)](https://github.com/denful/flake-aspects) aspect composition with dependency DAGs
- [![flake-file](https://img.shields.io/github/stars/denful/flake-file?style=social&logo=nixos&label=%2Fflake-file)](https://github.com/denful/flake-file) generate `flake.nix` from module options
- [![dendrix](https://img.shields.io/github/stars/denful/dendrix?style=social&logo=nixos&label=%2Fdendrix)](https://github.com/denful/dendrix) community distribution on the Dendritic pattern
- [dnx](https://github.com/denful/dnx): an attempt at a parallel Nix evaluator on interaction nets.

**Effects, FRP and friends**

- [![nfx](https://img.shields.io/github/stars/denful/nfx?style=social&logo=nixos&label=%2Fnfx)](https://github.com/denful/nfx) algebraic effects with handlers, for Nix
- [![fx-rs](https://img.shields.io/github/stars/denful/fx-rs?style=social&logo=rust&label=%2Ffx-rs)](https://github.com/denful/fx-rs) ability-style effects for stable Rust, after Scala's Kyo
- [![fx.go](https://img.shields.io/github/stars/denful/fx.go?style=social&logo=go&label=%2Ffx.go)](https://github.com/denful/fx.go) effect handlers for Go
- [![ned](https://img.shields.io/github/stars/denful/ned?style=social&logo=nixos&label=%2Fned)](https://github.com/denful/ned) stream-based FRP for Nix, inspired by Cycle.js
- [![bend](https://img.shields.io/github/stars/denful/bend?style=social&logo=nixos&label=%2Fbend)](https://github.com/denful/bend) lens-based bidirectional parser combinators for Nix
- [![zen](https://img.shields.io/github/stars/denful/zen?style=social&logo=nixos&label=%2Fzen)](https://github.com/denful/zen) a tiny Nix module system

<details>
<summary>Even older: Elixir, Scala, Go, Emacs, and a Nix engine</summary>

<br>

- [![params](https://img.shields.io/github/stars/vic/params?style=social&logo=elixir&label=%2Fparams)](https://github.com/vic/params) Ecto-style parameter validation for Elixir (my most-starred one, go figure)
- [![gleam-nix](https://img.shields.io/github/stars/vic/gleam-nix?style=social&logo=nixos&label=%2Fgleam-nix)](https://github.com/vic/gleam-nix) build Gleam with Nix
- [![zio-logic](https://img.shields.io/github/stars/vic/zio-logic?style=social&logo=scala&label=%2Fzio-logic)](https://github.com/vic/zio-logic) μKanren-style logic programming for ZIO
- [![rebecca-theme](https://img.shields.io/github/stars/vic/rebecca-theme?style=social&logo=gnu&label=%2Frebecca-theme)](https://github.com/vic/rebecca-theme) the purple turtle theme for Spacemacs
- [![leader](https://img.shields.io/github/stars/vic/leader?style=social&logo=go&label=%2Fleader)](https://github.com/vic/leader) Vim-style leader key for your `$SHELL`

</details>

<details>
<summary>Upstream and community</summary>

<br>

| Project | Role |
|---|---|
| **[Apache Buildr](https://buildr.apache.org/)** | Contributor, ASF member, PMC chair |
| **[asdf-vm](https://github.com/asdf-vm/asdf)** | Maintainer and plugin author |
| **[jjui](https://github.com/idursun/jjui)** | [Contributor](https://github.com/idursun/jjui/pulls?q=author%3Avic) to this **awesome** `jj` TUI |
| **[Rubinius](https://github.com/rubinius/rubinius)** | Early contributor, wrote `Enumerable` in Ruby |
| **[Ragel](https://github.com/adrian-thurston/ragel)** | Ruby and Rubinius backends |
| **[effects-bibliography](https://github.com/vic/effects-bibliography)** | Collaborative bibliography of computational effects |

</details>

---

## About me

I've been writing open source since 1999, mostly by reading other people's code late at night. In 2023 I burned out and left tech completely. I spent that time with poetry, art and theology, and came back with more love than I left with. I still build things, but now I do it because I want to, not because I have to.

I think of what I make as acts of love that happen to compile. Free and libre, no VCs, no equity.

- 🟣 I love the color [Rebecca purple](https://github.com/vic/rebecca-theme), Rothko paintings, and effect systems (in that order on good days)
- 🎹 I obsess over my Glove80 keyboard and over layouts that hurt my fingers less
- 🔇 About 50% hearing loss. Open source has been my voice, so written and async is where I feel at home
- ✝️ Seventh-day Adventist. I belive LOVE is what created us and want us to return to it, so LOVE makes us!
- 📖 I also work on [berean.faith](https://berean.faith), a scripture-study platform where the Bible explains itself
- 💜 I'm single, feel free to [fix this](https://github.com/vic/vic/issues/new?title=you-are-not-single-anymore) 😄
- 🥔 [Leave a potato](https://github.com/vic/vic/issues/new?title=Here%27s%20a%20potato), or literally anything else. Just say *"Hey, here's a potato."*

---

## Work with me

25+ years across compilers, language implementation, algebraic effects, functional programming and Nix infrastructure. Open to **remote** roles in any of those.

- **Mostly** Rust, Nix, Go, Scala, Elixir
- **Also fluent** Haskell, Elm, Ruby, TypeScript
- **Infrastructure** NixOS, Kubernetes, Terraform, Docker, CI/CD

📄 [Full CV](https://github.com/vic/vic/blob/main/cv.md)

## Connect

- 💬 [Open a discussion](https://github.com/vic/vic/discussions) about anything, I'd love to hear from you
- ✉️ vborja@apache.org (for business, and spam)
- 🦋 [Bluesky](https://bsky.app/profile/oeiuwq.bsky.social) · [X](https://x.com/oeiuwq) @oeiuwq

## Recent GitHub activity

I’ve been moving between a few threads lately, and the recent activity on GitHub reflects that: a lot of Nix work, a lot of design work, and a fair amount of trying to make the tools feel more natural to use.

- [denful/den](https://github.com/denful/den) — the big design and experimentation hub for aspect-oriented Nix
- [denful/flake-file](https://github.com/denful/flake-file) — module-driven flake generation and the tooling around it
- [vic/ren](https://github.com/vic/ren) — a small language for describing fleets and infrastructure in a more intentional way
- [vic/vix](https://github.com/vic/vix) — my personal config lab where I test ideas before they get public
- [vic/mtx](https://github.com/vic/mtx) — active work in the same broad orbit of systems and language tooling

The last year has been a steady mix of docs, experiments, and real-world cleanup. I’m happy to keep building in public, and I’m grateful for everyone who sticks around for the ride.

---

<div align="center">

If something I made saved you some time, supporting the person behind it keeps it free and in the open. 🙏

**[💜 Become a Sponsor](https://github.com/sponsors/vic)** &nbsp;·&nbsp; **[☕ Buy me a coffee](https://ko-fi.com/E1E51I0QG5)**

</div>
