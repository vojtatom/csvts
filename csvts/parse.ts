export const possibleDelimiters = [',', ';', '\t', '|', '-'];

function split(line: string, delimiter: string, replaceQuotes = false) {
    const terms: string[] = [];
    let term = '';
    let inQuotes = false;
    let quoteSymbol = '';

    for (let i = 0; i < line.length; i++) {
        const c = line[i];

        if (c === '"') {
            if (line[i + 1] === '"') {
                //deal with double quotes
                if (replaceQuotes) term += '"';
                else term += '""';
                i++;
            } else {
                if (inQuotes && quoteSymbol === '"') {
                    //end in quotes
                    inQuotes = false;
                } else {
                    //start in quotes
                    inQuotes = true;
                    quoteSymbol = '"';
                }
                if (!replaceQuotes) term += '"';
            }
        } else if (c === "'") {
            if (inQuotes && quoteSymbol === "'") {
                //end in quotes
                inQuotes = false;
            } else {
                //start in quotes
                inQuotes = true;
                quoteSymbol = "'";
            }
            if (!replaceQuotes) term += "'";
        } else if (c === delimiter && !inQuotes) {
            //end of term
            terms.push(term);
            term = '';
        } else {
            //extend term
            term += c;
        }
    }

    terms.push(term);
    return terms;
}

function detectDelimiter(line: string): string {
    let maxCount = 0,
        detectedDelimiter = ',';
    possibleDelimiters.forEach((delimiter) => {
        const count = split(line, delimiter).length - 1;
        if (count > maxCount) (maxCount = count), (detectedDelimiter = delimiter);
    });
    return detectedDelimiter;
}

export function parse(csv: string, delimiter?: string) {
    const data: string[][] = [];
    const lines = split(csv, '\n');

    if (!delimiter) delimiter = detectDelimiter(lines[0]);
    lines.forEach((line) => {
        data.push(split(line, delimiter!, true));
    });
    return data;
}
