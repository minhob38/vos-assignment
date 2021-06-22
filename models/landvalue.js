"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LandValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LandValue.init({
    pnu: DataTypes.INTEGER,
    base_year: DataTypes.DATE,
    base_month: DataTypes.DATE,
    public_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "LandValue",
  });
  return LandValue;
};