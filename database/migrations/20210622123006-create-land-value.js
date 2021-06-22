module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("LandValues", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pnu: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      base_year: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      base_month: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      public_price: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }, {
      timestamps: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LandValues");
  }
};