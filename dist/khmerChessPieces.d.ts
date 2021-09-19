import { INode } from 'svgson';
declare class SVGManager {
    svg: string;
    svgsonInstant: INode | null;
    constructor(svg: string);
    init(): void;
    get pathData(): string[];
    get svgString(): string;
}
export declare const kingSVG: SVGManager;
export declare const queenSVG: SVGManager;
export declare const generalSVG: SVGManager;
export declare const horseSVG: SVGManager;
export declare const boatSVG: SVGManager;
export declare const fishSVG: SVGManager;
export declare const transformFishSVG: SVGManager;
export {};
