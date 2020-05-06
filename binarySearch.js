const binarySearch = (target, array) => {
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx <= endIdx) {
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    const middleVal = array[middleIdx];

    if (middleVal === target) return middleIdx;
    if (middleVal < target) startIdx = middleIdx + 1;
    if (middleVal > target) endIdx = middleIdx - 1;
  }

  return -1;
};

const arr = [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30];

console.log(binarySearch(19, arr));