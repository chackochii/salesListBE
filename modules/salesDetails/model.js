export default (sequelize, DataTypes) => {
  return sequelize.define("SalesDetails", {
    SalesDetailID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    SalesMasterID: { type: DataTypes.BIGINT, allowNull: false },
    CountryID: { type: DataTypes.BIGINT, allowNull: false },
    CityID: { type: DataTypes.BIGINT, allowNull: false },
    ProductID: { type: DataTypes.BIGINT, allowNull: false },
    QtySold: { type: DataTypes.INTEGER, allowNull: false },
    Amount: { type: DataTypes.DECIMAL(18, 2), allowNull: false }
  }, { timestamps: true, tableName: 'SalesDetails' });
};