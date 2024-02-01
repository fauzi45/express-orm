const db = require("../../models");

const getProjectListHelper = async () => {
  try {
    const response = await db.projects.findAll();
    if (!response) {
      throw new Error("There's no data on Project");
    }
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};

const createProjectHelper = async (name) => {
  try {
    const response = await db.projects.create({
      name: name
    });
    return Promise.resolve(response);
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createProjectHelper,
  getProjectListHelper
};
