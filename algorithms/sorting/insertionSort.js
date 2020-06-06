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

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const states = ['New York', 'South Carolina', 'Maine', 'California', 'New Jersey', 'Colorado', 'Virginia', 'Montana', 'Arkansas', 'Washington', 'Texas', 'Wisconsin', 'Delaware', 'Mississippi', 'Oklahoma', 'Pennsylvania', 'Florida', 'New Mexico', 'Missouri', 'Hawaii', 'Massachusetts', 'Idaho', 'Alaska', 'Illinois', 'Nevada', 'Indiana', 'Kansas', 'Oregon', 'Arizona', 'Minnesota', 'North Carolina', 'Kentucky', 'Iowa', 'North Dakota', 'Ohio', 'Rhode Island', 'Alabama', 'Georgia', 'Maryland', 'Nebraska', 'South Dakota', 'Michigan', 'Tennessee', 'Connecticut', 'Utah', 'Louisiana', 'Vermont', 'West Virginia', 'Wyoming', 'New Hampshire'];

console.log(insertionSort(numbers));
console.log(insertionSort(states));