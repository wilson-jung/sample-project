#!/usr/bin/env bash
if [[ -z "${VCNC_TADA_SERVER_DIR_FOR_PROTOCOL}" ]]; then
  echo "VCNC_TADA_SERVER_DIR_FOR_PROTOCOL environment variable is empty."
  exit 1
fi

BASEDIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
PROTOCOL_DIR="$VCNC_TADA_SERVER_DIR_FOR_PROTOCOL/subprojects/protocol/src/main/proto"

PARAM="b:s"
branch="master"

while getopts $PARAM opt; do
  case $opt in
    b)
      branch=$OPTARG;
      ;;
    *)
      ;;
  esac
done

shift $(( OPTIND - 1 ))

fileList=$BASEDIR/fileList
blackList=$BASEDIR/ignore-proto.txt
tmpFile=$BASEDIR/tmp
if [ -f $fileList ]; then
  rm $fileList
fi

(
  cd ${VCNC_TADA_SERVER_DIR_FOR_PROTOCOL}
  git fetch origin $branch || exit 1
  git checkout origin/$branch || exit 1
) || { echo "error occurred while git checking out to ${branch}"; exit 1; }

(
  cd ${PROTOCOL_DIR} # this cd is to make filePath relative to the folder for protocol
  if [[ $# -gt 0 ]]; then
    for filename in $@
    do
      filePath=$(find . -name "${filename}*")
      if [[ "${filePath}" = "" ]]; then
        >&2 echo "Could not find \"${filename}\" in ${PROTOCOL_DIR}"
      else
        echo "$filePath" >> $fileList
      fi
    done
  else
    find . -maxdepth 1 -name "*.proto" ! -name "subscription.proto" >> $fileList
    find server -name "*.proto" >> $fileList
    find web -name "*.proto" >> $fileList
    find web_bridge -name "*.proto" >> $fileList
  fi
  grep -w -v -Fx -f $blackList $fileList > $tmpFile
  mv $tmpFile $fileList
)

cat $fileList

rsync --files-from=$fileList $PROTOCOL_DIR $BASEDIR/../proto

rm $fileList