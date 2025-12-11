#!/usr/bin/env bash

find . \( -name '*.json' -o -name '*.geojson' \) -not -path './node_modules/*' -exec yq -i -o json {} \;
find . \( -name '*.yaml' -o -name '*.yml' \) -exec yq -i {} \;
npm run format
