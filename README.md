# react-core

Untile-flavored components, hooks, styles and utils to be used in react projects.

[![npm version](https://img.shields.io/npm/v/@untile/react-core.svg?style=flat-square)](https://www.npmjs.com/package/@untile/react-core)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/react-core/blob/main/LICENSE)

## Installation

```sh
yarn add @untile/react-core
```

## Documentation

- [React components](docs/components/README.md)
- [React hooks](docs/hooks/README.md)
- [Styles](docs/styles/README.md)
- [utils](docs/utils/README.md)

## Project setup

### Requirements

- Node.js >= 14.18
- NPM >= please-use-yarn
- Yarn >= 1.22.0

### Install dependencies

```sh
yarn
```

### Lint

```sh
yarn lint
```

### Tests

```sh
yarn test
```

### Build

```sh
yarn build
```

### Release

Be sure to have configured `GITHUB_TOKEN` in your globals.

```sh
npm version [<new version> | major | minor | patch] -m "Release %s"
git push origin master && git push --tags
```
