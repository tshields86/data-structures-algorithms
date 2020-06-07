const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > key; j--) {
      array[j + 1] = array[j];
    }
    
    array[j + 1] = key;
  }

  return array;
};

module.exports = insertionSort;