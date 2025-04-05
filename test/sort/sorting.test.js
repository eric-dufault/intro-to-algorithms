'use strict';

import { insertionSort, insertionSortRecords, mergeSort, mergeSortRecords, selectionSort } from '../../src/sort/sorting.js';


describe('INSERTION-SORT tests', () => {
  test('happy path', () => {
    const arr = [2,7,5,3,8,4,2];
    insertionSort(arr);
    expect(arr).toStrictEqual([2,2,3,4,5,7,8]);
  });

  test('already in ascending order', () => {
    const arr = [3,5,6,9,11,19,21,55];
    insertionSort(arr);
    expect(arr).toStrictEqual([3,5,6,9,11,19,21,55]);
  });

  test('from descending to ascending order', () => {
    const arr = [55,21,19,11,9,6,5,3];
    insertionSort(arr);
    expect(arr).toStrictEqual([3,5,6,9,11,19,21,55]);
  });

  test('array of size 1', () => {
    const arr = [5];
    insertionSort(arr);
    expect(arr).toStrictEqual([5]);
  });

  test('array of size 0', () => {
    const arr = [];
    insertionSort(arr);
    expect(arr).toStrictEqual([]);
  });

  test('sorts subarray', () => {
    const arr = [4,8,2,5,9,3,4,6,6,3,1];
    insertionSort(arr, 5);
    expect(arr.slice(0,5)).toStrictEqual([2,4,5,8,9]);
    expect(arr).toStrictEqual([2,4,5,8,9,3,4,6,6,3,1]);
  });

  test('sattelite data - sort by property', () => {
    const students = [
      {age: 14, courses: 3, gpa: 1.45 },
      {age: 33, courses: 5, gpa: 0.87 },
      {age: 22, courses: 4, gpa: 1.89 },
      {age: 21, courses: 9, gpa: 1.01 },
      {age: 19, courses: 1, gpa: 1.99 },
      {age: 38, courses: 7, gpa: 1.63 }
    ];

    insertionSortRecords(students, 'gpa');

    const gpas = students.map(s => s.gpa);
    expect(gpas).toStrictEqual([0.87,1.01,1.45,1.63,1.89,1.99]);
  });
});


describe('SELECTION-SORT tests', () => {
  test('happy path', () => {
    const arr = [2,7,5,3,8,4,2];
    selectionSort(arr);
    expect(arr).toStrictEqual([2,2,3,4,5,7,8]);
  });

  test('already in ascending order', () => {
    const arr = [3,5,6,9,11,19,21,55];
    selectionSort(arr);
    expect(arr).toStrictEqual([3,5,6,9,11,19,21,55]);
  });

  test('from descending to ascending order', () => {
    const arr = [55,21,19,11,9,6,5,3];
    selectionSort(arr);
    expect(arr).toStrictEqual([3,5,6,9,11,19,21,55]);
  });

  test('array of size 1', () => {
    const arr = [5];
    selectionSort(arr);
    expect(arr).toStrictEqual([5]);
  });

  test('array of size 0', () => {
    const arr = [];
    selectionSort(arr);
    expect(arr).toStrictEqual([]);
  });
});


describe('MERGE-SORT tests', () => {
  test('happy path', () => {
    const arr = [2,7,5,3,8,4,2];
    mergeSort(arr);
    expect(arr).toStrictEqual([2,2,3,4,5,7,8]);
  });

  test('already in ascending order', () => {
    const arr = [3,5,6,9,11,19,21,55];
    mergeSort(arr);
    expect(arr).toStrictEqual([3,5,6,9,11,19,21,55]);
  });

  test('from descending to ascending order', () => {
    const arr = [55,21,19,11,9,6,5,3];
    mergeSort(arr);
    expect(arr).toStrictEqual([3,5,6,9,11,19,21,55]);
  });

  test('array of size 1', () => {
    const arr = [5];
    mergeSort(arr);
    expect(arr).toStrictEqual([5]);
  });

  test('array of size 0', () => {
    const arr = [];
    mergeSort(arr);
    expect(arr).toStrictEqual([]);
  });

  test('sattelite data - sort by property', () => {
    const students = [
      {age: 14, courses: 3, gpa: 1.45 },
      {age: 33, courses: 5, gpa: 0.87 },
      {age: 22, courses: 4, gpa: 1.89 },
      {age: 21, courses: 9, gpa: 1.01 },
      {age: 19, courses: 1, gpa: 1.99 },
      {age: 38, courses: 7, gpa: 1.63 }
    ];

    mergeSortRecords(students, 'gpa');

    const gpas = students.map(s => s.gpa);
    expect(gpas).toStrictEqual([0.87,1.01,1.45,1.63,1.89,1.99]);
  });
});