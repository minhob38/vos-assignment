module.exports = (sequelize, DataTypes) => {
  const LandValue = sequelize.define("LandValue", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    pnu: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    base_year: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    base_month: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    public_price: {
      allowNull: true,
      type: DataTypes.STRING,
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
    }
  }, {
    timestamps: false,
  });

  return LandValue;
}
