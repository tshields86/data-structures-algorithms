
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
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


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const states = ['New York', 'South Carolina', 'Maine', 'California', 'New Jersey', 'Colorado', 'Virginia', 'Montana', 'Arkansas', 'Washington', 'Texas', 'Wisconsin', 'Delaware', 'Mississippi', 'Oklahoma', 'Pennsylvania', 'Florida', 'New Mexico', 'Missouri', 'Hawaii', 'Massachusetts', 'Idaho', 'Alaska', 'Illinois', 'Nevada', 'Indiana', 'Kansas', 'Oregon', 'Arizona', 'Minnesota', 'North Carolina', 'Kentucky', 'Iowa', 'North Dakota', 'Ohio', 'Rhode Island', 'Alabama', 'Georgia', 'Maryland', 'Nebraska', 'South Dakota', 'Michigan', 'Tennessee', 'Connecticut', 'Utah', 'Louisiana', 'Vermont', 'West Virginia', 'Wyoming', 'New Hampshire'];

console.log(bubbleSortRecursion(numbers));
console.log(bubbleSortRecursion(states));