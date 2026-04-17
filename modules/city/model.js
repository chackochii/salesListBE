export default (sequelize, DataTypes) => {
  return sequelize.define("City_mst", {
    CityID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    CountryID: { type: DataTypes.BIGINT, allowNull: false },
    CityName: { type: DataTypes.STRING(150), allowNull: false }
  }, { timestamps: true, tableName: 'City_mst' });
};