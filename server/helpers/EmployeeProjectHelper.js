const db = require("../../models");

const createEmployeeProjectHelper = async (employeeId, projectId, role) => {
  try {
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
};
