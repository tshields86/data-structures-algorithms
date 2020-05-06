const collatzRecursion = n => {
  if (n === 1) return 0;
  else if (n % 2 === 0) return 1 + collatzRecursion(n / 2);
  else return 1 + collatzRecursion(3 * n + 1);
};

console.log(collatzRecursion(3)); /* 7 */
console.log(collatzRecursion(5)); /* 5 */
console.log(collatzRecursion(8)); /* 3 */