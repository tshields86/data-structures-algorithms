const swap = require('./helpers');

const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIdx]) minIdx = j;
    }

    swap(array, i, minIdx);
  }

  return array;
};

module.exports = selectionSort;