const db = require("../../models");
const getDepartmentListHelper = async () => {
  try {
    const response = await db.departments.findAll();
    if (!response) {
      throw new Error ("There's no data on department");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const getDepartmentDetailHelper = async (id) => {
  try {
    const response = await db.departments.findOne({
      where: {id: id}
    });
    if (!response) {
      throw new Error("Department with this id doesn't exist")
    }
    return Promise.resolve(response.dataValues);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getDepartmentListHelper,
    getDepartmentDetailHelper
};
