#!/bin/bash

cd ../zoom-core
yarn run build

cd ../zoom-web
yarn upgrade zoom
