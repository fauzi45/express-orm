const Router = require("express").Router();

const EmployeeProjectHelper = require("../helpers/EmployeeProjectHelper");
const ValidationEmployeeProjectHelper = require("../validation/ValidationEmployeeProject");

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

Router.post("/create", createEmployeeProject);
module.exports = Router;
