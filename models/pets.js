'use strict';
const {Model} = require('sequelize');
const petParents = require('../petParents');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.belongsTo(models.PetParents, { foreignKey: "parent" });   
     }
  };


  Pets.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    tricks: DataTypes.STRING,
    parent: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};