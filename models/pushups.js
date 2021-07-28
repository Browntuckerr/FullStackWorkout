const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pushups extends Model {}

Pushups.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pushups