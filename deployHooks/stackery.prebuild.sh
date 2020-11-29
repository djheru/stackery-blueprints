#!/bin/bash

echo "prebuild"
yarn
for i in build/*; do
  (cd $i; npm init -y)
done