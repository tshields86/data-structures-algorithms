const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

const selectionSortRecursion = (array, startIdx = 0) => {
  if (startIdx === array.length) return array;
  let minIdx = startIdx;

  for (let i = startIdx; i < array.length; i++) {
    if (array[i] < array[minIdx]) minIdx = i;
  }

  swap(array, startIdx, minIdx);

  return selectionSortRecursion(array, startIdx + 1);
};

const arr = [5, 2, 1, 3, 6, 4];

console.log(selectionSortRecursion(arr));