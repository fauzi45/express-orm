const db = require("../../models");

const getEmployeeProjectListHelper = async () => {
  try {
    const response = await db.employeeprojects.findAll({
      include: [{ model: db.employees }, { model: db.projects }],
    });
    if (!response) {
      throw new Error("There's no data on Employee Project");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getEmployeeProjectDetailHelper = async (id) => {
  try {
    const response = await db.employeeprojects.findOne({
      include: [{ model: db.employees }, { model: db.projects }],
      where: { id: id },
    });
    if (!response) {
      throw new Error("Employee Project with this id doesn't exist");
    }
    return Promise.resolve(response.dataValues);
  } catch (error) {
    throw error;
  }
};

const createEmployeeProjectHelper = async (employeeId, projectId, role) => {
  try {
    const checkEmployee = await db.employees.findOne({
      where: { id: employeeId },
    });
    const checkProject = await db.projects.findOne({
      where: { id: projectId },
    });
    if (!checkEmployee) {
      throw new Error("Employee with this id doesn't exist");
    }
    if (!checkProject) {
      throw new Error("Project with this id doesn't exist");
    }
    const response = await db.employeeprojects.create({
      employeeId: employeeId,
      projectId: projectId,
      role: role,
    });
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEmployeeProjectHelper,getEmployeeProjectDetailHelper,
  getEmployeeProjectListHelper,
};
