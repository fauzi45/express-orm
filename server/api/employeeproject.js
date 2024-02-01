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

const detailEmployeeProject = async (req, res) => {
  try {
    ValidationEmployeeProjectHelper.detailEmployeeProjectValidation(req.query);
    const { id } = req.query;
    const response = await EmployeeProjectHelper.getEmployeeProjectDetailHelper(id);
    return res.status(200).send({
      message: "Employee Project detail data received successfully",
      data: response,
    });
  } catch (err) {
    res.status(400).send({
      message: "Employee Project detail data failed to be received",
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

const deleteEmployeeProject = async (req, res) => {
  try {
    ValidationEmployeeProjectHelper.deleteEmployeeProjectValidation(req.query);
    const { id } = req.query;
    const response = await EmployeeProjectHelper.deleteEmployeeProjectHelper(id);
    return res
      .status(200)
      .send({
        message: "Employee Project data successfully deleted",
        data: response,
      });
  } catch (err) {
    res.status(400).send({
      message: "Employee Project data failed to be deleted",
      data: err.message,
    });
  }
};

Router.get("/all", allEmployeeProject);
Router.get("/detail", detailEmployeeProject);
Router.post("/create", createEmployeeProject);
Router.delete("/delete", deleteEmployeeProject);
module.exports = Router;
