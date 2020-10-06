const NEARBY_CHARS = {
  'g': ['g', 'h', 'f'],
  'i': ['i', 'o', 'k'],
};

const getNearbyChars = char => new Set(NEARBY_CHARS[char]); // Returns a set

const VALID_WORDS = new Set(['go', 'hi']);

const isWord = word => VALID_WORDS.has(word); // Returns a bool

const nearbyPermutations = (letters, i = 0) => {
  if (i > letters.length) return letters;

  const subWords = nearbyPermutations(letters, i + 1);
  const nearbyLetters = getNearbyChars(letters[i]);
  const permutations = new Set(['']);

  subWords.forEach(subWord => {
    nearbyLetters.forEach(nearbyLetter => {
      permutations.add(nearbyLetter + subWord);
    });
  });

  return permutations; // Returns a set
};

const filterValidWords = words => {
  words.forEach(word => {
    if (!isWord(word)) words.delete(word);
  });
  return words; // Returns a set
};

const nearbyWords = word => {
  if (!word) return new Set();
  const letters = word.split('');
  const permutations = nearbyPermutations(letters);
  return filterValidWords(permutations); // Returns an set
};


console.log(nearbyWords('gi'));
