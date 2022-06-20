'use strict';

function insertionSort(array) {
  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (j > array.length - 1) {
        break;
      }
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

module.exports = insertionSort;
