export function stringify(data: any[][], delimiter = ',') {
    const csv = data
        .map((line) =>
            line
                .map((term) => {
                    const stringTerm = String(term).replaceAll('"', '""');
                    if (stringTerm.includes(delimiter)) {
                        return `"${stringTerm}"`;
                    } else {
                        return stringTerm;
                    }
                })
                .join(delimiter)
        )
        .join('\n');

    return csv;
}
