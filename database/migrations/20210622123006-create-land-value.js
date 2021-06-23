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
        type: Sequelize.STRING,
      },
      base_year: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      base_month: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      public_price: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }, {
      timestamps: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LandValues");
  },
};
