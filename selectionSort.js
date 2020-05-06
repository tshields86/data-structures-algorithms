const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let min = Infinity;
    let minIdx;

    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIdx = j;
      }
    }

    let cur = arr[i];
    arr[i] = min;
    arr[minIdx] = cur;
  }

  return array;
};

const arr = [5, 2, 1, 3, 6, 4];

console.log(selectionSort(arr));