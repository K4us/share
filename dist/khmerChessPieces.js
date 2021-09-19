"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformFishSVG = exports.fishSVG = exports.boatSVG = exports.horseSVG = exports.generalSVG = exports.queenSVG = exports.kingSVG = void 0;
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
var svgson_1 = __importDefault(require("svgson"));
var king = require('../font/svg-optimized/$K_KhmerChess.svg');
var queen = require('../font/svg-optimized/$Q_KhmerChess.svg');
var general = require('../font/svg-optimized/$G_KhmerChess.svg');
var horse = require('../font/svg-optimized/$H_KhmerChess.svg');
var boat = require('../font/svg-optimized/$B_KhmerChess.svg');
var fish = require('../font/svg-optimized/$F_KhmerChess.svg');
var transformFish = require('../font/svg-optimized/$T_KhmerChess.svg');
var SVGManager = /** @class */ (function () {
    function SVGManager(svg) {
        this.svg = svg;
    }
    SVGManager.prototype.init = function () {
        this.svgsonInstant = svgson_1.default.parseSync(this.svg);
    };
    Object.defineProperty(SVGManager.prototype, "pathData", {
        get: function () {
            if (!this.svgsonInstant) {
                throw new Error('Call init() first');
            }
            return this.svgsonInstant.children.map(function (element) {
                return element.attributes.d;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGManager.prototype, "svgString", {
        get: function () {
            if (!this.svgsonInstant) {
                throw new Error('Call init() first');
            }
            return svgson_1.default.stringify(this.svgsonInstant);
        },
        enumerable: false,
        configurable: true
    });
    return SVGManager;
}());
exports.kingSVG = new SVGManager(king);
exports.queenSVG = new SVGManager(queen);
exports.generalSVG = new SVGManager(general);
exports.horseSVG = new SVGManager(horse);
exports.boatSVG = new SVGManager(boat);
exports.fishSVG = new SVGManager(fish);
exports.transformFishSVG = new SVGManager(transformFish);
//# sourceMappingURL=khmerChessPieces.js.map