import { possibleDelimiters } from './parse';

export function stringify(data: any[][], delimiter = ',') {
    const csv = data
        .map((line) =>
            line
                .map((term) => {
                    const stringTerm = String(term).replaceAll('"', '""');
                    for (const possibleDelimiter of possibleDelimiters) {
                        if (stringTerm.includes(possibleDelimiter) || stringTerm.includes('\n')) {
                            return `"${stringTerm}"`;
                        }
                    }
                    return stringTerm;
                })
                .join(delimiter)
        )
        .join('\n');

    return csv;
}
