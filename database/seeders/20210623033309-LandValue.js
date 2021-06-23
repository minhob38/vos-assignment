const path = require("path");
const getTablesFromCsv = require("../../src/utils/getTablesFromCsv");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const csvPath = path.join(__dirname, "../../assets/test.csv");
    const tables = await getTablesFromCsv(csvPath);
    console.log(tables)
    
    await queryInterface.bulkInsert(
      "LandValues",
      [...tables],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
