/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "employees",
    {
      id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      jobtitle: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
    },
    {
      tableName: "employees",
      timestamps: false,
    }
  );
};
