#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires  */
/* eslint-disable no-sync */

/**
 * Module dependencies.
 */

const fs = require('fs');
const path = require('path');

/**
 * Get modules.
 */

const getmodules = () => {
  const directoryPath = 'src';
  const content = fs.readdirSync(directoryPath);
  const structure = content
    .map(entry => {
      const entryPath = path.join(directoryPath, entry);
      const isDirectory = fs.statSync(entryPath).isDirectory();

      if (isDirectory) {
        const subContent = fs.readdirSync(entryPath);

        return subContent.map(subEntry => `${entry}/${subEntry}`);
      }

      return [];
    })
    .flat();

  return structure;
};

/**
 * Generate modules config in package.json file.
 */

fs.readFile('package.json', (error, content) => {
  if (error) {
    throw error;
  }

  const modules = getmodules();
  const data = JSON.stringify(
    {
      ...JSON.parse(content),
      exports: modules.reduce(
        (acc, name) => ({
          ...acc,
          [`./${name}`]: {
            import: `./dist/esm/${name}/index.js`,
            require: `./dist/cjs/${name}/index.js`
          }
        }),
        {}
      ),
      typesVersions: {
        '*': modules.reduce(
          (acc, name) => ({
            ...acc,
            [name]: [`dist/types/${name}/index.d.ts`]
          }),
          {}
        )
      }
    },
    undefined,
    2
  );

  fs.writeFile('package.json', data, error => {
    if (error) {
      throw error;
    }
  });
});
