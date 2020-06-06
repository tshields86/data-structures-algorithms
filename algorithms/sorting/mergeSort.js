const merge = (leftArray, rightArray) => {
  let sortedArray = [];

  while (leftArray.length && rightArray.length) {
    let minimumEl;
    if (leftArray[0] <= rightArray[0]) {
      minimumEl = leftArray.shift();
    } else minimumEl = rightArray.shift();
    sortedArray.push(minimumEl);
  }

  if (leftArray.length) sortedArray.push(...leftArray);
  if (rightArray.length) sortedArray.push(...rightArray);

  return sortedArray;
};

const mergeSort = array => {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const states = ['New York', 'South Carolina', 'Maine', 'California', 'New Jersey', 'Colorado', 'Virginia', 'Montana', 'Arkansas', 'Washington', 'Texas', 'Wisconsin', 'Delaware', 'Mississippi', 'Oklahoma', 'Pennsylvania', 'Florida', 'New Mexico', 'Missouri', 'Hawaii', 'Massachusetts', 'Idaho', 'Alaska', 'Illinois', 'Nevada', 'Indiana', 'Kansas', 'Oregon', 'Arizona', 'Minnesota', 'North Carolina', 'Kentucky', 'Iowa', 'North Dakota', 'Ohio', 'Rhode Island', 'Alabama', 'Georgia', 'Maryland', 'Nebraska', 'South Dakota', 'Michigan', 'Tennessee', 'Connecticut', 'Utah', 'Louisiana', 'Vermont', 'West Virginia', 'Wyoming', 'New Hampshire'];

console.log(mergeSort(numbers));
console.log(mergeSort(states));