"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "LandValues",
      [
        {
          pnu: 1234567890,
          base_year: new Date(),
          base_month: new Date(),
          public_price: 987654321,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete("People', null, {});
     */
  }
};
