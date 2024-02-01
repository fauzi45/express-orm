const db = require("../../models");

const getEmployeeProjectListHelper = async () => {
  try {
    const response = await db.employeeprojects.findAll({
      include: [
        {model: db.employees},
        {model: db.projects}
      ],
    });
    if (!response) {
      throw new Error("There's no data on Employee Project");
    }
    return Promise.resolve(response);
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
      role
    });
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createEmployeeProjectHelper,
  getEmployeeProjectListHelper
};
