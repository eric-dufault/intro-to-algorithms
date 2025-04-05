'use strict';

import { linearSearch, binarySearch } from '../../src/search/searching.js';

describe('LINEAR-SEARCH tests', () => {
  test('happy path', () => {
    const arr = [2, 6, 4, 9, 11, 0];
    const actual = linearSearch(arr, 9);
    expect(actual).toStrictEqual(3);
  });

  test('not found', () => {
    const arr = [2, 6, 4, 9, 11, 0];
    const actual = linearSearch(arr, 42);
    expect(actual).toStrictEqual(-1);
  });

  test('empty array', () => {
    const arr = [];
    const actual = linearSearch(arr, 9);
    expect(actual).toStrictEqual(-1);
  });

  test('array size 1 - found', () => {
    const arr = [5];
    const actual = linearSearch(arr, 5);
    expect(actual).toStrictEqual(0);
  });

  test('array size 1 - not found', () => {
    const arr = [5];
    const actual = linearSearch(arr, 9);
    expect(actual).toStrictEqual(-1);
  });
});


describe('BINARY-SEARCH tests', () => {
  test('happy path', () => {
    const arr = [0, 2, 4, 6, 9, 11];
    const actual = binarySearch(arr, 9);
    expect(actual).toStrictEqual(4);
  });

  test('not found', () => {
    const arr = [0, 2, 4, 6, 9, 11];
    const actual = binarySearch(arr, 42);
    expect(actual).toStrictEqual(-1);
  });

  test('empty array', () => {
    const arr = [];
    const actual = binarySearch(arr, 9);
    expect(actual).toStrictEqual(-1);
  });

  test('array size 1 - found', () => {
    const arr = [5];
    const actual = binarySearch(arr, 5);
    expect(actual).toStrictEqual(0);
  });

  test('array size 1 - not found', () => {
    const arr = [5];
    const actual = binarySearch(arr, 9);
    expect(actual).toStrictEqual(-1);
  });
});