'use strict';

// **BLOG NOTES FOR LATER** When I was struggling to come up with a successful solution, I at first was comparing my code to the solution code found this link: https://www.guru99.com/quicksort-in-javascript.html. When I continued to struggle with unintended behavior, I ran the code at this link as is and realized that the solution code provided isn't in fact a successful solution to begin with. I have been wrestling with trying to master the quick sort algorithm for longer than I care to admit, and it's frustrating as well as confusing that I keep coming across this Guru99 post as a top search result for "quick sort javascript" despite the solution code being unhelpful. Per the post itself it was edited as recently as April 2022 and it is still wrong(and despite still being broken code still turns up as a top result?) but I digress. More research led me to discover this discussion at Stack Overflow https://stackoverflow.com/questions/71701224/javascript-quick-sort-algorithm as well as the comment section from this blog post at Digital Ocean: https://www.digitalocean.com/community/tutorials/js-quick-sort coupled with the visual animation of what quick sort is doing from Wikipedia: https://en.wikipedia.org/wiki/Quicksort that accomplishes essentially what I believe in theory the code from the Guru99 was supposed to do, while also keeping optimal time and space performance the Guru99 solution would have had if its code were passing.

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, start, end) {
  let pivot = array[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  i++;
  swap(array, i, end);
  return i;
}

function quickSort(array, start, end) {
  if (start < end) {
    let index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
  }
  return array;
}

module.exports = {
  quickSort: quickSort,
  partition: partition,
  swap: swap,
};

const test1 = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

console.log(test1);
console.log(quickSort(test1, 0, test1.length - 1));
// console.log(test);

const test2 = [];
for (let i = 1; i <= 200000; i++) {
  test2.push(Math.floor(Math.random() * 100));
}

console.log(test2);
console.log(quickSort(test2, 0, test2.length - 1));

// testing to see if this quickSort solution works for large datasets as well as datasets with non-unique values. `result` evaluates to `true` if the array is successfully sorted
let result = true;

for (let i = 0; i < test2.length - 1; i++) {
  if (test2[i] > test2[i + 1]) {
    result = false;
    break;
  }
}

console.log(result);
