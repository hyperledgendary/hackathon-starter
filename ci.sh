#!/bin/bash
#
# SPDX-License-Identifier: Apache-2.0
#
function _exit(){
    printf "Exiting:%s\n" "$1"
    exit -1
}

# Where am I?
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

make -f "${DIR}/.build/makefile" || exit "make failed"