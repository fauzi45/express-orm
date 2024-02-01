const db = require("../../models");

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
};
