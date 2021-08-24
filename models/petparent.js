'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetParent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PetParent.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    userID: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PetParent',
  });
  return PetParent;
};