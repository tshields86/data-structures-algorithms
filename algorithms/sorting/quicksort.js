const swap = require('./helpers');

const partition = (array, left, right) => {
  const pivot = array[Math.floor((left + right) / 2)];
  
  while (left <= right) {
    while (array[left] < pivot && left <= right) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) return;

  const index = partition(array, left, right);
  quickSort(array, left, index - 1);
  quickSort(array, index, right);

  return array;
};

module.exports = quickSort;