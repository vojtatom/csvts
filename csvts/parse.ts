function splitLine(line: string, delimiter: string) {
    let values: string[] = [];
    const lineParsed: string[] = [];

    let term = '';
    let inQuotes = false;
    let quoteSymbol = '';

    for (let i = 0; i < line.length; i++) {
        const c = line[i];

        if (c === '"') {
            if (line[i + 1] === '"') {
                //replace with quotes and go on, nothign changes
                term += '"';
                i++;
            } else {
                if (inQuotes && quoteSymbol === '"') {
                    inQuotes = false;
                } else {
                    inQuotes = true;
                    quoteSymbol = '"';
                }
            }
        } else if (c === "'") {
            if (inQuotes && quoteSymbol === "'") {
                inQuotes = false;
            } else {
                inQuotes = true;
                quoteSymbol = "'";
            }
        } else if (c === delimiter && !inQuotes) {
            lineParsed.push(term);
            term = '';
        } else {
            term += c;
        }
    }

    lineParsed.push(term);
    return lineParsed;
}

function detectDelimiter(line: string): string {
    const possibleDelimiters = [',', ';', '\t', '|', '-'];
    let maxCount = 0;
    let detectedDelimiter = ',';

    possibleDelimiters.forEach((delimiter) => {
        const count = line.split(delimiter).length - 1;

        if (count > maxCount) {
            maxCount = count;
            detectedDelimiter = delimiter;
        }
    });

    return detectedDelimiter;
}

export function parse(csv: string, delimiter?: string) {
    const lines = csv.split('\n'); //TODO bug here when the newlines are inside quotes
    if (!delimiter) delimiter = detectDelimiter(lines[0]);

    const data: string[][] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line === '') continue;
        data.push(splitLine(line, delimiter));
    }

    return data;
}
