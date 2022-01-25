const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  const managerList = data.employees.filter((employee) => isManager(employee.id));
  if (isManager(managerId)) {
    const reqManager = managerList.find((manager) => manager.id === managerId);
    const relEmp = data.employees.filter((e) => e.managers.some((man) => man === reqManager.id));
    return relEmp.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
