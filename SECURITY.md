# Security Policy

I strive to keep this as secure as possible, but since this is an app that has zero dependencies, most (if not all) updates are directed to the dev dependencies.

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

| Advisory                                                                 | Package              | Why it's accepted                                                                 | Remove when                                                         |
| ------------------------------------------------------------------------ | -------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) | braces (via putout)  | Every version is affected and no fix exists. Only our own glob patterns reach it. | A fixed braces version is released, or putout stops depending on it |
| [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff) | vite (via vitepress) | Docs dev server on Windows only. vitepress 1.6.4, the latest stable, pins vite 5. | vitepress ships a stable release on a fixed vite                    |
| [GHSA-587h-7wmj-h5pm](https://github.com/advisories/GHSA-587h-7wmj-h5pm) | vite (via vitepress) | Docs dev server on Windows only, same as above.                                   | vitepress ships a stable release on a fixed vite                    |
