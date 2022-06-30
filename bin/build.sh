#!/usr/bin/env sh

build() {
  # Remove dist folder.
  rm -rf dist

  # Generate commonjs modules.
  tsc --project tsconfig.build.json --declaration false --module commonjs --target es6 --outDir dist/cjs

  # Generate ems modules.
  tsc --project tsconfig.build.json --declaration false --module esnext --target es6 --outDir dist/esm

  # Generate types.
  tsc --project tsconfig.build.json --declaration --emitDeclarationOnly --outDir dist/types
}

build
