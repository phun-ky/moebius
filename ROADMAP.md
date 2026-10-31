# Roadmap

What moebius intends to do, and not do, from October 2026 to October 2027. It's a plan, not a promise: priorities can change, and changes to this file are made in pull requests like any other. Individual pieces of work are tracked as [GitHub issues](https://github.com/phun-ky/moebius/issues), grouped in milestones.

## Planned

### Keeping 2.x stable

- **No breaking changes in 2.x.** The current major is supported as a whole and the previous one gets high and critical security fixes for 6 months; see the [security policy](SECURITY.md#supported-versions).
- **Deprecations before removals:** a deprecated API keeps working through one full major.

### 3.0

The breaking changes are collected in the [3.0 milestone](https://github.com/phun-ky/moebius/milestone/7):

- **Runtime libraries as dependencies:** `chroma-js` and `@phun-ky/typeof` installed from npm instead of bundled into `dist`, so `npm audit` and Dependabot see them, and `nearest-color` replaced by moebius's own code ([#204](https://github.com/phun-ky/moebius/issues/204)).
- **No default color names service:** `Moebius()` stops fetching names from a deprecated third-party URL ([#184](https://github.com/phun-ky/moebius/issues/184)).
- **An `exports` map** ([#183](https://github.com/phun-ky/moebius/issues/183)).
- **Node.js 22.12 or later**, where `require()` of an ES module works ([#209](https://github.com/phun-ky/moebius/issues/209)).
- **An API review:** consistent input checks and errors ([#215](https://github.com/phun-ky/moebius/issues/215)).
- **Release notes and an upgrading guide** with before and after code for every breaking change ([#216](https://github.com/phun-ky/moebius/issues/216)).

### Project health

- **OpenSSF Best Practices:** the passing badge, then silver and OSPS Baseline ([#182](https://github.com/phun-ky/moebius/issues/182)).
- **Coverage towards 99% of lines, 100% of functions and 95% of branches.** CI enforces the current numbers as a floor, raised as tests are added.
- **TypeScript 7**, once the tools the build, docs and lint depend on support it.
- **A second maintainer**, so that pull requests get a review from someone other than the author and access to the project doesn't rest on one person; see [governance](GOVERNANCE.md#continuity).

## Considered, not scheduled

Ideas that fit the project but have no date. Each would be discussed in an issue first, and any breaking change waits for a major with an upgrading guide.

- **A timeout and cancellation for loading color names**, with an `AbortSignal`. Today the request waits as long as the server does; see the [security policy](SECURITY.md#security-expectations).

## Not planned

- **Bundling runtime dependencies after 3.0.** Runtime dependencies are declared and installed from npm. Without a bundler, use an import map or a CDN that resolves bare imports.
- **Provenance files on GitHub releases.** npm provenance proves where each release came from; OpenSSF Scorecard's Signed-Releases check stays low on purpose.
- **Collecting data.** The package doesn't collect, store or send data anywhere. Its only network request loads color names; see the [security policy](SECURITY.md#security-expectations).
