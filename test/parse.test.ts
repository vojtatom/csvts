import { parse, stringify } from '@csvts/csvts';
import { expect, test } from 'vitest';

test('Basic test', async () => {
    const csvData = [
        ['id', 'name', 'age', 'weight', 'married', 'children', 'timestamp'],
        ['1', 'John Dan', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
        ['2', 'Jack', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
        ['3', 'Jim Back', '50', '100.5', 'true', '3', '2021-01-03T00:00:00.000Z'],
    ];

    const csv = stringify(csvData);
    const data = parse(csv);
    expect(data).toEqual(csvData);
});

test('Quotation marks', async () => {
    const csvData = [
        ['id', 'name', 'age', 'weight', 'married', 'children', 'timestamp'],
        ['1', 'Dan, John', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
        ['2', 'Jack', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
        ['3', 'Back, Jim', '50', '100.5', 'true', '3', '2021-01-03T00:00:00.000Z'],
    ];

    const csv = stringify(csvData);
    const data = parse(csv);
    expect(data).toEqual(csvData);
});

test('Quotation marks Complex', async () => {
    const csvData = [
        ['id', 'name', 'age', 'weight', 'married', 'children', 'timestamp'],
        ['1', '"Dan, John"', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
        ['2', '"Jack"', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
        ['3', 'Back, "Jim"', '50', '"100.5"', 'true', '3', '2021-01-03T00:00:00.000Z'],
    ];

    const csv = stringify(csvData);
    const data = parse(csv);
    expect(data).toEqual(csvData);
});

test('Quotation marks Complex 2', async () => {
    const csvData = [
        ['id', 'name', 'age', 'weight', 'married', 'children', 'timestamp'],
        ['1', '"Dan, Jane", "John"', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
        ['2', '"Jack"', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
        ['3', 'Back, "Jim"', '50', '"100.5"', 'true', '3', '2021-01-03T00:00:00.000Z'],
    ];

    const csv = stringify(csvData);
    const data = parse(csv);
    expect(data).toEqual(csvData);
});

test('Quotation marks and newlines', async () => {
    const csvData = [
        ['id', 'name', 'age', 'weight', 'married', 'children', 'timestamp'],
        ['1', '"Dan\n, Jane\n", "John"', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
        ['2', '"Jack"', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
        ['3', 'Back, "Jim"', '50', '"100.5"', 'true', '3', '2021-01-03T00:00:00.000Z'],
    ];

    const csv = stringify(csvData);
    const data = parse(csv);
    expect(data).toEqual(csvData);
});

test('Delimiter detection', async () => {
    const csvData = [
        ['id', 'name----------', 'age', 'weight', 'married', 'children', 'timestamp'],
        ['1', 'John Dan', '30', '80.5', 'true', '2', '2021-01-01T00:00:00.000Z'],
        ['2', 'Jack', '40', '90.5', 'false', '0', '2021-01-02T00:00:00.000Z'],
        ['3', 'Jim Back', '50', '100.5', 'true', '3', '2021-01-03T00:00:00.000Z'],
    ];

    const csv = stringify(csvData);
    const data = parse(csv);
    expect(data).toEqual(csvData);
});
