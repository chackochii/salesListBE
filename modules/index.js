import Sequelize from 'sequelize';
import config from '../config/db.config.js';

import UserModel from './user/model.js';
import CountryModel from './country/model.js';
import CityModel from './city/model.js';
import ProductModel from './product/model.js';
import SalesMasterModel from './salesMaster/model.js';
import SalesDetailsModel from './salesDetails/model.js';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  pool: config.pool,
  logging: false,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Initialize Models
db.User = UserModel(sequelize, Sequelize);
db.Country = CountryModel(sequelize, Sequelize);
db.City = CityModel(sequelize, Sequelize);
db.Product = ProductModel(sequelize, Sequelize);
db.SalesMaster = SalesMasterModel(sequelize, Sequelize);
db.SalesDetails = SalesDetailsModel(sequelize, Sequelize);


// 1. Users to SalesMaster
db.User.hasMany(db.SalesMaster, { foreignKey: 'UserID' });
db.SalesMaster.belongsTo(db.User, { foreignKey: 'UserID' });

// 2. Country to City (Cascading)
db.Country.hasMany(db.City, { foreignKey: 'CountryID' });
db.City.belongsTo(db.Country, { foreignKey: 'CountryID' });

// 3. SalesMaster to SalesDetails (Master-Detail)
db.SalesMaster.hasMany(db.SalesDetails, { 
    foreignKey: 'SalesMasterID', 
    as: 'details',
    onDelete: 'CASCADE' 
});
db.SalesDetails.belongsTo(db.SalesMaster, { foreignKey: 'SalesMasterID' });

// 4. Lookups for SalesDetails (The arrows in your diagram)
db.Country.hasMany(db.SalesDetails, { foreignKey: 'CountryID' });
db.SalesDetails.belongsTo(db.Country, { foreignKey: 'CountryID' });

db.City.hasMany(db.SalesDetails, { foreignKey: 'CityID' });
db.SalesDetails.belongsTo(db.City, { foreignKey: 'CityID' });

db.Product.hasMany(db.SalesDetails, { foreignKey: 'ProductID' });
db.SalesDetails.belongsTo(db.Product, { foreignKey: 'ProductID' });




export default db;