#!/bin/sh

# Mac user only
fontforge=/Applications/FontForge.app/Contents/MacOS/FontForge
mkdir -p ./svg-optimized/
cd ./svg-optimized/
$fontforge -lang=ff -c 'Open($1); SelectWorthOutputting(); foreach Export("svg"); endloop;' ../KhmerChessPieces.sfdir