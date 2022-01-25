const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const { specie: name, sex } = animal;
  const reqSpecie = data.species.find((specie) => specie.name === name);
  if (sex) {
    return reqSpecie.residents.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
  }
  return reqSpecie.residents.length;
}

console.log(countAnimals({ specie: 'penguins', sex: 'male' }));

module.exports = countAnimals;
