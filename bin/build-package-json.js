#!/usr/bin/env node

/**
 * Module dependencies.
 */

const fs = require('fs');
const path = require('path');

/**
 * Module name.
 */

const moduleName = fs.readdirSync('src').map(module => path.parse(module).name); // eslint-disable-line no-sync

/**
 * Generate modules config in package.json file.
 */

fs.readFile('package.json', (error, content) => {
  if (error) {
    throw error;
  }

  const data = JSON.stringify({
    ...JSON.parse(content),
    exports: moduleName.reduce((acc, name) => ({
      ...acc,
      [`./${name}`]: {
        import: `./dist/esm/${name}/index.js`,
        require: `./dist/cjs/${name}/index.js`
      }
    }), {}),
    typesVersions: {
      '*': moduleName.reduce((acc, name) => ({
        ...acc,
        [name]: [`dist/types/${name}/index.d.ts`]
      }), {})
    }
  }, undefined, 2);

  fs.writeFile('package.json', data, error => {
    if (error) {
      throw error;
    }
  });
});
