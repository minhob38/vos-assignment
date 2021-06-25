const path = require("path");
const createLandValueDbFromCsv = require("../../src/utils/createLandValueDbFromCsv");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const csvPath = path.join(__dirname, "../../assets/AL_11_D151_20210608.csv");
    await createLandValueDbFromCsv(csvPath);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LandValues");
  },
};
