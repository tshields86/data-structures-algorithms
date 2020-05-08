/* Given a group of people with their birth and death years, find the year with the highest population. */

const getDeltas = people => {
  const deltas = {};
  for (let [birth, death] of people) {
    deltas[birth] = (deltas[birth] || 0) + 1;
    deltas[death + 1] = (deltas[death + 1] || 0) - 1;
  }
  return deltas;
};

const getMaxYear = deltas => {
    let maxYear = [];
    let maxPop = 0;
    let pop = 0;

    for (let [year, delta] of Object.entries(deltas)) {
      pop += delta;
      if (pop > maxPop) {
        maxPop = pop;
        maxYear = [ parseInt(year) ];
      } else if (pop === maxPop) {
        maxYear.push(parseInt(year));
      }
    }

    return maxYear;
}

const maxPopulation = people => {
  const deltas = getDeltas(people);
  return getMaxYear(deltas);
};

/* O(P + D) */

const groupA = [
  [2000, 2010],
  [1975, 2005],
  [1975, 2003],
  [1938, 1939],
  [1803, 1809],
  [1750, 1869],
  [1840, 1935],
  [1803, 1921],
  [1894, 1921],
]; /* [ '1803', '1840', '1894', '2000' ] */
const groupB = [[1920, 1939], [1911, 1944], [1920, 1955], [1938, 1939]]; /* [ '1938' ] */
console.log(maxPopulation(groupA));
console.log(maxPopulation(groupB));