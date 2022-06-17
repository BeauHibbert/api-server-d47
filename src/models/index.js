'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const collectionClass = require('./collection-class');
const foodSchema = require('./food.schema');
const clothesSchema = require('./clothes.schema');


const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/api-app-d47';

const sequelize = new Sequelize(DATABASE_URL); 

const FoodModel = foodSchema(sequelize, DataTypes);
const ClothesModel = clothesSchema(sequelize, DataTypes);

FoodModel.hasMany(FoodModel, {foreignKey: 'foodId', sourceKey: 'id'});
ClothesModel.belongsTo(ClothesModel, {foreignKey: 'clothesId', targetKey: 'id'});

module.exports = {
  sequelize,
  customerInterface: new collectionClass(CustomerModel),
  orderInterface: new collectionClass(OrderModel),
};