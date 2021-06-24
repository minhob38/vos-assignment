const path = require("path");
const createDbFromCsv = require("../../src/utils/createDbFromCsv");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const csvPath = path.join(__dirname, "../../assets/AL_11_D151_20210608.csv");
    // const csvPath = path.join(__dirname, "../../assets/test.csv");
    await createDbFromCsv(csvPath);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LandValues");
  },
};
