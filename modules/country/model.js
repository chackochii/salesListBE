export default (sequelize, DataTypes) => {
  return sequelize.define("Country_mst", {
    CountryID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    CountryName: { type: DataTypes.STRING(150), allowNull: false }
  }, { timestamps: false, tableName: 'Country_mst' });
};