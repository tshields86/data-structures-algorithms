
const colorfulNumbers = number => {
  const set = new Set();
  const nums = [...String(number)];

  for (let i = 0; i < nums.length; i++) {
    let prev = 1;
    for (let j = i; j < nums.length; j++) {
      const product = prev * nums[j];
      if (set.has(product)) return false;
      else set.add(product);
      prev = product;
    }
  }

  return true;
};

console.log(colorfulNumbers(3245))
console.log(colorfulNumbers(326))