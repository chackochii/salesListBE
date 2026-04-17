export default (sequelize, DataTypes) => {
  return sequelize.define("SalesMaster", {
    SalesMasterID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    SalesDate: { type: DataTypes.DATE, allowNull: false },
    UserID: { type: DataTypes.BIGINT, allowNull: false },
    Notes: { type: DataTypes.STRING(500) }
  }, { timestamps: true, createdAt: 'CreatedOn', updatedAt: false, tableName: 'SalesMaster' });
};