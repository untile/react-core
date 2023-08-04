#!/bin/bash

# Define text colors
GREEN='\033[0;32m'
NC='\033[0m' # No Color

(
  # Escape on error.
  set -e

  echo "✨ Build started..."

  # Remove dist folder.
  echo "🚮 Cleaning up dist folder..."
  rm -rf dist

  # Generate commonjs modules.
  echo "📦 Generating commonjs modules..."
  tsc --project tsconfig.build.json --declaration false --module commonjs --target es6 --outDir dist/cjs
  resolve-tspaths --project tsconfig.build.json --out dist/cjs

  # Generate esm modules.
  echo "📦 Generating esm modules..."
  tsc --project tsconfig.build.json --declaration false --module esnext --target es6 --outDir dist/esm
  resolve-tspaths --project tsconfig.build.json --out dist/ems

  # Generate types.
  echo "📦 Generating types..."
  tsc --project tsconfig.build.json --declaration --emitDeclarationOnly --outDir dist/types
  resolve-tspaths --project tsconfig.build.json --out dist/types

  # Update package.json.
  echo "🛂 Updating \"package.json\"..."
  node bin/build-package-json.js
  sort-package-json

  echo -e "\n✅ ${GREEN}Build done!${NC}"
)
