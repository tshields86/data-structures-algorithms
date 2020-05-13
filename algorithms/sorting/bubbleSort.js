const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

const bubbleSort = array => {
  let isSorted = false;
  let lastUnsorted = array.length - 1;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }

  return array;
};


const arr = [5, 2, 1, 3, 6, 4];

console.log(bubbleSort(arr));