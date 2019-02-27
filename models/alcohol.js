'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alcohol = sequelize.define('Alcohol', {
    alcoholName: DataTypes.STRING,
    body: DataTypes.STRING,
    taste: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {timestamps: false});
  Alcohol.associate = function(models) {
    // associations can be defined here
  };
  return Alcohol;
};