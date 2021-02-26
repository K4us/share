/*
 * Copyright (c) 2021, K4us
 * Author: Raksa Eng <eng.raksa@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *---------------------------------------------------------------------------- */
'use strict';

const fs = require('fs');
const path = require('path');
const svgson = require('svgson');

class SVGManager {
    constructor(kingSVGPath) {
        this.kingSVGPath = kingSVGPath;
    }
    init() {
        const data = fs.readFileSync(this.kingSVGPath, 'utf8')
        this.svgsonInstant = svgson.parseSync(data);
    }
    get pathData() {
        if (!this.svgsonInstant) {
            throw new Error('Call init() first');
        }
        return this.svgsonInstant.children.map(a => a.attributes.d)
    }
    get svgString() {
        if (!this.svgsonInstant) {
            throw new Error('Call init() first');
        }
        return svgson.stringify(this.svgsonInstant);
    }
}

const resolveSVGPath = (name) => {
    return path.resolve(`./font/svg-optimized/${name}`);
}

module.exports = {
    kingSVG: new SVGManager(resolveSVGPath('\$K_KhmerChess.svg')),
    queenSVG: new SVGManager(resolveSVGPath('\$Q_KhmerChess.svg')),
    generalSVG: new SVGManager(resolveSVGPath('\$G_KhmerChess.svg')),
    horseSVG: new SVGManager(resolveSVGPath('\$H_KhmerChess.svg')),
    boatSVG: new SVGManager(resolveSVGPath('\$B_KhmerChess.svg')),
    fishSVG: new SVGManager(resolveSVGPath('\$F_KhmerChess.svg')),
    transformFishSVG: new SVGManager(resolveSVGPath('\$T_KhmerChess.svg')),
};
