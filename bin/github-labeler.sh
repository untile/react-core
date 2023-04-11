#!/bin/bash

# Define the packages directory.
folder_dir="src"

# Create the .github directory if it does not exist.
mkdir -p .github

# Remove the labeler.yml file if it exists.
rm .github/labeler.yml

# Create or clear the labeler.yml file.
echo "# Auto-generated labeler.yml" > .github/labeler.yml

# Iterate through subdirectories in 'packages' and generate entries for labeler.yml file.
for folder in $(find "$folder_dir" -mindepth 1 -maxdepth 1 -type d); do
  name=$(basename "$folder")
  echo "Generating entry for package: $name"

  # Add entry for the package to the labeler.yml file.
  cat <<EOT >> .github/labeler.yml

# Label for package '$name'.
$name:
  - $folder_dir/$name/**/*
EOT
done

echo "Generated .github/labeler.yml based on monorepo packages."
