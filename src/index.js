'use strict';

import { insertionSort, insertionSortRecords, insertionSortDesc, insertionSortAlt, selectionSort, mergeSort, mergeSortRecords, insertionSortR, bubbleSort } from "../src/sort/sorting.js";
import { binarySearch, linearSearchRecursive } from '../src/search/searching.js';
import { multiply, multiplyRecursive } from "./matrix/multiplication.js";

const arr = [2,7,5,3,8,4,2];

// console.log(arr);
// mergeSort(arr);
// console.log(arr);

// const ar = [2,47,4,6,7,11,1,2,3,5,9];
// const ar = [5,2,3,8,1,3];
// console.log(ar);
// insertionSortDesc(ar);
// console.log(ar);

// insertionSort(arr);
// console.log(arr);


// insertionSortDesc(arr);
// console.log(arr);


// const students = [
//   {age: 14, courses: 3, gpa: 1.45 },
//   {age: 33, courses: 5, gpa: 0.87 },
//   {age: 22, courses: 4, gpa: 1.89 },
//   {age: 21, courses: 9, gpa: 1.01 },
//   {age: 19, courses: 1, gpa: 1.99 },
//   {age: 38, courses: 7, gpa: 1.63 }
// ];

// console.log(students);
// mergeSortRecords(students, 'gpa');
// console.log(students);


const twoSum = function(arr, x) {
  mergeSort(arr);
  for (let i = 0; i < arr.length; i++) {
    const diff = x - arr[i];
    const index = binarySearch(arr, diff);
    if (index >= 0) {
      //ensure we are looking for distinct elements by checking for siblings on array
      if (index != i || (i > 0 && arr[i-1] == arr[i]) || (i < arr.length - 1 && arr[i+1] == arr[i]))
        return true;
    }
  }
  return false;
}


// console.log('linear search recursive');
// console.log(linearSearchRecursive([8,3,0,4,6,1,7], 0));

const A = [
  [5,1,3,7,1,2,7,1],
  [8,4,6,5,3,2,2,1],
  [1,2,1,1,1,1,2,1],
  [9,7,3,1,4,2,2,1],
  [5,4,1,3,4,2,1,9],
  [6,2,5,5,1,1,3,2],
  [1,1,3,1,8,8,4,3],
  [7,1,3,4,1,1,4,2]
];

const B = [
  [3,5,4,7,6,6,1,4],
  [1,1,2,2,4,2,1,3],
  [9,1,7,2,5,5,1,2],
  [3,1,4,1,4,7,6,3],
  [1,1,3,4,8,9,1,2],
  [7,7,3,1,2,2,2,1],
  [7,4,5,2,2,1,1,3],
  [4,1,1,3,4,2,5,7]
];

const C = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];

multiplyRecursive(A, B, C);
console.log(C);

// const K = multiply(A,B);
// console.log(K);