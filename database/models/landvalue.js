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
      type: DataTypes.INTEGER,
    },
    base_year: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    base_month: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    public_price: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    timestamps: false,
  });

  return LandValue;
}
