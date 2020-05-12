const binarySearch = (array, target, left = 0 , right = array.length - 1) => {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);
  if (array[middle] === target) return middle;
  else if (array[middle] < target) return binarySearch(array, target, middle + 1, right);
  else return binarySearch(array, target, left, middle - 1);
};

const checkForWord = (array, string) => {
  return binarySearch(array, string) !== -1;
};

const fruits = ['apple', 'banana', 'grape', 'rasberry', 'strawberry', 'watermellon'];

console.log(checkForWord(fruits, 'rasberry'));