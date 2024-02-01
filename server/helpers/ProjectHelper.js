const db = require("../../models");

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
};
