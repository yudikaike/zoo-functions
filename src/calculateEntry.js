const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, entrant) => {
    if (entrant.age >= 50) {
      acc.senior += 1;
      return acc;
    }
    if (entrant.age >= 18) {
      acc.adult += 1;
      return acc;
    }
    acc.child += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrantsCount = countEntrants(entrants);
  let total = 0;
  Object.keys(entrantsCount).forEach((entrant) => {
    switch (entrant) {
    case 'child':
      total += entrantsCount[entrant] * 20.99;
      break;
    case 'adult':
      total += entrantsCount[entrant] * 49.99;
      break;
    default:
      total += entrantsCount[entrant] * 24.99;
      break;
    }
  });
  return total;
}

module.exports = { calculateEntry, countEntrants };
