const bubbleSort = require('./bubbleSort');
const bubbleSortRecursion = require('./bubbleSortRecursion');
const selectionSort = require('./selectionSort');
const selectionSortRecursion = require('./selectionSortRecursion');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');


const equals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};



const unsortedNumbers = [10, 7, 2, 4, 9, 3, 8, 6, 5, 0, 1];
const sortedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const unsortedStates = ['New York', 'South Carolina', 'Maine', 'California', 'New Jersey', 'Colorado', 'Virginia', 'Montana', 'Arkansas', 'Washington', 'Texas', 'Wisconsin', 'Delaware', 'Mississippi', 'Oklahoma', 'Pennsylvania', 'Florida', 'New Mexico', 'Missouri', 'Hawaii', 'Massachusetts', 'Idaho', 'Alaska', 'Illinois', 'Nevada', 'Indiana', 'Kansas', 'Oregon', 'Arizona', 'Minnesota', 'North Carolina', 'Kentucky', 'Iowa', 'North Dakota', 'Ohio', 'Rhode Island', 'Alabama', 'Georgia', 'Maryland', 'Nebraska', 'South Dakota', 'Michigan', 'Tennessee', 'Connecticut', 'Utah', 'Louisiana', 'Vermont', 'West Virginia', 'Wyoming', 'New Hampshire'];
const sortedStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


console.log('*** bubbleSort ***');
console.log(equals(bubbleSort([...unsortedNumbers]), sortedNumbers));
console.log(equals(bubbleSort([...unsortedStates]), sortedStates));

console.log('*** bubbleSortRecursion ***');
console.log(equals(bubbleSortRecursion([...unsortedNumbers]), sortedNumbers));
console.log(equals(bubbleSortRecursion([...unsortedStates]), sortedStates));

console.log('*** selectionSort ***');
console.log(equals(selectionSort([...unsortedNumbers]), sortedNumbers));
console.log(equals(selectionSort([...unsortedStates]), sortedStates));

console.log('*** selectionSortRecursion ***');
console.log(equals(selectionSortRecursion([...unsortedNumbers]), sortedNumbers));
console.log(equals(selectionSortRecursion([...unsortedStates]), sortedStates));

console.log('*** insertionSort ***');
console.log(equals(insertionSort([...unsortedNumbers]), sortedNumbers));
console.log(equals(insertionSort([...unsortedStates]), sortedStates));

console.log('*** mergeSort ***');
console.log(equals(mergeSort([...unsortedNumbers]), sortedNumbers));
console.log(equals(mergeSort([...unsortedStates]), sortedStates));

console.log('*** quickSort ***');
console.log(equals(quickSort([...unsortedNumbers]), sortedNumbers));
console.log(equals(quickSort([...unsortedStates]), sortedStates));
