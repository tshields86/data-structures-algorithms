const binarySearchRecursion = (target, array, startIdx = 0, endIdx = array.length - 1) => {
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  const middleVal = array[middleIdx];

  if (startIdx > endIdx) return -1;
  if (middleVal === target) return middleIdx;
  if (middleVal < target) return binarySearchRecursion(target, array, middleIdx + 1, endIdx);
  if (middleVal > target) return binarySearchRecursion(target, array, startIdx, middleIdx - 1);
};

const arr = [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30];

console.log(binarySearchRecursion(19, arr));