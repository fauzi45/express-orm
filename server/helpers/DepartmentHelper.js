const db = require("../../models");
const getDepartmentListHelper = async () => {
  try {
    const response = await db.departments.findAll();
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getDepartmentListHelper,
};
