const selectionSortRecursion = (array, startIdx = 0) => {
  if (startIdx === array.length) return array;
  let min = Infinity;
  let minIdx;

  for (let i = startIdx; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIdx = i;
    }
  }

  let cur = arr[startIdx];
  arr[startIdx] = min;
  arr[minIdx] = cur;

  return selectionSortRecursion(array, startIdx + 1);
};

const arr = [5, 2, 1, 3, 6, 4];

console.log(selectionSortRecursion(arr));