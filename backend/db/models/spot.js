'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.hasMany(
        models.SpotImage,
          { foreignKey: 'spotId', onDelete: 'CASCADE' }
      );
      Spot.hasMany(
        models.Booking,
          { foreignKey: 'spotId', onDelete: 'CASCADE' }
      );
      Spot.hasMany(
        models.Review,
          { foreignKey: 'spotId', onDelete: 'CASCADE' }
      );
      Spot.belongsTo(
        models.User,
          { foreignKey: 'ownerId', onDelete: 'CASCADE' }
      );
    }
  }
  Spot.init({
    ownerId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
