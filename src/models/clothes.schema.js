'use strict';

const clothesSchema = (sequelize, DataTypes) => {

  return sequelize.define('clothes', {
    style: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = clothesSchema;