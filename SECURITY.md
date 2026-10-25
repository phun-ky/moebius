# Security Policy

I strive to keep this as secure as possible. Until 3.0, `dist/moebius.js` bundles three runtime libraries: `chroma-js`, `nearest-color` and `@phun-ky/typeof`. They aren't installed separately, so your `npm audit` can't see them; fixes to them reach you through a moebius release. Each release attaches an SBOM listing them, and their licences are in `dist/THIRD_PARTY_LICENSES.txt`. From 3.0 they're regular dependencies instead (#204).

## Supported Versions

These are the versions that is updated with security patches.

| Version | Supported          |
| ------- | ------------------ |
| >= 1.0  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

Report vulnerabilities to <security@phun-ky.net>

## Accepted exceptions

Known high vulnerabilities in development dependencies that can't be fixed yet. None of them ship in the published package. Pull requests are checked by dependency review, which allows exactly these advisories.

| Advisory                                                                 | Package             | Why it's accepted                                                                 | Remove when                                                         |
| ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) | braces (via putout) | Every version is affected and no fix exists. Only our own glob patterns reach it. | A fixed braces version is released, or putout stops depending on it |
