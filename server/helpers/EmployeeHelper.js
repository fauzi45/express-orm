const db = require("../../models");

const getEmployeeListHelper = async () => {
  try {
    const response = await db.employees.findAll({
      include: 'department'
    });
    if (!response) {
      throw new Error("There's no data on Employee");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const createEmployeeHelper = async (name, position, departmentId) => {
  try {
    const response = await db.employees.create({
      name: name,
      position: position,
      departmentId: departmentId,
    });
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEmployeeHelper,
  getEmployeeListHelper
};
