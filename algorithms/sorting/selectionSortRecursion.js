const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
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

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const states = ['New York', 'South Carolina', 'Maine', 'California', 'New Jersey', 'Colorado', 'Virginia', 'Montana', 'Arkansas', 'Washington', 'Texas', 'Wisconsin', 'Delaware', 'Mississippi', 'Oklahoma', 'Pennsylvania', 'Florida', 'New Mexico', 'Missouri', 'Hawaii', 'Massachusetts', 'Idaho', 'Alaska', 'Illinois', 'Nevada', 'Indiana', 'Kansas', 'Oregon', 'Arizona', 'Minnesota', 'North Carolina', 'Kentucky', 'Iowa', 'North Dakota', 'Ohio', 'Rhode Island', 'Alabama', 'Georgia', 'Maryland', 'Nebraska', 'South Dakota', 'Michigan', 'Tennessee', 'Connecticut', 'Utah', 'Louisiana', 'Vermont', 'West Virginia', 'Wyoming', 'New Hampshire'];

console.log(selectionSortRecursion(numbers));
console.log(selectionSortRecursion(states));