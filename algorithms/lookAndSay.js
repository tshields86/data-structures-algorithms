const generateNextVal = input => {
  if (input.length === 1) return `1${input}`;

  let result = '';
  let current = input[0];
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (current !== input[i+1]) {
      result += `${count}${current}`;
      current = input[i + 1];
      count = 1;
    } else count++;
  }

  return result;
};

const lookAndSay = n => {
  let val = '1';

  for (let i = 0; i < n; i++) {
    console.log(val);
    val = generateNextVal(val);
  }
};

lookAndSay(10);
/* 
1
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211
*/