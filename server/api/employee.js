const Router = require("express").Router();

const EmployeeHelper = require("../helpers/EmployeeHelper");
const ValidationEmployee = require("../validation/ValidationEmployee");

const allEmployee = async (req, res) => {
  try {
    const response = await EmployeeHelper.getEmployeeListHelper();
    return res
      .status(200)
      .send({ message: "Employee data received successfully", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee data failed to be received",
      data: err.message,
    });
  }
};

const detailEmployee = async (req, res) => {
  try {
    ValidationEmployee.detailEmployeeValidation(req.query);
    const { id } = req.query;
    const response = await EmployeeHelper.getEmployeeDetailHelper(id);
    return res.status(200).send({
      message: "Employee detail data received successfully",
      data: response,
    });
  } catch (err) {
    res.status(400).send({
      message: "Employee detail data failed to be received",
      data: err.message,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    ValidationEmployee.createEmployeeValidation(req.body);
    const { name, position, departmentId } = req.body;
    const response = await EmployeeHelper.createEmployeeHelper(
      name,
      position,
      departmentId
    );
    return res
      .status(200)
      .send({ message: "Employee data successfully created", data: response });
  } catch (err) {
    res.status(400).send({
      message: "Employee data failed to be created",
      data: err.message,
    });
  }
};

Router.get("/all", allEmployee);
Router.get("/detail", detailEmployee);
Router.post("/create", createEmployee);

module.exports = Router;
