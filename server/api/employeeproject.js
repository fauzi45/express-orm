const Router = require("express").Router();

const EmployeeProjectHelper = require("../helpers/EmployeeProjectHelper");
const ValidationEmployeeProjectHelper = require("../validation/ValidationEmployeeProject");

const allEmployeeProject = async (req, res) => {
  try {
    const response = await EmployeeProjectHelper.getEmployeeProjectListHelper();
    return res
      .status(200)
      .send({ message: "Employee Project data received successfully", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee Project data failed to be received",
      data: err.message,
    });
  }
};

const createEmployeeProject = async (req, res) => {
  try {
    ValidationEmployeeProjectHelper.createEmployeeProjectValidation(req.body);
    const { employeeId, projectId, role } = req.body;
    const response = await EmployeeProjectHelper.createEmployeeProjectHelper(
      employeeId,
      projectId,
      role
    );
    return res.status(200).send({
      message: "Employee Project data successfully created",
      data: response,
    });
  } catch (err) {
    res.status(400).send({
      message: "Employee Project data failed to be created",
      data: err.message,
    });
  }
};

Router.get("/all", allEmployeeProject);
Router.post("/create", createEmployeeProject);
module.exports = Router;
