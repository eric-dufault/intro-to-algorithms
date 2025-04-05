'use strict';

export const linearSearch = function(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x)
      return i;
  }
  return -1;
}

export const linearSearchRecursive = function(arr, x) {
  return linearSearchRecursiveHelper(arr, 0, x);
}

const linearSearchRecursiveHelper = function(arr, i, x) {
  if (arr[i] === x)
    return i;
  else if (i === arr.length)
    return -1;
  else 
    return linearSearchRecursiveHelper(arr, i+1, x);
}

export const binarySearch = function(arr, x) {
  let l = 0;
  let u = arr.length - 1;
  let m = -1;
  while (l <= u) {
    m = Math.floor((l + u) / 2);
    if (arr[m] < x)
      l = m + 1;
    else if (arr[m] > x)
      u = m - 1;
    else
      return m;
  }

  return -1;
}
