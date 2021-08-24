'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pets.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.NUMBER,
    tricks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pets',
  });
  return pets;
};