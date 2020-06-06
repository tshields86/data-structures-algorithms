const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const partition = (array, left, right) => {
  const pivot = Math.floor((left + right) / 2);
  
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }

    while (array[right] > array[pivot]) {
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

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) return;

  const pivot = partition(array, left, right);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot, right);

  return array;
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const states = ['New York', 'South Carolina', 'Maine', 'California', 'New Jersey', 'Colorado', 'Virginia', 'Montana', 'Arkansas', 'Washington', 'Texas', 'Wisconsin', 'Delaware', 'Mississippi', 'Oklahoma', 'Pennsylvania', 'Florida', 'New Mexico', 'Missouri', 'Hawaii', 'Massachusetts', 'Idaho', 'Alaska', 'Illinois', 'Nevada', 'Indiana', 'Kansas', 'Oregon', 'Arizona', 'Minnesota', 'North Carolina', 'Kentucky', 'Iowa', 'North Dakota', 'Ohio', 'Rhode Island', 'Alabama', 'Georgia', 'Maryland', 'Nebraska', 'South Dakota', 'Michigan', 'Tennessee', 'Connecticut', 'Utah', 'Louisiana', 'Vermont', 'West Virginia', 'Wyoming', 'New Hampshire'];

console.log(quickSort(numbers));
console.log(quickSort(states));