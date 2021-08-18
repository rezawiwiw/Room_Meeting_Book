'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Rooms)
    }
  };
  User.init({
    name: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    address: DataTypes.STRING,
    department_id: DataTypes.STRING,
    RoomId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};