#!/bin/bash
set -o pipefail
_APPDIR="/usr/lib/@appname@"
_RUNNAME="${_APPDIR}/@runname@"
export NODE_ENV=production
export XDG_CONFIG_HOME="${XDG_CONFIG_HOME:-$HOME/.config}"
_FLAGS_FILE="${XDG_CONFIG_HOME}/sunshine/@appname@-flags.conf"
declare -a _USER_FLAGS
if [[ -f ${_FLAGS_FILE} ]]; then
  while read -r line; do
    if [[ ! ${line} =~ ^[[:space:]]*#.* ]]; then
      _USER_FLAGS+=("${line}")
    fi
  done <"${_FLAGS_FILE}"
fi
if [[ ${EUID} -eq 0 ]]; then
  exec "${_RUNNAME}" --no-sandbox "${_USER_FLAGS[@]}" "$@"
else
  exec "${_RUNNAME}" "${_USER_FLAGS[@]}" "$@"
fi
