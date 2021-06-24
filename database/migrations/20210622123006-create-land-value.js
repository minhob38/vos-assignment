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
        allowNull: false,
        type: Sequelize.STRING(19),
        validate: { is: /\d{19}/ },
      },
      base_year: {
        allowNull: false,
        type: Sequelize.STRING(4),
        validate: { is: /^[12]\d{3}/ },
      },
      base_month: {
        allowNull: false,
        type: Sequelize.STRING(2),
        validate: { is: /0[1-9]|1[012]/ },
      },
      public_price: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: { is: /^\d+$/ },
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
      indexes: [{ unique: false, fields: ["pnu", "base_year", "base_month"] }],
      timestamps: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LandValues");
  },
};
