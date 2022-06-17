'use strict'

const foodSchema = (sequelize, DataTypes) => {

  return sequelize.define('food', {
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foodgroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

module.exports = foodSchema;