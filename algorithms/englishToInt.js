/*
English: "eighty one million one hundred three thousand ten"

Int: 81,103,010


-----------

English: "two billion fifty one million eight"

Int: 2,051,000,008
*/

const SMALL = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90
};

const MAGNITUDE = {
  'thousand': 1000,
  'million': 1000000,
  'billion': 1000000000,
  'trillion': 1000000000000,
  'quadrillion': 1000000000000000,
  'quintillion': 1000000000000000000,
  'sextillion': 1000000000000000000000
};

const englishToInt = string => {
  const array = string.split(' ');

  let n = 0;
  let g = 0;
  
  array.forEach(w => {
    if (w === 'hundred') g = g * 100;

    const small = SMALL[w];
    if (small) g = g + small;

    const magnitude = MAGNITUDE[w];
    if (magnitude) {
      n = n + g * magnitude
      g = 0;
    }
  });

  return n + g;
};

console.log(englishToInt('eighty one million one hundred three thousand ten'));
console.log(englishToInt('two billion fifty one million eight'));
