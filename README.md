<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/react-core
</h1>

<h4 align="center">
  Untile-flavored components 📦, hooks 🪝, styles ✨ and utils 🛠️ to be used in react projects.
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/react-core">
    <img src="https://img.shields.io/npm/v/@untile/react-core.svg?style=for-the-badge" alt="NPM version" />
  </a>
  <a href="https://github.com/untile/js-configs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="Untile js-config is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=untiledigital">
    <img src="https://img.shields.io/twitter/follow/untiledigital.svg?label=Follow%20@untiledigital&style=for-the-badge" alt="Follow @untiledigital" />
  </a>
</p>


## Installation

```sh
yarn add @untile/react-core
```

## Documentation

- [📦 Components](docs/components/README.md)
- [🪝 Hooks](docs/hooks/README.md)
- [✨ Styles](docs/styles/README.md)
- [🛠️ Utils](docs/utils/README.md)

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
