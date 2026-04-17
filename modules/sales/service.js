import db from '../index.js';

const { SalesMaster, SalesDetails, User, Country, City, Product, sequelize } = db;


 // ATOMIC TRANSACTION: Saves 1 Master and N Details

export const createFullSale = async (payload) => {

  const t = await sequelize.transaction();   // Start the transaction

  try {
    const { userId, salesDate, notes, details } = payload;

    const master = await SalesMaster.create({
      UserID: userId,
      SalesDate: salesDate,
      Notes: notes || ""
    }, { transaction: t });


    const detailRows = details.map(row => ({
      SalesMasterID: master.SalesMasterID,
      CountryID: row.countryId,
      CityID: row.cityId,
      ProductID: row.productId,
      QtySold: parseInt(row.qtySold),
      Amount: parseFloat(row.amount)
    }));

    
    await SalesDetails.bulkCreate(detailRows, { transaction: t }); // 3. Bulk Insert the details

   
    await t.commit();   // 4. If everything is successful, commit
    return master;

  } catch (error) {
    
    await t.rollback(); //  If ANY step fails, delete everything created in this block
    throw error;
  }
};



export const getAllSalesWithDetails = async () => {
  return await SalesMaster.findAll({
    include: [
      { model: User, attributes: ['UserName'] },
      { 
        model: SalesDetails, 
        as: 'details',
        include: [
          { model: Country, attributes: ['CountryName'] },
          { model: City, attributes: ['CityName'] },
          { model: Product, attributes: ['ProductName'] }
        ]
      }
    ],
    order: [['CreatedOn', 'DESC']]
  });
};