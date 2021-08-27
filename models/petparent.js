'use strict';
const {
  Model
} = require('sequelize');
const petParents = require('../petParents');
const pets = require('./pets');
module.exports = (sequelize, DataTypes) => {
  class PetParents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PetParents.hasMany(models.Pets, { foreignKey: "parent" });
    }
  }
  PetParents.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    userID: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PetParents',
  });
  return PetParents;
};