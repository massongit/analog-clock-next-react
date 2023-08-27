#!/usr/bin/env bash

sed -i -e "s/\"node\": \".*\"/\"node\": \"^${NODE_VERSION}\"/g" package.json
sed -i -e "s/\"npm\": \".*\"/\"npm\": \"^${NPM_VERSION}\"/g" package.json
