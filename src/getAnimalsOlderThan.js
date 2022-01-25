const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const requestedSpecie = data.species.find((specie) => specie.name === animal);
  return requestedSpecie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
