/*
 * Copyright (c) 2021, K4us
 * Author: Raksa Eng <eng.raksa@gmail.com>, K4us Net <k4us.net@gmail.com>
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
import svgson, { INode } from 'svgson';

const king = require('../font/svg-optimized/$K_KhmerChess.svg');
const queen = require('../font/svg-optimized/$Q_KhmerChess.svg');
const general = require('../font/svg-optimized/$G_KhmerChess.svg');
const horse = require('../font/svg-optimized/$H_KhmerChess.svg');
const boat = require('../font/svg-optimized/$B_KhmerChess.svg');
const fish = require('../font/svg-optimized/$F_KhmerChess.svg');
const transformFish = require('../font/svg-optimized/$T_KhmerChess.svg');

class SVGManager {
    _svg: string;
    svgsonInstant: INode | null = null;
    constructor(svg: string) {
        this._svg = svg;
    }
    init() {
        this.svgsonInstant = svgson.parseSync(this._svg);
    }
    get pathData(): string[] {
        if (!this.svgsonInstant) {
            throw new Error('Call init() first');
        }
        return this.svgsonInstant.children.map((element: INode) => {
            return element.attributes.d;
        })
    }
    get svgString(): string {
        if (!this.svgsonInstant) {
            throw new Error('Call init() first');
        }
        return svgson.stringify(this.svgsonInstant);
    }
}

export const kingSVG = new SVGManager(king);
export const queenSVG = new SVGManager(queen);
export const generalSVG = new SVGManager(general);
export const horseSVG = new SVGManager(horse);
export const boatSVG = new SVGManager(boat);
export const fishSVG = new SVGManager(fish);
export const transformFishSVG = new SVGManager(transformFish);
