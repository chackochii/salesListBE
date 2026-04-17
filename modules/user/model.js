export default (sequelize, DataTypes) => {
  return sequelize.define(
    "Users_mst",
    {
      UserID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      UserName: { type: DataTypes.STRING(150), allowNull: false },
      Email: { type: DataTypes.STRING(255) },
    },
    { timestamps: true, tableName: "Users_mst" },
  );
};
