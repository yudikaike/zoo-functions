const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getFirstSpecieId = getEmployee.responsibleFor[0];
  const findSpecieById = data.species.find((specie) => specie.id === getFirstSpecieId);
  const oldestAge = findSpecieById.residents.reduce((acc, curr) => {
    if (curr.age > acc) {
      return curr.age;
    }
    return acc;
  }, 0);
  const oldestAnimal = findSpecieById.residents.find((res) => res.age === oldestAge);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
