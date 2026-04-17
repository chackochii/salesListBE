export default (sequelize, DataTypes) => {
  return sequelize.define("Product_mst", {
    ProductID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    ProductName: { type: DataTypes.STRING(150), allowNull: false },
    UnitPrice: { type: DataTypes.DECIMAL(18, 2) }
  }, { timestamps: true, tableName: 'Product_mst' });
};