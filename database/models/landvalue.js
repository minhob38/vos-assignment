module.exports = (sequelize, DataTypes) => {
  const LandValue = sequelize.define("LandValue", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    pnu: {
      allowNull: false,
      type: DataTypes.STRING(19),
      validate: { is: /\d{19}/ },
    },
    base_year: {
      allowNull: false,
      type: DataTypes.STRING(4),
      validate: { is: /^[12]\d{3}/ },
    },
    base_month: {
      allowNull: false,
      type: DataTypes.STRING(2),
      validate: { is: /0[1-9]|1[012]/ },
    },
    public_price: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { is: /^\d+$/ },
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    indexes: [{ unique: false, fields: ["pnu", "base_year", "base_month"] }],
    timestamps: false,
  });

  return LandValue;
};
