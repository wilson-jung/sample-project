#!/usr/bin/env bash

set -o errexit

SCRIPT_DIR=$(dirname $0)
ROOT_DIR=$(dirname $SCRIPT_DIR)
OUT_DIR="$ROOT_DIR/generated"
PROTO_DIR="$ROOT_DIR/proto"

rm -f -r -v ${OUT_DIR}/**/*.ts
rm -f -r -v ${OUT_DIR}/*.ts

mkdir -p ${OUT_DIR}

protoc --plugin=$ROOT_DIR/plugin.sh --ts_proto_out=$OUT_DIR --proto_path $PROTO_DIR $PROTO_DIR/*.proto $PROTO_DIR/**/*.proto --ts_proto_opt=forceLong=string

yarn node ./bin/gen-index.js
