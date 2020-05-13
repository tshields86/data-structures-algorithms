
const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

const bubbleSortRecursion = (array, lastUnsorted = array.length - 1) => {
  let isSorted = true;

  for (let i = 0; i < lastUnsorted; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      isSorted = false;
    }
  }

  if (isSorted) return array;

  return bubbleSortRecursion(array, lastUnsorted - 1);
}


const arr = [5, 2, 1, 3, 6, 4];

console.log(bubbleSortRecursion(arr));