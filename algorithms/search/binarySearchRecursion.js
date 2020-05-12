const binarySearchRecursion = (target, array, startIdx = 0, endIdx = array.length - 1) => {
  if (startIdx > endIdx) return -1;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  if (array[middleIdx] === target) return middleIdx;
  else if (array[middleIdx] < target) return binarySearchRecursion(target, array, middleIdx + 1, endIdx);
  else return binarySearchRecursion(target, array, startIdx, middleIdx - 1);
};

const arr = [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30];

console.log(binarySearchRecursion(19, arr));