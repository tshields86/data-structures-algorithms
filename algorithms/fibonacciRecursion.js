const fibonacciRecursion = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  return memo[n] = fibonacciRecursion(n - 1, memo) + fibonacciRecursion(n - 2, memo);
};

console.log(fibonacciRecursion(10)); /* 55 */