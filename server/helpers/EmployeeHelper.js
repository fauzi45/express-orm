const db = require("../../models");

const getEmployeeListHelper = async () => {
  try {
    const response = await db.employees.findAll({
      include: "department",
    });
    if (!response) {
      throw new Error("There's no data on Employee");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getEmployeeDetailHelper = async (id) => {
  try {
    const response = await db.employees.findOne({
      include: "department",
      where: { id: id },
    });
    if (!response) {
      throw new Error("Employee with this id doesn't exist");
    }
    return Promise.resolve(response.dataValues);
  } catch (error) {
    throw error;
  }
};

const createEmployeeHelper = async (name, position, departmentId) => {
  try {
    const checkDepartment = await db.departments.findOne({
      where: { id: departmentId },
    });
    if (!checkDepartment) {
      throw new Error("Department with this id doesn't exist");
    }
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
  getEmployeeListHelper,
  getEmployeeDetailHelper,
};
