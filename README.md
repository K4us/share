# K4us Share

## Khmer Chess Font Family

![Khmer Chess Font](./font/exported/KhmerChessFont.PNG "Khmer Chess Font")

## Khmer Chess Font SVG helper

Khmer Chess Font has been using through `k4us-share` in [Khmer Chess Board](https://github.com/K4us/khmer-chess-board.js)

A Typescript and Node.js base helpers for getting Khmer Chess SVG.

usage:

```bash
$ npm i k4us-share
```

Typescript

```typescript
import {
   boatSVG,
   fishSVG,
   generalSVG,
   horseSVG,
   kingSVG,
   queenSVG,
   transformFishSVG,
} from 'k4us-share/types';
```

Node.js

```javascript
const { khmerChessPieces } = require('k4us-share');
const {
    kingSVG,
    queenSVG,
    generalSVG,
    horseSVG,
    boatSVG,
    fishSVG,
    transformFishSVG,
} = khmerChessPieces;
```

## Licence

MIT
