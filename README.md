# OADF PDF Converter

A utility tools that converts PDF files into a format which is consumed 
by different OADF importers.

## Usage

```javascript
import converter from 'oadf-pdf-converter';
import fs from 'fs';

const filePath = '...';
const data = new Uint8Array(fs.readFileSync(filePath));
const pages = converter(data);
```

### Output format

The converter returns an array of pages which each contain an array of rows with
each text fragment wrapped in a element object. All elements are ordered from 
top left to bottom right.

```
[
 [ 
   [ Element, Element, ... ],
   [ ...another row ... ]
 ],
 [ ... another page ... ],
 [ ... another page ... ]
]
```

## License

MIT
