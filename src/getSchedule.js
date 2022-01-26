const data = require('../data/zoo_data');

function setSchedule() {
  const schedule = {};
  const days = data.hours;
  Object.keys(days).forEach((day) => {
    if (days[day].open === 0 && days[day].close === 0) {
      schedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return schedule;
    }
    const filteredSpecies = data.species.filter((specie) => specie.availability
      .some((available) => available === day))
      .map((animal) => animal.name);
    schedule[day] = {
      officeHour: `Open from ${days[day].open}am until ${days[day].close}pm`,
      exhibition: filteredSpecies,
    };
    return schedule;
  });
  return schedule;
}

function getSchedule(scheduleTarget) {
  const schedule = setSchedule();
  if (Object.keys(schedule).some((day) => day === scheduleTarget)) {
    const findDay = Object.keys(schedule).find((day) => day === scheduleTarget);
    return { [findDay]: schedule[findDay] };
  }
  const animals = data.species.map((specie) => specie.name);
  if (animals.some((animal) => animal === scheduleTarget)) {
    const findAnimal = data.species.find((specie) => specie.name === scheduleTarget);
    return findAnimal.availability;
  }
  return setSchedule();
}

getSchedule('penguins');

module.exports = getSchedule;
