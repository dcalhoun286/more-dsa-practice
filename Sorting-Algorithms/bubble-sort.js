'use strict';

function bubbleSort(array) {
  let swapped;
  for (let i = 0; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}

module.exports = bubbleSort;

const test = [1, 2, 3, 4, 5, 6, 8, 7];

console.log(bubbleSort(test));
