'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Alcohol', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alcoholName: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      taste: {
        type: Sequelize.STRING
      },
      CategoryId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Alcohol');
  }
};