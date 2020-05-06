const bubbleSortRecursion = (array, endIdx = arr.length - 1) => {
  let swaps = 0

  for (let i = 0; i < endIdx; i++) {
    let cur = array[i];
    let next = array[i + 1];
    if (cur > next) {
      array[i] = next;
      array[i + 1] = cur;
      swaps++;
    }
  }

  if (swaps === 0) return array;
  return bubbleSortRecursion(array, endIdx - 1);
}


const arr = [5, 2, 1, 3, 6, 4];

console.log(bubbleSortRecursion(arr));