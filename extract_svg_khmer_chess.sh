#!/bin/sh

fontforge=/Applications/FontForge.app/Contents/MacOS/FontForge
mkdir -p ./font/svg-optimized/
cd ./font/svg-optimized/
$fontforge -lang=ff -c 'Open($1); SelectWorthOutputting(); foreach Export("svg"); endloop;' ../KhmerChessPieces.sfdir