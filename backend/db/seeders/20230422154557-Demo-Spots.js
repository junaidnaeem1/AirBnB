'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        name: 'Jacob',
        address: '12 First Street',
        city: 'Teaneck',
        state: 'New Jersey',
        country: 'USA',
        latitude: 1.2345,
        longitude: 2.34156,
        description: 'Great Place',
        price: 20,

      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1] }
    }, {});
  }
};
