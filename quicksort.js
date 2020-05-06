const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

const partition = (array, left, right) => {
  const pivot = array[Math.floor((left + right) / 2)];
  
  while (left <= right) {
    while (array[left] < pivot) {
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

const quicksort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) return;

  const index = partition(array, left, right);
  quicksort(array, left, index - 1);
  quicksort(array, index, right);

  return array;
};

const arr = [15, 3, 2, 1, 9, 5, 7, 8, 6];

console.log(quicksort(arr));