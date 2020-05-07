const bubbleSort = array => {
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - 1 - i; j++) {
      let cur = array[j];
      let next = array[j + 1];
      if (cur > next) {
        array[j] = next;
        array[j + 1] = cur;
        swaps++;
      }
    }

    if (swaps === 0) return array;
  }

  return array;
};


const arr = [5, 2, 1, 3, 6, 4];

console.log(bubbleSort(arr));