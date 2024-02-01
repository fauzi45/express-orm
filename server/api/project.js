const Router = require("express").Router();

const ProjectHelper = require("../helpers/ProjectHelper");
const ValidationProjectHelper = require("../validation/ValidationProject");

const createProject = async (req, res) => {
  try {
    ValidationProjectHelper.createProjectValidation(req.body);
    const { name } = req.body;
    const response = await ProjectHelper.createProjectHelper(name);
    return res
      .status(200)
      .send({
        message: "Project data successfully created",
        data: response,
      });
  } catch (err) {
    res.status(400).send({
      message: "Project data failed to be created",
      data: err.message,
    });
  }
};

 
Router.post("/create", createProject);

module.exports = Router;