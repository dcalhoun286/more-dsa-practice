'use strict';

function mergeSort(array) {
  let n = array.length;

  if (n > 1) {
    const mid = Math.floor(array.length) / 2;
    const leftSubArray = array.slice(0, mid);
    const rightSubArray = array.slice(mid);

    mergeSort(leftSubArray);
    mergeSort(rightSubArray);

    merge(leftSubArray, rightSubArray, array);
  }

  return array;
}

function merge(leftSubArray, rightSubArray, array) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftSubArray.length && j < rightSubArray.length) {
    if (leftSubArray[i] < rightSubArray[j]) {
      array[k] = leftSubArray[i];
      i++;
    } else {
      array[k] = rightSubArray[j];
      j++;
    }
    k++;
  }

  while (i < leftSubArray.length) {
    array[k] = leftSubArray[i];
    k++;
    i++;
  }

  while (j < rightSubArray.length) {
    array[k] = rightSubArray[j];
    k++;
    j++;
  }
}

module.exports = mergeSort;

const testArray = [1, 3, 8, 8, 4, 6, 1, 4];

console.log(mergeSort(testArray));
// const result = mergeSort(testArray);
// console.log(result);
