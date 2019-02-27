'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Rudy',
        lastName: 'Kurniawan',
        birthday: '2000-08-09',
        email: "ruewowow@gmail.com",
        password: "tesajadl"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
