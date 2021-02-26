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
