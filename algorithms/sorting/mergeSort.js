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

module.exports = mergeSort;