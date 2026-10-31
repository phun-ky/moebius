# Contributing to @phun-ky/moebius

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Table of Contents

- [Contributing to @phun-ky/moebius](#contributing-to-phun-kymoebius)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [I Have a Question](#i-have-a-question)
  - [I Want To Contribute](#i-want-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
      - [Before Submitting a Bug Report](#before-submitting-a-bug-report)
      - [How Do I Submit a Good Bug Report?](#how-do-i-submit-a-good-bug-report)
    - [Suggesting Enhancements](#suggesting-enhancements)
      - [Before Submitting an Enhancement](#before-submitting-an-enhancement)
      - [How Do I Submit a Good Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
    - [Contributing Code](#contributing-code)
      - [Architecture](#architecture)
      - [Development](#development)
      - [Coding Style](#coding-style)
      - [Tests](#tests)
      - [Developer Certificate of Origin](#developer-certificate-of-origin)
      - [Commits and Pull Requests](#commits-and-pull-requests)
      - [Releases](#releases)
  - [Attribution](#attribution)

## Code of Conduct

This project and everyone participating in it is governed by the
[@phun-ky/moebius Code of Conduct](https://github.com/phun-ky/moebius/blob/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behaviour
to <code-of-conduct@phun-ky.net>.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](https://github.com/phun-ky/moebius).

Before you ask a question, it is best to search for existing [Issues](https://github.com/phun-ky/moebius/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/phun-ky/moebius/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

<!--
You might want to create a separate issue tag for questions and include it in this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

## I Want To Contribute

> ### Legal Notice
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license. You confirm this on every commit by signing it off under the [Developer Certificate of Origin](#developer-certificate-of-origin).

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://github.com/phun-ky/moebius). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/phun-ky/moebius/issues?q=is%3Aissue).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of the interpreter, compiler, SDK, runtime environment, package manager, depending on what seems relevant.
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead, report them privately as described in the [security policy](SECURITY.md#reporting-a-vulnerability).

<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/phun-ky/moebius/issues/new). (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)
- Explain the behaviour you would expect and the actual behaviour.
- Please provide as much context as possible and describe the _reproduction steps_ that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `pending: need repro`. Bugs with the `pending: need repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `🐛 needs fix`, as well as possibly other tags (such as `problems: 🧨 critical`), and the issue will be left to be implemented by someone.

<!-- You might want to create an issue template for bugs and errors that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for @phun-ky/moebius, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](https://github.com/phun-ky/moebius) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/phun-ky/moebius/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/phun-ky/moebius/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behaviour** and **explain which behaviour you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux. <!-- this should only be included if the project has a GUI -->
- **Explain why this enhancement would be useful** to most @phun-ky/moebius users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

<!-- You might want to create an issue template for enhancement suggestions that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->

### Contributing Code

Larger changes are best discussed in an issue first, so the work fits the [roadmap](ROADMAP.md).

#### Architecture

- **`src/main.ts`** exports `Moebius()`: it loads color names (from the `colorNames` option, or the deprecated default URL) and returns the classes below, with color naming wired in.
- **`src/classes`** holds `MoebiusColor` (one color in every color space), `MoebiusPalettes` (every palette for a base color) and `MoebiusSVGHelper` (SVG pie charts of palettes), with the classes they use.
- **`src/features`** has one module per palette type (analogous, complement, interpolate, luminance shift, and so on), and **`src/utils`** the color conversions, color names and SVG helpers.
- **`rollup.config.js`** builds `dist/moebius.js`, an ES module that imports its runtime dependencies, `chroma-js` and `@phun-ky/typeof`. TypeScript writes the declarations to `dist/types`, and `scripts/fix-declaration-imports.mjs` makes their imports work in Node.
- **Dependencies are declared, never bundled.** Every package the published code imports goes in `dependencies` with a caret range, and rollup keeps it external; `devDependencies` are only for build, test and docs tooling. `npm run check:pack` fails when `dist` imports anything else or embeds code from `node_modules`.
- **`docs`** is the [documentation site](https://xn--mbius-jua.dev/), built with VitePress: the guide in `docs/guide`, and the API reference that TypeDoc generates into `docs/api` from the source comments.

#### Development

You need Node.js 24 and npm 11.

```sh
npm ci
npm run build
npm test
npm run check:pack
```

| Command                   | What it does                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`           | Builds `dist` with rollup: the ES module and the types                                                                              |
| `npm run watch`           | Rebuilds on every change                                                                                                            |
| `npm test`                | Runs the tests                                                                                                                      |
| `npm run test:ci`         | Runs the tests with coverage, as CI does                                                                                            |
| `npm run typecheck`       | Type-checks the source and the tests                                                                                                |
| `npm run style:lint`      | Lints every file, Markdown included, with ESLint, and checks the source format with Prettier                                        |
| `npm run style:format`    | Fixes what `style:lint` can fix                                                                                                     |
| `npm run check:pack`      | Packs the package, installs it in an empty project, imports it, and checks the published types and that dependencies aren't bundled |
| `npm run docs:check`      | Checks the API documentation with TypeDoc, and compiles and runs every example in the guide                                         |
| `npm run docs:dev`        | Generates the API docs and serves the documentation site locally                                                                    |
| `npm run docs:build`      | Builds the documentation site                                                                                                       |
| `npm run release:dry-run` | Shows whether merging would release, and the planned version and changelog                                                          |
| `npm run commit`          | Helps write a Conventional Commit message                                                                                           |

Run `npm run check:pack` and `npm run docs:check` after `npm run build`, and `npm run docs:build` after `npm run docs:gen`.

#### Coding Style

Code follows the project's [ESLint](https://eslint.org/) configuration (`eslint-config-phun-ky`), [Prettier](https://prettier.io/) formatting and TypeScript in strict mode. A contribution must pass `npm run style:lint`, `npm run typecheck` and `npm run docs:check` with no errors. All of them run in CI on every pull request, and a pull request that fails them can't be merged.

#### Tests

- **New functionality must come with tests** in a `__tests__` folder next to the code, run by `npm test` with Node's test runner.
- **Bug fixes must come with a regression test** that fails without the fix.
- **Packaging changes** are tested by `npm run check:pack`, and examples in the guide by `npm run docs:check`; both run in CI.
- **Coverage must not drop.** `npm run test:ci` fails when the source falls below 94% of lines, 99% of functions or 92% of branches. These floors are raised as tests are added, towards 99%, 100% and 95%, and CI uploads a coverage report for every pull request.

#### Developer Certificate of Origin

Every commit must be signed off under the [Developer Certificate of Origin](https://developercertificate.org/) (DCO): a statement that you wrote the change, or otherwise have the right to submit it under the project's license. You agree to it by adding a `Signed-off-by` line with your name and email to the commit message:

```text
Signed-off-by: Your Name <you@example.com>
```

- **Per commit:** `git commit -s` adds the line for you.
- **Always:** `npm ci` sets `core.hooksPath` to `.githooks`, and the hook in `.githooks/prepare-commit-msg` adds the line to every commit, including those made by `npm run commit` or your editor.
- **Forgot?** Sign off every commit on your branch and push again: `git rebase --signoff main`, then `git push --force-with-lease`.

The DCO check on every pull request fails if a commit isn't signed off. Commits by Dependabot are exempt.

#### Commits and Pull Requests

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, ...). `npm run commit` helps write them. Releases and the changelog are generated from them (see [Releases](#releases)), so pick the type that matches the change. A breaking change needs a `type!:` and a `BREAKING CHANGE:` footer that says what to change.
- Deprecating an API isn't a breaking change, so it can land in any release. Mark it `@deprecated` with its replacement and the major it will be removed in. It keeps working through one full major: deprecated during 2.x or at 3.0, it can be removed in 4.0 at the earliest.
- Don't commit regenerated API docs (`docs/api`); each release regenerates them. Run `npm run docs:check` instead.
- Open a pull request against `main`. The Checks workflow lints, type-checks, builds, packs, checks the docs, builds the documentation site and runs the tests; dependency review, CodeQL and the DCO check also run. All of them must pass.

#### Releases

The maintainer merges pull requests, and releases follow automatically from GitHub Actions:

1. When a merged pull request changes what gets published, the publish workflow checks whether there is anything to release: a `feat`, `fix`, `perf` or `revert` commit, or a breaking change, that touches the published files. Other changes wait for the next release.
2. If so, release-it picks the version from the commits, updates the changelog, builds and checks the package, and publishes it to npm with signed provenance.
3. The release commit and tag go to `main`, and a GitHub release is created with a software bill of materials attached.

Breaking changes for the next major go into pull requests against its `release/<major>` branch (for example `release/3.0`), which reaches `main` in one merge, so the major is released complete. Every merge to `main` also rebuilds and deploys the documentation site. `npm run release:dry-run` shows what a merge would release.

## Attribution

This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!
