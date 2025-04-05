'use strict';

/**
 * 
 * @param {array} a a 2d array representing a matrix of numbers
 * @param {array} b a 2d array representing a matrix of numbers
 */
export const multiply = function(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error("Must provide 2d array arguments");
  }

  if (a.length < 0 || b.length < 0 || !Array.isArray(a[0]) || !Array.isArray(b[0])) {
    throw new Error("Must provide 2d array arguments");
  }

  if (a[0].length != b.length) {
    throw new Error("Matrix row and column lengths are incompatible");
  }

  //A is an (m by n) matrix, B is a (n by p) matrix, result C is a (m by p) matrix
  const m = a.length;  //rows of A
  const n = a[0].length;  //cols of A, also rows of B
  const p = b[0].length;  //cols of B

  const c = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < p; j++) {
      let element = 0;
      for (let k = 0; k < n; k++) {
        element += (a[i][k] * b[k][j]);
      }
      row.push(element);
    }
    c.push(row);
  }

  return c;
}

/**
 * computes the product of C = C + AB where A,B,C are all square matrices of similar size
 * @param {array} a a 2d array
 * @param {array} b a 2d array
 * @param {array} c a 2d array
 */
export const multiplyRecursive = function(a, b, c) {
  if (!Array.isArray(a) || !Array.isArray(b) || !Array.isArray(c) 
    || !Array.isArray(a[0]) || !Array.isArray(b[0]) || !Array.isArray(c[0]))
    throw new Error("Must provide 2d array arguments");

  if (a.length != a[0].length || b.length != b[0].length || c.length != c[0].length)
    throw new Error("Matrices must be square");

  if (a.length != b.length && b.length != c.length)
    throw new Error("Matrices must be the same size");
  
  if (a.length % 2 != 0)
    throw new Error("Matrix size must be even");

  multiplyRecursiveHelper(a, 0, 0, b, 0, 0, c, 0, 0, c.length);
}

const multiplyRecursiveHelper = function(a, rowA, colA, b, rowB, colB, c, rowC, colC, n) {
  if (n == 1) {
    c[rowC][colC] = c[rowC][colC] + (a[rowA][colA] * b[rowB][colB]);
    //console.log(`c[${rowC}][${colC}] += a[${rowA}][${colA}] * b[${rowB}][${colB}]`, a[rowA][colA] * b[rowB][colB]);
  }
  else {
    const ns = n / 2;
    multiplyRecursiveHelper(a, rowA, colA, b, rowB, colB, c, rowC, colC, ns);  //A_11, B_11, C_11
    multiplyRecursiveHelper(a, rowA, colA, b, rowB, colB+ns, c, rowC, colC+ns, ns);  
    multiplyRecursiveHelper(a, rowA+ns, colA, b, rowB, colB, c, rowC+ns, colC, ns);
    multiplyRecursiveHelper(a, rowA+ns, colA, b, rowB, colB+ns, c, rowC+ns, colC+ns, ns);
    multiplyRecursiveHelper(a, rowA, colA+ns, b, rowB+ns, colB, c, rowC, colC, ns);
    multiplyRecursiveHelper(a, rowA, colA+ns, b, rowB+ns, colB+ns, c, rowC, colC+ns, ns);
    multiplyRecursiveHelper(a, rowA+ns, colA+ns, b, rowB+ns, colB, c, rowC+ns, colC, ns);
    multiplyRecursiveHelper(a, rowA+ns, colA+ns, b, rowB+ns, colB+ns, c, rowC+ns, colC+ns, ns);
  } 

}