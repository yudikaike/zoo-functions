const data = require('../data/zoo_data');

function animalsByLocation() {
  return data.species.reduce((acc, curr) => {
    acc[curr.location] = data.species.filter((specie) => specie.location === curr.location)
      .map((specie) => specie.name);
    return acc;
  }, {});
}

function compareOptions(spe, sorted, sex) {
  if (sorted === true && sex) {
    return { [spe.name]: spe.residents.filter((res) => res.sex === sex)
      .map((resident) => resident.name).sort() };
  }
  if (sorted === true) {
    return { [spe.name]: spe.residents.map((res) => res.name).sort() };
  }
  if (sex) {
    return { [spe.name]: spe.residents.filter((res) => res.sex === sex)
      .map((resident) => resident.name) };
  }
  return { [spe.name]: spe.residents.map((res) => res.name) };
}

function animalsByName(options) {
  const { sorted, sex } = options;
  const obj = {};
  data.species.forEach((specie) => {
    obj[specie.location] = data.species.filter((animal) => specie.location === animal.location)
      .map((spe) => compareOptions(spe, sorted, sex));
  });
  return obj;
}

function getAnimalMap(options) {
  if (!options) {
    return animalsByLocation();
  }
  const { includeNames } = options;
  if (!includeNames) {
    return animalsByLocation();
  }
  return animalsByName(options);
}

console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'male' }));

module.exports = getAnimalMap;
