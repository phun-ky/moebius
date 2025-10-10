# Development

::: info

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/moebius/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/moebius/blob/main/CODE_OF_CONDUCT.md).

:::

## Install

To develop **Möbius**, fork it, and then in the project root:

```shell-session
npm i
```

## Build

```shell-session
npm run build
```

If you want to watch:

```shell-session
npm run watch
```

## Test the code

```shell-session
npm test
```

## Commit

To commit, we use
[semantic git commits with Commitizen](https://github.com/streamich/git-cz). So
please run this when you are ready to commit your staged files:

```shell-session
npm run commit
```

When you are done with your development, create a PR with the original
repository :)

## Clean code

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and
[Putout](https://github.com/coderaiser/putout) is used:

```shell-session
// to check for code issues
npm run style:code
// to format code with ESLint and Prettier
npm run style:format
// to lint code with ESLint and Prettier
npm run style:lint
```
