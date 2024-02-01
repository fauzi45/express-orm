'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      employees.belongsTo(models.departments, {
        as: 'department',
        foreignKey: 'departmentId'
      });
    }
  }
  employees.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    departmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};