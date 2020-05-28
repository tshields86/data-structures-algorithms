const MinHeap = require('./minHeap');
const MaxHeap = require('./maxHeap');

const addNumber = (number, lowers, highers) => {
  if (!lowers.size || number < lowers.peek()) {
    lowers.add(number);
  } else highers.add(number);
};

const rebalance = (lowers, highers) => {
  const biggerHeap = lowers.size > highers.size ? lowers : highers;
  const smallerHeap = lowers.size > highers.size ? highers : lowers;
  if (biggerHeap.size - smallerHeap.size >= 2) {
    smallerHeap.add(biggerHeap.poll());
  }
};

const getMedian = (lowers, highers) => {
  const biggerHeap = lowers.size > highers.size ? lowers : highers;
  const smallerHeap = lowers.size > highers.size ? highers : lowers;
  if (biggerHeap.size === smallerHeap.size) {
    return (biggerHeap.peek() + smallerHeap.peek()) / 2;
  }
  return biggerHeap.peek();
};

const runningMedian = array => {
  const lowers = new MaxHeap();
  const highers = new MinHeap();
  const medians = [];

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    addNumber(number, lowers, highers);
    rebalance(lowers, highers);
    medians[i] = getMedian(lowers, highers).toFixed(1);
  }

  return medians;
};


console.log(runningMedian([1,2,3,4,5,6,7,8]))