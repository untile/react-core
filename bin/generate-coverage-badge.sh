#!/bin/bash

# Initial COLOR.
COLOR="grey"

echo "🧪 Collecting tests coverage data..."

# Run vitest and generate coverage output.
COVERAGE_OUTPUT=$(yarn test | awk '/All files/ {print $4}')

# Extract coverage percentage for all files
COVERAGE=$(echo "$COVERAGE_OUTPUT" | awk -F. '{print $1}')

echo "🎯 Coverage of: $COVERAGE_OUTPUT%"

# Check if coverage is a valid number
if ! [[ "$COVERAGE" =~ ^[0-9]+$ ]]; then
    echo "Error: coverage percentage is not a valid number"
    exit 1
fi

# Update COLOR based on coverage.
if (( COVERAGE < 50 )); then
    COLOR="red"
elif (( COVERAGE < 80 )); then
    COLOR="orange"
else
    COLOR="green"
fi

echo "🚚 Fetching coverage badge from Shield.io..."
echo ""

# Generate badge URL using shield.io.
BADGE_URL="https://img.shields.io/badge/coverage-${COVERAGE_OUTPUT}%25-${COLOR}.svg?style=for-the-badge"

# Download badge image to folder.
curl $BADGE_URL -o docs/assets/coverage-badge.svg

echo ""
echo "✅ Coverage Badge generated successfully!"
