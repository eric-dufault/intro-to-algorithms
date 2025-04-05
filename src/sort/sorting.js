'use strict';

/**
 * Sorts an array in increasing order using insertion sort
 * @param {*} arr array to be sorted
 * @param {*} n if specified, sorts a subarray of the specified array
 */
export const insertionSort = function(arr, n = arr.length) {
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
};

export const insertionSortDesc = function(arr, n = arr.length) {
  for (let i = 1; i < n; i++) {
    let current = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] < current) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
};

export const insertionSortAlt = (arr, n = arr.length) => {
  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0 && arr[j-1] > arr[j]; j--) {
      const temp = arr[j];  //swap arr[j] and arr[j-1]
      arr[j] = arr[j-1];
      arr[j-1] = temp;
    }
  }
};

/**
 * Sorts an array of objects by a specified property, in increasing order using insertion sort
 * @param {} arr array to be sorted
 * @param {*} property property by which to sort the objects in the array
 * @param {*} n if specified, sorts a subarray of the specified array
 */
export const insertionSortRecords = function(arr, prop, n = arr.length) {
  for (let i = 1; i < n; i++) {
    let current = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j][prop] > current[prop]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
};

export const insertionSortR = function(arr) {
  insertionSortRHelper(arr, arr.length - 1);
}

const insertionSortRHelper = function(arr, n) {
  if (n <= 0)
    return;

  insertionSortRHelper(arr, n - 1);
  insert(arr, arr[n], n-1);
}

const insert = function(arr, x, r) {
  let j = r;
  while (j >= 0 && arr[j] > x) {
    arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = x;
}


/**
 * Sorts an array in increasing order using selection sort
 * @param {*} arr array to be sorted
 * @param {*} n if specified, sorts a subarray of the specified array
 */
export const selectionSort = function(arr, n = arr.length) {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex])
        minIndex = j;
    }

    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
};

/**
 * Sorts an array in increasing order using merge sort
 * @param {*} arr array to be sorted
 */
export const mergeSort = function(arr) {
  mergeSortHelper(arr, 0, arr.length - 1);
}

const mergeSortHelper = function(arr, p, r) {
  if (p >= r) 
    return;

  const q = Math.floor((p + r) / 2);
  mergeSortHelper(arr, p, q);
  mergeSortHelper(arr, q + 1, r);
  merge(arr, p, q, r);
}

const merge = function(arr, p, q, r) {
  const nl = q - p + 1;      //length of arr[p:q]
  const nr = r - q;          //length of arr[q+1:r]

  const left = [];
  for (let i = 0; i < nl; i++)
    left[i] = arr[p + i];
  
  const right = [];
  for (let i = 0; i < nr; i++)
    right[i] = arr[q + 1 + i];

  let i = 0, j = 0, k = p;
  while (i < nl && j < nr) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < nl) { //copy remainder of other end of arr[p:r]
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < nr) {
    arr[k] = right[j];
    j++;
    k++;
  }
}


/**
 * Sorts an array of objects in increasing order using merge sort
 * @param {*} arr array to be sorted
 * @param {prop} the property of the objects with which to sort by
 */
export const mergeSortRecords = function(arr, prop) {
  mergeSortRecordsHelper(arr, 0, arr.length - 1, prop);
}

const mergeSortRecordsHelper = function(arr, p, r, prop) {
  if (p >= r) 
    return;

  const q = Math.floor((p + r) / 2);
  mergeSortRecordsHelper(arr, p, q, prop);
  mergeSortRecordsHelper(arr, q + 1, r, prop);
  mergeRecords(arr, p, q, r, prop);
}

const mergeRecords = function(arr, p, q, r, prop) {
  const nl = q - p + 1;
  const nr = r - q;

  const left = [];
  for (let i = 0; i < nl; i++)
    left[i] = arr[p + i];

  const right = [];
  for (let i = 0; i < nr; i++)
    right[i] = arr[q + 1 + i];

  let i = 0, j = 0, k = p;
  while (i < nl && j < nr) {
    if (left[i][prop] <= right[j][prop]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < nl) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < nr) {
    arr[k] = right[j];
    j++;
    k++
  }
}

export const bubbleSort = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j-1] > arr[j]) {
        const temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}