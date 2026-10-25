# Security Policy

Until 3.0, `dist/moebius.js` bundles three runtime libraries: `chroma-js`, `nearest-color` and `@phun-ky/typeof`. They aren't installed separately, so your `npm audit` can't see them; fixes to them reach you through a moebius release. Each release attaches an SBOM listing them, and their licences are in `dist/THIRD_PARTY_LICENSES.txt`. From 3.0 they're regular dependencies instead ([#204](https://github.com/phun-ky/moebius/issues/204)). How dependencies are chosen, tracked and kept clear of known vulnerabilities is described under [Dependencies](#dependencies).

## Supported Versions

Support follows the major version:

| Release                  | Supported |
| ------------------------ | --------- |
| `2.x`, the current major | ✅        |
| `1.x`                    | ❌        |

- **The current major is supported as a whole.** Fixes are released as a new patch or minor of it, and upgrading within a major never breaks your code.
- **The previous major gets fixes for high and critical vulnerabilities for 6 months** after the next major is released, as a patch on its latest release. For `1.x`, that period ended in November 2025 (2.0.0 was released on 5 May 2025).
- **Security comes before the deprecation grace period.** If a vulnerability can't be fixed without breaking an API, the fix may change or remove it in a patch or minor release instead of waiting for a major. The change is kept as small as possible, and the advisory and the release notes say what changed and why.

To get a fix, upgrade to the newest release of your major.

## Reporting a Vulnerability

Report vulnerabilities privately, either with GitHub's [private vulnerability reporting](https://github.com/phun-ky/moebius/security/advisories/new) or by email to <security@phun-ky.net>. Please don't open a public issue for a security problem.

## How Reports Are Handled

1. **Acknowledgement:** you'll get a reply within 7 days confirming the report was received.
2. **Assessment:** the maintainer reproduces the issue and judges its severity, and may ask you for details.
3. **Fix:** a fix is developed in a private GitHub security advisory and released as a new version. The aim is a fix within 30 days for serious issues.
4. **Disclosure:** the advisory is published when the fix is released, with a CVE where one applies. Please keep the issue private until then.
5. **Credit:** reporters are credited in the advisory and the release notes, unless they ask to stay anonymous.

## Security Expectations

`Moebius()` loads color names and returns classes that build palettes from the colors you give them.

What you can rely on:

- **Network access only for color names.** The only network request moebius makes is the one that loads color names in `Moebius()`. Pass `colorNames` as a map or an array of names, or `false`, and nothing is requested. Pass a URL, and only that URL is requested.
- **Loaded names are checked.** A failed response throws an `Error` with the status, a response that isn't JSON throws a `TypeError`, names in an unsupported shape throw a `TypeError`, and an empty list throws a `RangeError`. Options that aren't an object throw a `TypeError`.
- **No dynamic code and no storage.** No `eval`, `new Function` or loading of code, and nothing is written to globals, storage or the file system. `MoebiusSVGHelper` creates SVG elements with `document` only when you call it.
- **Releases are traceable.** Every release is built and published from GitHub Actions, with signed provenance (see below).

What you can't rely on:

- **The default color names source.** Without `colorNames`, `Moebius()` fetches names from `https://color-names.herokuapp.com/v1/`, a third-party service that is deprecated, and logs a warning once. Pass your own names to avoid it; 3.0 stops using it ([#184](https://github.com/phun-ky/moebius/issues/184)).
- **A timeout.** The color names request has no timeout, so `Moebius()` waits as long as the server does.
- **Checked colors.** Colors are parsed by `chroma-js`: an invalid color string throws its `Error`, `null` and `undefined` throw a `TypeError` from inside the library, and numbers are accepted as colors (`42` is `#00002a`). Check colors that come from users before passing them in.
- **Unpredictable randomness.** Random colors, shuffles and SVG element IDs use `Math.random`, which is not cryptographically secure. Don't use them for anything secret.

## Verifying Releases

Every release is published from GitHub Actions with npm trusted publishing, and carries a signed provenance attestation (Sigstore) that links it to the commit and workflow run that built it. To verify the package you've installed:

```sh
npm audit signatures
```

The provenance must name the repository `phun-ky/moebius` and the workflow `.github/workflows/publish.yml`. The package's page on npm shows this under "Provenance", and `npm view @phun-ky/moebius@<version> dist.attestations` lists the attestations.

Each GitHub release also has a software bill of materials attached, in CycloneDX format (`moebius-<version>.cdx.json`), listing the libraries bundled into `dist`.

## Dependencies

**Choosing them.** As few runtime dependencies as possible, and a new one is discussed in an issue first. It must be widely used, actively maintained and under an OSI-approved licence compatible with MIT; strong copyleft licences (GPL, AGPL) are not accepted. In 2.x, rollup bundles the runtime libraries into `dist`; from 3.0 they are declared in `dependencies` and never bundled ([#204](https://github.com/phun-ky/moebius/issues/204)). Development dependencies follow the same rules, judged more loosely.

**Obtaining them.** Packages come only from the npm registry, with exact versions locked in `package-lock.json` and installed with `npm ci` in CI. GitHub Actions are pinned to commit SHAs.

**Tracking them.** Dependabot proposes version updates weekly, two weeks after a version is published, and security updates as soon as an advisory is published. Every pull request runs [dependency review](https://github.com/phun-ky/moebius/blob/main/.github/workflows/dependency-review.yml), and every release runs `npm audit` on runtime dependencies first. In 2.x the bundled libraries are development dependencies, so dependency review, which checks development dependencies too, is what catches them.

**Fixing known vulnerabilities.** Findings are checked against the GitHub Advisory Database:

| Finding                    | Where                             | What happens                                                                                                       |
| -------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Critical or high           | Runtime or bundled dependency     | Blocks merging (dependency review); from 3.0 also blocks releasing (`npm audit`); fixed and released within 7 days |
| Critical or high           | Development dependency            | Blocks merging when introduced; an existing one is fixed within 30 days                                            |
| Moderate or low            | Any dependency                    | Fixed with the next update, within 90 days                                                                         |
| Licence outside the policy | New runtime or bundled dependency | Not merged                                                                                                         |

**Accepted exceptions.** A vulnerability that can't be fixed yet and can't be exploited through this project is allowed in dependency review and listed here. Each one is removed as soon as a fix is reachable. None of them ship in the published package.

| Advisory                                                                 | Package             | Why it's accepted                                                                 | Remove when                                                         |
| ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) | braces (via putout) | Every version is affected and no fix exists. Only our own glob patterns reach it. | A fixed braces version is released, or putout stops depending on it |

## Code Scanning

CodeQL analyses every pull request and every push to `main`. The ruleset on `main` blocks merging while CodeQL reports an error, or a security alert of high or critical severity. Other CodeQL alerts are fixed within 90 days, or dismissed with the reason when they are false positives. OpenSSF Scorecard runs on every push to `main`, with results at <https://scorecard.dev/viewer/?uri=github.com/phun-ky/moebius>.

## Secrets

The project keeps as few secrets as possible:

| Secret          | Used by       | For                                                   |
| --------------- | ------------- | ----------------------------------------------------- |
| `GH_TOKEN`      | `publish.yml` | Pushing release commits and tags, and GitHub releases |
| `CODECOV_TOKEN` | `check.yml`   | Uploading coverage reports                            |

Publishing to npm needs no secret: it uses short-lived OIDC tokens from GitHub.

- **Storage:** secrets are kept only as encrypted GitHub Actions secrets, never in the repository.
- **Access:** only the maintainer can view or change them, and they are not available to workflows run from forks.
- **Rotation:** at least once a year, and immediately if one may have been exposed.
