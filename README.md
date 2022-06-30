# react-core

Components, hooks and utils to be used in react projects.

## Project setup

### Requirements

- Node.js >= 14.17.0
- NPM >= please-use-yarn
- Yarn >= 1.22.0

### Install dependencies

```sh
yarn bootstrap
```

Or can install/manage dependencies for each package.

```sh
yarn bootstrap:[<package> | components | hooks | styles | utils ]
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
yarn build:[<package> | components | hooks | styles | utils ]
```

### Release

Be sure to have configured `GITHUB_TOKEN` in your globals.

```sh
yarn release:[<package> | components | hooks | styles | utils ] [<new version> | major | minor | patch]
git add .
git commit --amend --no-edit
git push origin master && git push --tags
```
