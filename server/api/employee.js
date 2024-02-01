const Router = require("express").Router();

const EmployeeHelper = require("../helpers/EmployeeHelper");
const ValidationEmployee = require("../validation/ValidationEmployee");

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

Router.post("/create", createEmployee);

module.exports = Router;
