#!/usr/bin/env bash

node_version="$(cat .node-version)"
echo "Node.js version:" "${node_version}"
echo "node_version=${node_version}" >>"${GITHUB_OUTPUT}"
