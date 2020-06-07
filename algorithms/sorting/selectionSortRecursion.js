const swap = require('./helpers');

const selectionSortRecursion = (array, startIdx = 0) => {
  if (startIdx === array.length) return array;
  let minIdx = startIdx;

  for (let i = startIdx; i < array.length; i++) {
    if (array[i] < array[minIdx]) minIdx = i;
  }

  swap(array, startIdx, minIdx);

  return selectionSortRecursion(array, startIdx + 1);
};

module.exports = selectionSortRecursion;