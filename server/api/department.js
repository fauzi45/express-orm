const Router = require("express").Router();

const DepartmentHelper = require("../helpers/DepartmentHelper");

const allDepartment = async (req, res) => {
  try {
    const response = await DepartmentHelper.getDepartmentListHelper();
    return res
      .status(200)
      .send({
        message: "Department data received successfully",
        data: response,
      });
  } catch (err) {
    res.status(400).send({
      message: "Department data failed to be received",
      data: err.message,
    });
  }
};

const detailDepartment = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await DepartmentHelper.getDepartmentDetailHelper(id);
    return res.status(200).send({
      message: "Department detail data received successfully",
      data: response,
    });
  } catch (err) {
    res.status(400).send({
      message: "Department detail data failed to be received",
      data: err.message,
    });
  }
};



Router.get("/all", allDepartment);
Router.get("/detail", detailDepartment);

module.exports = Router;
