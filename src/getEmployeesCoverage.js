const data = require('../data/zoo_data');

function setEmployeesCoverage() {
  return data.employees.map((employee) => {
    const getSpecies = employee.responsibleFor.map((id) => data.species
      .find((specie) => specie.id === id).name);
    const getLocation = getSpecies.map((specie) => data.species
      .find((animal) => animal.name === specie)
      .location);
    return { id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpecies,
      locations: getLocation,
    };
  });
}

function getEmployeeById(id) {
  return setEmployeesCoverage().find((employee) => employee.id === id);
}

function getEmployeeByName(name) {
  return setEmployeesCoverage().find((employee) => {
    const firstName = employee.fullName.split(' ')[0];
    const lastName = employee.fullName.split(' ')[1];
    if (name === firstName || name === lastName) return true;
    return false;
  });
}

function getEmployeesCoverage(options) {
  if (!options) {
    return setEmployeesCoverage();
  }
  const { name, id } = options;
  const employeeById = getEmployeeById(id);
  const employeeByName = getEmployeeByName(name);
  if (employeeById === undefined && employeeByName === undefined) {
    throw new Error('Informações inválidas');
  }
  if (employeeById === undefined) {
    return employeeByName;
  }
  return employeeById;
}

console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
