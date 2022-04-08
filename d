#!/bin/bash

cd "$(dirname $0)"

task=$1
arg=$2
args=${*:2}

case $task in
    start)
        # Run local server
        bundle exec jekyll serve --watch
        ;;
    '')
        echo 'Usage: ./d action [params]. For a list of actions, run ./d help'
        ;;
    *)
        echo 'Unknown action `$task`. For a list of the available actions, run ./d help'
        ;;
esac
