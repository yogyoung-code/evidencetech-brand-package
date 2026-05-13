# Brand Discovery Report — Evidence AI (梅斯健康 AI Brand Kit)

**Discovery date:** 2026-05-07
**Working folder:** `/Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package/`
**Scope:** Local folder only (Google Drive deferred by user)
**Discovery depth:** Exhaustive — all 00–06 .md files, ai-tokens.css, all React src, all preview READMEs, all master-brand docs

---

## Executive Summary

The Evidence AI brand package is an unusually mature, well-structured deliverable. A complete v1.0 AI sub-brand system ("Branded House with Shared Trust Layer") has been locked and documented across eight numbered specification documents, a production CSS token file, a 13-component React library (v0.1.0), 12 master-brand SVG variants, 75 PNG rasters, and a 46-page VitePress documentation site — all created between 2026-05-05 and 2026-05-07.

The system governs four products (DeepEvidence, SeekEvidence, DeepInsight, Rapid Clinical Pulse) under the parent brand MedSci Healthcare (梅斯健康, HK:2415) using shared trust-layer components (PITL Verified, AIO Official, VGI ingredient mark, Nano-Citation, CoT animation, Diff View, Progressive Disclosure).

**Three critical gaps remain:**
1. Every discovered source is a specification or planning document — zero actual product UI has been verified against the kit.
2. All rectification tasks across DE, SE, and RCP are formally unstarted.
3. The brand voice specification is entirely missing social media guidance, localization playbooks for regional Chinese medical sub-audiences, and claim-substantiation procedures for regulated medical data assertions.

The governance structure is clear and well-staffed on paper but has not yet been operationally tested.

---

## Sources Analyzed (36 primary files read in full)

### Specification & Governance (10 files)

| File | Type | Summary |
|---|---|---|
| `00-architecture-locked.md` | Architecture (Sponsor-locked 2026-05-05) | Branded House model, 4-product matrix, trust layer, voice principles v0.1, naming system |
| `01-gap-audit.md` | Audit | Gap analysis across 9 dimensions vs DE/SE/RCP canary prototypes — all unresolved |
| `02-brand-architecture.md` v0.6 | Specification | Logo geometry, endorsement signature, VGI mark, RCP through-line, co-brand lockup, naming |
| `03-brand-voice.md` | Voice/Messaging | CN-primary, 4 voice principles, dual-audience matrix, prohibited terms, micro-writing rules |
| `04-visual-system.md` v0.2 | Specification | Three trust badges, Nano-Citation, CoT animation, Diff View, Progressive Disclosure, image policy |
| `05-rectification-checklist.md` | Operational | Per-product DE/SE/RCP sprint tasks — all unstarted |
| `06-governance.md` | Governance | Versioning, change flow, parent-brand sync, decision authority, asset hosting, CHANGELOG |
| `ai-tokens.css` | Design Tokens | Production CSS variables: 4 product primaries, endorsement, trust badges, citation, CoT, Diff |
| `HANDOFF.md` | Operational | AI session handoff: locked decisions, pitfalls, deliverables status |
| `README.md` | Operational | Kit index, parent-brand deviation table, color summary, integration quickstart |

### React Component Library (15 files)

`BrandScope.tsx`, `Logo.tsx`, `Wordmark.tsx`, `EndorsementSignature.tsx`, `PITLBadge.tsx`, `AIOBadge.tsx`, `VGIMark.tsx`, `NanoCitation.tsx`, `CoTIndicator.tsx`, `DiffView.tsx`, `Disclosure.tsx`, `DEEcgIcon.tsx`, `SEBarsIcon.tsx`, `DIConstellationIcon.tsx`, `RCPPulseIcon.tsx`, plus master-brand wrappers and JS tokens.

### Master-Brand Asset Documentation (3 files)

`A11Y-CONTRAST.md` (WCAG 2.1, 64 combinations), `CLEAR-SPACE.md` (½X minimum), `LAYERS.md` (6-layer SVG structure).

### Preview / Decision Archives (3 README files)

RCP iconography (variant C selected), DI iconography (variant C selected — README pre-decision recommended B), VGI mark catalog (12 SVG assets).

---

## Brand Elements Discovered

### Voice Attributes

- **Rigorous, not cold** — medical-grade evidence language, peer-to-peer tone
- **Transparent, not verbose** — algorithm disclosed on demand via L1→L2→L3 progressive disclosure
- **Physician-in, not bypassed** — every AI output explicitly shows physician role; AI never replaces sign-off authority
- **Restrained, not timid** — evidence-backed claims confidently; no unsubstantiated superlatives
- **CN-primary** (Sponsor-locked); **No emoji, no stock photo, no AI-generated medical imagery** (FTC red line)
- **Second-person "你" not "您"** — informal default; "您" reserved for legal/TOS only
- **Data claims must cite source** — format `91.3% (n=1,234, 2025)¹`

### Positioning

> **CN:** "梅斯 AI · 验证型生成式智能。让每一句结论可验证，每一证据可溯源。"
>
> **EN:** "MedSci AI · Verified Generative Intelligence. Every conclusion is verifiable; every evidence is traceable."

**Anti-positioning:** "We do not displace physician judgment; we amplify its reliability."

**Per-product one-liners** (from `03-brand-voice.md` §2.3, current as of 2026-05-07):

| Product | CN | EN |
|---|---|---|
| DeepEvidence | 医生桌面与移动端的循证决策助手——每一句答复都可验证 | Evidence-based clinical decision support — every answer is verifiable |
| SeekEvidence | 临床科研操作系统——从选题到发表，AI 加速、专家把关 | Clinical research OS — AI-accelerated, physician-verified |
| DeepInsight | 药企的循证商业智能套件——意图份额管理与 KOL 雷达 | Evidence-based commercial intelligence for pharma — intent share & KOL radar |
| RCP | 敏捷验证实验室——按需触达医生，加速高价值医学任务 | Agile validation lab — on-demand physician access, accelerated medical tasks |

### Dual-Audience Messaging Matrix

| | DeepEvidence | SeekEvidence | DeepInsight | RCP |
|---|---|---|---|---|
| **Audience** | Clinicians | Clinical researchers | Pharma commercial | Pharma marketing/medical/KA, consulting & research firms, AI companies |
| **Pain** | Decision uncertainty, DRG errors | Publication pressure, SCI barriers | KOL reach, AI-era brand fidelity | Difficulty finding target physicians, high task cost, long physician feedback cycle |
| **Value** | Evidence-backed answer in 30s | AI-accelerated research OS | Intent share + AIO content | Physicians can agilely complete high-value medical tasks |
| **CTAs** | "查证一下" / "Verify It" / "看 Diff" | "看看选题" / "构造检索式" | "雷达 + 我的产品" / "Rising Star" | "发起任务" / "Run a pulse" / "看任务反馈" |

### Terminology Glossary

**PITL** (Physician-in-the-Loop / 医师在回路) · **AIO** (AI Optimization — NOT All-In-One) · **VGI™** (Verified Generative Intelligence / 验证型生成式智能) · **Nano-Citation** (纳米级引用) · **CoT** (Chain-of-Thought / 思维链) · **Diff View** · **DEE/SE/DI/RCP** (internal abbreviations) · **CDS** · **DRG** · **IIT** · **SPL** · **DeepLabeling** · **PI Portrait 360** · **Rising Star** · **Verify It** · **Ambient Scribe**

Internal-only code name: **Hippocrates** (= DeepEvidence). Forbidden externally.

### Visual System (locked tokens)

| Product | Primary | Variable |
|---|---|---|
| DeepEvidence | `#2563EB` | `--de-primary` |
| SeekEvidence | `#9333EA` | `--se-primary` |
| DeepInsight | `#0891B2` (provisional) | `--di-primary` |
| Rapid Clinical Pulse | `#0F62FE` | `--rcp-primary` |
| Endorsement | `#666666` | `--endorsement-color` |

Typography: Teko (wordmarks) · Noto Sans SC + Inter (body) · IBM Plex Sans/Mono (RCP only).

Logo: dual-color wordmark (DE/SE/DI) or all-black with through-line (RCP). Size ladder wm-xl (88px) → wm-min (16px); endorsement hides below 28px.

Trust badges (pill geometry): PITL = product-color fill + white check shield · AIO = neutral-700 fill + product-color folded doc · VGI = transparent + product-color outline shield.

### Governance

Version v1.0 (Sponsor: Yog). Authority matrix covers architecture, color tokens, prohibited terms, badge types, and rectification tasks. Change flow: patch (dual-sign PR) → minor (RFC) → major (Sponsor RFC + 3-sign) → emergency (Market+Legal 24h bypass). Quarterly parent-brand sync against MedSci Healthcare v1.1.

---

## Conflicts & Inconsistencies (6 found)

1. **Endorsement color stale in `00`** — `00` §4.3 still shows `neutral-700/#334155`; v0.6 in `02` and `ai-tokens.css` correctly use `#666666`. Patch `00`.
2. **DI icon README marks variant B as ⭐** — but Sponsor selected C and C is implemented. Add a note to README clarifying ⭐ is pre-decision analysis.
3. **Nano-Citation hover transition** — spec says 250ms; CSS implements 150ms. Update spec to match CSS.
4. **`00` deliverable numbering** — references `03 = brand-voice.md`, `04 = ai-tokens.css`; actual file numbers shifted. Patch table.
5. **AIO badge fill `#334155`** — correct value, but same hex was retired from endorsement use. Add inline CSS comment to disambiguate.
6. **SCI not formally defined** in §4.3 abbreviation table though referenced in messaging. Add entry.

---

## Open Questions (11 — ranked by priority)

### High Priority (0 active · 5 resolved on 2026-05-07)

1. **✅ RESOLVED** — DI primary `#0891B2` LOCKED. "暂定" flag removed from `00-architecture-locked.md` §3. Any future change requires major RFC per §6 governance.
2. **✅ RESOLVED** — DI icon variant C accepted as readable. Sponsor decision: dual-ring blurs slightly under 28px but hub fill remains identifiable; no product-level degrade exception added. Note appended to `02-brand-architecture.md` §1.3.
3. **✅ RESOLVED** — Nano-Citation `<CitationSidePanel>` will ship as a SHARED component in `@yogyoung-code/ai-brand-kit` v0.2; products may NOT implement independently. Decision and rationale recorded in `05-rectification-checklist.md` §5.
4. **✅ RESOLVED** — CN main-language policy applies to all user-visible error/exception/empty-state copy (including those originating from API or system layer). Code-layer identifiers (constants, error codes, API field names, developer logs) remain EN. Rule added to `03-brand-voice.md` §1.1 with decision box: "is the string translated for users? → CN; developer/ops only → EN".
5. **✅ RESOLVED** — "梅斯 AI" / "MedSci AI" approved as sub-brand umbrella shorthand. Carve-out added to `02-brand-architecture.md` §5.4 (rule: must appear as full umbrella unit, not split into "梅斯" + "AI"; parent-brand formal signature still uses "梅斯健康"). Cross-referenced in `03-brand-voice.md` §2.1.

### Medium Priority (0 active · 2 resolved on 2026-05-07)

6. **✅ RESOLVED** — DE/SE logo animation old colors unified. User uploaded the two animation files; updated copies saved to `preview/de-logo-animation.html` (`#2c65c9` → `#2563EB`) and `preview/se-logo-animation.html` (`#893BE1` and typo `#893CE1` both → `#9333EA`). **Caveat:** SE animation file's wordmark text is "Deep"+"Evidence" (looks like an unupdated copy from DE template); this voice/wording issue is documented inline as a comment and left for the user / engineering team to fix separately — should be `.text-seek`+"Seek" + `.text-evidence`+"Evidence".
7. **✅ RESOLVED** — Progressive Disclosure mobile rule changed: mobile now defaults to **L1 + L2 expanded** (aligned with desktop), L3 still collapsed. New §6.4 added to `04-visual-system.md` defining the shared `<Disclosure>` component contract: `defaultExpanded` prop, built-in breakpoint detection via `matchMedia('(max-width: 768px)')`, `urgency="warning"` force-all mode. Products will no longer implement L2 collapse logic. v0.2 build task added to `05-rectification-checklist.md` §5.

### Low Priority (4 resolved/deferred · 2026-05-07 batch)

8. **✅ RESOLVED** — "24h" wording rule formally written into `03-brand-voice.md` §3.4 (during RCP repositioning batch): any external use of "24h" / "24 小时" requires `(n=X, source: [study])` annotation; otherwise reframe as "敏捷" / "agile" / "目标: 24h". Rule is enforceable via `03` §8 pre-publish self-check.
9. **✅ RESOLVED** — NPM private registry locked to **GitHub Packages** (`https://npm.pkg.github.com`). **Interim package name (v0.1.0):** `@yogyoung-code/ai-brand-kit` (using Sponsor's personal GitHub account `yogyoung-code/ai-brand-kit`). After MSH creates the `medsci` GitHub org, will rename to `@medsci/ai-brand-kit` per the migration runbook in `06-governance.md` §5.4. All 31 source files updated via batched sed; build artifacts (dist/, package-lock.json) will regenerate on next build. Root `package.json` augmented with `name` + `version` + `private: true` to silence `EINVALIDTAGNAME` warning during `npm install puppeteer`.
10. **VitePress docs deployment — DEFERRED** (2026-05-07 user decision): for now, contributors use local `npm run dev` preview from the repo; formal hosting decision pushed to later. Three originally-listed options (GitHub Pages / Vercel / internal nginx) still on the table when ready to commit.
11. **✅ RESOLVED** — React 9-segment screenshot archive generated (2026-05-07, Sponsor ran locally): all 9 PNGs + `manifest.json` saved to `preview/screenshots/react-demo/` (sizes 93.8 KB / 51.3 KB / 192.6 KB / 49.8 KB / 36.7 KB / 164.8 KB / 44.3 KB / 130.9 KB / 244.4 KB); `preview/screenshots/index.html` renders the matrix from manifest. Sections cover: trust badges across 4 product scopes · reverse mode · Logo size ladder + endorsement · Logo reverse (Hero) · Wordmark text-only fallback · Nano-Citation/CoT/Diff/Disclosure · family Lockup · master-brand 4×3 matrix · Co-Brand Lockup.

---

## Coverage Gaps (10 — areas absent from all sources)

1. **Social media voice rules** (WeChat, LinkedIn, Weibo) — entirely absent
2. **Localization for regional Chinese sub-audiences** — kit treats China as monolithic
3. **Claim-substantiation process** — no source registry, no retraction protocol
4. **Accessibility for interactive components** — only logo a11y is documented
5. **Motion/animation outside logo and CoT** — page transitions, generic loaders, side-panel easing all unspecified
6. **Photography/illustration library** — deferred to parent-brand W2; no interim guidance
7. **Email template voice and format** — sender names, subject lines, transactional tone
8. **Error message and empty-state copy** — high-frequency clinical touchpoints
9. **Competitor / comparative claims** — Legal-adjacent regulated-medical context
10. **NPM package versioning policy** — no SemVer mapping, no breaking-change definition

---

## Recommended Next Steps

1. **Resolve open question 5 first** (梅斯 vs 梅斯健康) — affects all outward-facing copy
2. **Schedule engineering Sprint 1** for DE/SE/RCP rectification (1 day per product)
3. **Patch `00` §4.3** endorsement color `#334155` → `#666666` (one-line fix)
4. **Document DI 28px icon degrade** in `02` §1.3
5. **Lock or adjust DI primary** before DI design phase starts
6. **Draft 3 highest-priority voice gaps** — error/edge-state copy, claim-substantiation, "梅斯 AI" shorthand
7. **Publish React package** to chosen npm registry
8. **Run screenshot archive script** to capture v0.1.0 visual record
9. **Decide VitePress deployment** target
10. **Plan brand voice v0.2** covering social media + email

---

*Report based exclusively on local folder. Google Drive and other enterprise platforms were deferred by user — formal documents may exist there that supplement findings.*

---

## Updates Since Initial Discovery

This report is a snapshot dated 2026-05-07. Source documents have been amended after the initial scan; updates are tracked here for traceability.

**2026-05-07 — RCP repositioning (pending dual-sign per §9 governance flow)**

- `03-brand-voice.md` §2.3 — RCP one-liner changed from "敏捷验证实验室——24 小时内拿到医生反馈" to "**敏捷验证实验室——按需触达医生，加速高价值医学任务**" (subject shifted from physician outputs to industry-side platform usage)
- `03-brand-voice.md` §3.4 — "24h 内反馈" example replaced by "敏捷完成医学任务"; new sub-rule added: any external use of "24h" / "24 小时" wording requires `(n=X, source)` annotation, otherwise reframe as "敏捷" / "目标: 24h"
- `03-brand-voice.md` §5.2 — heading expanded from "药企受众" to "**药企与产业方受众**"; RCP audience scope formally broadened to pharma marketing/medical/KA + consulting/research firms + AI companies; RCP row pain/value/CTA updated accordingly
- `docs/voice/brand-voice.md` — manually synced; `scripts/sync-docs.mjs` should be run to regenerate `docs/.vitepress/dist/` build artifacts
- Versioning — voice-layer change requires Market Lead + Legal dual-sign before formal v0.2 release; CHANGELOG note in `03-brand-voice.md` flags this

**2026-05-07 — Open question #5 resolved: "梅斯 AI" / "MedSci AI" approved**

- `02-brand-architecture.md` §5.4 — added carve-out: "梅斯 AI" / "MedSci AI" is the approved AI sub-brand umbrella shorthand for external materials. Constraints: must appear as the full umbrella unit (no splitting into "梅斯" + "AI"); single-product context still uses product names; parent-brand formal signature still uses "梅斯健康" / "MedSci Healthcare"
- `03-brand-voice.md` §2.1 — added a clarifying note box cross-referencing `02` §5.4
- `docs/voice/brand-voice.md` — synced
- Open question #5 in this report's High Priority list is marked ✅ RESOLVED

**2026-05-07 — Open questions #1-#4 resolved: full High Priority backlog cleared**

- **#1 DI primary lock** — `00-architecture-locked.md` §3: "暂定" flag removed from `#0891B2`; legacy-issues bullet rewritten to reflect the lock. Any future change requires major RFC.
- **#2 DI icon C readability** — `02-brand-architecture.md` §1.3: appended a Sponsor-assessed note that variant C's dual-ring is acceptable down to wm-min (16px); no product-specific degrade exception introduced.
- **#3 CitationSidePanel ownership** — `05-rectification-checklist.md` §5: added a decision callout that `<CitationSidePanel />` is delivered as a SHARED component in `@yogyoung-code/ai-brand-kit` v0.2; products integrate via the existing `onActivate` callback in `NanoCitation.tsx`. New v0.2 build task added to the parallel-tasks table.
- **#4 CN policy for error/system strings** — `03-brand-voice.md` §1.1: added two new rows to the language matrix (CN for user-visible error/exception/empty-state copy; EN for code-layer identifiers) plus a decision box with the unified rule: "is the string translated for users? → CN; developer/ops only → EN".
- `docs/voice/brand-voice.md` — synced
- All five High Priority open questions are now ✅ RESOLVED. Medium/Low priority items remain.

**2026-05-07 — Open question #7 resolved: Progressive Disclosure mobile rule revised**

- `04-visual-system.md` §6.3 — mobile default-expand rule changed from "L1 only" to "**L1 + L2 expanded**" (aligned with desktop). Rationale: bedside/rounding mobile usage prioritizes L2 evidence visibility over vertical-space economy; an extra tap is real friction in clinical rhythm. L3 (source detail) remains collapsed.
- `04-visual-system.md` §6.4 (new) — shared `<Disclosure>` component contract for `@yogyoung-code/ai-brand-kit` v0.2: `defaultExpanded: 'L1' | 'L1+L2' | 'all'` prop; built-in `matchMedia('(max-width: 768px)')` breakpoint detection; `urgency="warning"` force-all mode; `onToggle` callback for analytics.
- `05-rectification-checklist.md` §5 — added v0.2 build task (0.5–1 day) for the `<Disclosure>` upgrade.
- `docs/visual/visual-system.md` — synced.

**2026-05-07 — Low-priority backlog cleanup: #8/#9/#10 resolved or deferred, #11 user-execution**

- **#8** — "24h" wording rule was already written to `03-brand-voice.md` §3.4 in the RCP batch; formally marked resolved.
- **#9 NPM registry → GitHub Packages.** `react/package.json` updated with `publishConfig.registry: https://npm.pkg.github.com` + `publishConfig.access: restricted` + `repository.url`. Full publish runbook added to `06-governance.md` §5.4 (PAT scopes, `.npmrc` config, first-publish steps, version-bump rules).
- **#10 VitePress deployment** — deferred per user; local `npm run dev` is the current path. `06-governance.md` §5.2 note updated.
- **#11 Screenshot archive** — user will run locally. Copy-pasteable command block:
  ```bash
  cd react && npm install && npm run build       # ensure dist/ is fresh
  cd .. && npm install puppeteer                   # ~200MB chromium first install
  node scripts/build-react-demo-screenshots.mjs    # produces 9 PNGs + manifest.json
  ```
  After completion, `preview/screenshots/index.html` auto-renders the matrix from `manifest.json`. The script + infrastructure are already in place (`scripts/build-react-demo-screenshots.mjs`, `preview/screenshots/`).

**2026-05-07 — Open question #6 resolved + animation asset library expanded**

- User uploaded **4 animation files** in two batches (logo + icon-only for both DE and SE). All archived to `preview/`:
  - `de-logo-animation.html` — DE icon + wordmark intro animation. Color update: stroke + `.text-deep` `#2c65c9` → `#2563EB` (`--de-primary`).
  - `se-logo-animation.html` — SE icon + wordmark intro animation. Color update: CSS var `--primary-purple` `#893BE1` and `--secondary-purple` `#893CE1` (typo of former) both consolidated to `#9333EA` (`--se-primary`); 5 path fills updated. **Wordmark text fix:** original file had "Deep"+"Evidence" (template copy-paste error); corrected to "Seek"+"Evidence" with class `.text-deep` renamed to `.text-seek`.
  - `de-icon-animation.html` — DE icon-only feature animation (heartbeat pulse + purple→indigo→blue gradient ring). **No color changes needed** — already used `#2563EB` and matching shadow.
  - `se-icon-animation.html` — SE icon-only feature animation (sound-wave breathing + blue→indigo→purple variable-speed chase ring). Color update: `--primary-purple` `#893BE1` → `#9333EA`.
- **Gradient endpoint resolved 2026-05-07:** purple endpoint `#A855F7` → `#9333EA` in BOTH `de-icon-animation.html` and `se-icon-animation.html`. Sponsor decision: brand-color token (locked SE primary, Tailwind purple-600) takes priority over cross-product gradient mirror aesthetics. Cross-product mirror is preserved (DE goes purple→blue, SE goes blue→purple) — only the purple anchor was tightened.
- `02-brand-architecture.md` §1.3 — DeepEvidence and SeekEvidence rows updated to reference both logo and icon-only animation assets.
- `HANDOFF.md` §6 known pitfalls + §10.4 dependencies — old-color line struck through and replaced with the 4-asset summary.
