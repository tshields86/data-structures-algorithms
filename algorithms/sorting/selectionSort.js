const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

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

const arr = [5, 2, 1, 3, 6, 4];

console.log(selectionSort(arr));