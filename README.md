# CSV.ts 📄

Tiny utility for parsing CSV files.

-   dead simple, just a few lines of code
-   no dependencies
-   written in TypeScript

```
npm i csvts
```

## Usage

```ts
import { stringify, parse } from 'csvts';

const data = [
    ['id', 'name', 'age', 'weight', 'married', 'children', 'timestamp'],
    ['1', '"Dan, John"', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
    ['2', '"Jack"', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
    ['3', 'Back, "Jim"', '50', '"100.5"', 'true', '3', '2021-01-03T00:00:00.000Z'],
];

const csv = stringify(csvData);
const originalData = parse(csv);
```
